// // import { getServerSession } from "next-auth"
// // import authHandler from "@/pages/api/auth/[...nextauth]"

// import { getSession } from "next-auth/react"
// import type { NextApiRequest, NextApiResponse } from "next"

// export default async function session(
//     req: NextApiRequest,
//     res: NextApiResponse
//   ) {
//     const session = await getSession({ req })
//     res.send(JSON.stringify(session, null, 2))
//   }
// // async function isLoggedIn() {

// //     authHandler
// //     let session = await getServerSession(authOptions)
// //     if (session == null) {
// //         return false
// //     } else {
// //         return true
// //     }
// // }

// // async function getUserData() {
// //     let session = await getServerSession(authOptions)

// //     const user : Object = session.user
// //     if (session) {
// //         return session.user
// //     } else {
// //         return null
// //     }
// // }

// // module.exports = { isLoggedIn, getUserData }