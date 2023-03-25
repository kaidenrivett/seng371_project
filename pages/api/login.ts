// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getUserClaims, JWT_KEY } from "@lib/auth";
import { SignJWT } from 'jose';

type RequestData = {
    user: string,
    pass: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Wrong method
    if (req.method != "POST") {
        console.log("Wrong method");
        res.status(405).send("");
        return;
    }

    let userData: RequestData;
    console.log(req.body);
    userData = req.body;

    // Fields missing
    if (!userData.user || !userData.pass) {
        console.log("Fields missing");
        res.status(400).send("");
        return;
    }

    let jwtClaims = await getUserClaims(userData.user, userData.pass);

    // Login failed
    if (jwtClaims == null) {
        console.log("Login failed");
        res.status(401).send("");
        return;
    }

    // Login succesful
    let token = await new SignJWT(jwtClaims)
        .setProtectedHeader({alg: "HS256"})
        .sign(JWT_KEY);
    let header = "token=" + token +"; Path=/";

    res.setHeader("Set-Cookie", header);
    res.status(200).json({location: "/"});
    console.log("Login successful");
}
