// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextAuthOptions } from "next-auth";

// require("dotenv").config();

// export interface AuthRequest extends NextApiRequest {
//     query: {
//         callbackUrl?: string;
//     };
// }

// export default async function authHandler(
//     req: AuthRequest,
//     res: NextApiResponse
// ) {

//     const options: NextAuthOptions = {
//         providers: [
//             GithubProvider({
//                 clientId: process.env.clientId as string,
//                 clientSecret: process.env.clientSecret as string,
//             }),
//         ],
//         secret: process.env.secret,
//     };

//     await NextAuth(req, res, options);
// }


import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { NextApiRequest, NextApiResponse } from "next";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.clientId as string,
            clientSecret: process.env.clientSecret as string,
        }),
    ],
    secret: process.env.secret as string
};

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, authOptions);