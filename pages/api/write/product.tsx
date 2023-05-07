
import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from 'next/server'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let session = await getServerSession(req, res, authOptions)

    console.log(session)
    console.log(req.body)

    if (!req.body?.title || !req.body?.content) {
        res.setHeader("location", "/write/product");
        res.statusCode = 302;
        res.end();
        return;
    }

    if (session == null) {
        res.setHeader("location", "/list/product");
        res.statusCode = 302;
        res.end();
        return;
    }


    if (req.method == "POST") {
        res.setHeader("location", "/list/product");
        res.statusCode = 302;
        res.end();
        return;


    }
}