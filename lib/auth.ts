"use strict";

import { jwtVerify, SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

const role_access = {
    patient: ["/Patient", "/"],
    doctor: ["/Patient", "/patient_list", "/"]
}

// Shouldn't really be hardcoded. Figure out secrets
export const JWT_KEY = new TextEncoder().encode("higcyftdcfvgbhigyft7drtcfy")

export type siteUser = {
    user_id: number,
    user_role: string,
    user_department: string,
}

// Authenticate the given request using the token cookie
export async function authenticate(request: NextRequest): Promise<NextResponse> {
    const tokenCookie = request.cookies.get("token");

    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = "/Login";

    const deniedUrl = request.nextUrl.clone()
    deniedUrl.pathname = "/denied"

    if (tokenCookie == undefined) {
        console.log("tokenCookie undefined");
        return NextResponse.redirect(loginUrl);
    }

    let token: siteUser;

    // Verify jwt
    try {
        let jwtPayload = await jwtVerify(tokenCookie.value, JWT_KEY);
        token = jwtPayload.payload as siteUser;
    } catch (err) {
        console.log("Invalid jwt");
        return NextResponse.redirect(loginUrl);
    }

    // Check role access
    if (canAccess(token.user_role, request.nextUrl.pathname)) {
        return NextResponse.next();
    } else {
        // Access denied
        return NextResponse.redirect(deniedUrl)
    }
}

// Checks if a user with the given role can access the endpoint
function canAccess(role: string, endpoint: string): boolean {
    if (!Object.keys(role_access).includes(role)) {
        return false;
    }

    let role_key = role as keyof typeof role_access;
    return role_access[role_key].includes(endpoint);
}

// TODO
// Get details from DB
export function getUserFromDb(user: string, pass: string): siteUser | null {
    return { user_id: 1, user_role: "doctor", user_department: "cardiology" }
}

export async function getUserDetails(tokenCookie: string | undefined): Promise<siteUser | null> {
    if (tokenCookie == undefined) {
        return null;
    }

    try {
        let jwtPayload = await jwtVerify(tokenCookie, JWT_KEY);
        return jwtPayload.payload as siteUser;
    } catch (err) {
        return null;
    }
}
