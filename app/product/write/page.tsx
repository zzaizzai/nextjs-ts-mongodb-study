'use client'

import { NextPage } from "next";
import Link from "next/link";
import { useSession } from 'next-auth/react'

const IndexPage: NextPage = () => {
    let session = useSession();

    return (
        <div>
            ddd
        </div>
    );
};

export default IndexPage;