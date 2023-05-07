'use client';

import { signIn } from 'next-auth/react'

import LoginBtn from '@/components/LoginBtn'
import LogoutBtn from '@/components/LogoutBtn'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';

export default function NavProfileStatus() {


    let session: any = useSession();
    let [sessionData, setSessionData] = useState(false)
    let [loading, setLoading] = useState(true)
    let [sessionName, setSessionName] = useState("")
    useEffect(() => {
        setSessionData(session.data?.user)
        setSessionName(session.data?.user?.name)
        setLoading(session.status == "loading")
    })


    return (
        <div className='row-alignment'>
            <div className='mx-10'>{sessionName ? sessionName : ""}</div>
            <div>{loading ? "" : sessionData ? <LogoutBtn /> : <LoginBtn />}</div>
        </div>
    )
}
