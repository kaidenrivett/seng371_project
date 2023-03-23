// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getUserFromDb, JWT_KEY } from "@lib/auth";
import { SignJWT } from 'jose';

type RequestData = {
    user: string,
    pass: string
}

type ResponseData = {
    location: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // Wrong method
    if (req.method != "POST") {
        res.status(405);
        return;
    }

    let userData: RequestData;
    console.log(req.body);
    userData = req.body;

    // Fields missing
    if (!userData.user || !userData.pass) {
        res.status(400)
        return;
    }

    let jwtClaims = getUserFromDb(userData.user, userData.pass);

    // Login failed
    if (jwtClaims == null) {
        res.status(401);
        return;
    }

    // Login succesful
    let token = await new SignJWT(jwtClaims)
        .setProtectedHeader({alg: "HS256"})
        .sign(JWT_KEY);
    let header = "token=" + token +"; Path=/";

    res.setHeader("Set-Cookie", header);
    res.json({location: "/"});
}
