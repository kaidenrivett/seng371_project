"use strict";

import { jwtVerify } from "jose";
import { GetServerSidePropsContext } from "next";
import { connectToDatabase } from "../database/mongoDb"

const role_access = {
    Patient: ["patient", "/"],
    Doctor: ["patient", "patient_list", "/"]
}

// Shouldn't really be hardcoded. Figure out secrets
export const JWT_KEY = new TextEncoder().encode("higcyftdcfvgbhigyft7drtcfy")

export type JwtClaims = {
    userKey: string,
    userRole: string,
}

export type User = {
    "_id": string
    "First Name": string,
    "Last Name": string,
    "Key": string,
    "Username": string,
    "Password": string,
    "Age": number,
    "Gender": string,
    "Role": string,
    "Department": string
}

// Authenticate the given request using the token cookie
export async function authenticate(context: GetServerSidePropsContext): Promise<
    { redirect: { destination: string, permanent: boolean } } | { props: { user: User } }> {
    const tokenCookie = context.req.cookies["token"];

    // No cookie provided
    if (tokenCookie == undefined) {
        console.log("tokenCookie undefined");
        return { redirect: { destination: '/Login', permanent: false, } };
    }

    let token: JwtClaims;

    // Verify jwt
    try {
        let jwtPayload = await jwtVerify(tokenCookie, JWT_KEY);
        token = jwtPayload.payload as JwtClaims;
    } catch (err) {
        console.log("Invalid jwt");
        return { redirect: { destination: '/Login', permanent: false, } };
    }

    // Check role access
    if (canAccess(token.userRole, context.resolvedUrl.split("?")[0])) {
        const user = await getUserDetails(tokenCookie);
        if (user == null) {
            return { redirect: { destination: '/denied', permanent: false, } };
        }
        return { props: { user: JSON.parse(JSON.stringify(user)) as User } };
    } else {
        // Access denied
        return { redirect: { destination: '/denied', permanent: false, } };
    }
}

// Checks if a user with the given role can access the endpoint
function canAccess(role: string, endpoint: string): boolean {
    if (endpoint.length > 1) {
        endpoint = endpoint.split("/")[1]
    }
    console.log(endpoint)
    if (!Object.keys(role_access).includes(role)) {
        return false;
    }

    let role_key = role as keyof typeof role_access;
    return role_access[role_key].includes(endpoint);
}

// TODO
// Get details from DB
export async function getUserClaims(user: string, pass: string): Promise<JwtClaims | null> {
    const db = await connectToDatabase();
    const data = await db.collection("app_users").findOne<User>({ "Username": user, "Password": pass });
    if (data == null) {
        return null;
    }
    return { userKey: data.Key, userRole: data.Role };
}

async function getUserDetails(tokenCookie: string | undefined): Promise<User | null> {
    if (tokenCookie == undefined) {
        return null;
    }

    let jwtClaims: JwtClaims;
    try {
        let jwtPayload = await jwtVerify(tokenCookie, JWT_KEY);
        jwtClaims = jwtPayload.payload as JwtClaims;
    } catch (err) {
        return null;
    }

    const db = await connectToDatabase();
    const data = await db.collection("app_users").findOne<User>({ "Key": jwtClaims.userKey });

    return data;
}
