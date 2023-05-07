// import { getServerSession } from "next-auth"
// import authHandler from "@/pages/api/auth/[...nextauth]"
// import { authOptions } from '@/pages/api/auth/[...nextauth]'


// export const isLoggedIn = async()  => {

//     authHandler
//     let session = await getServerSession(authOptions)
//     if (session == null) {
//         return false
//     } else {
//         return true
//     }
// }

// // async function getUserData() {
//     let session = await getServerSession(authOptions)

//     const user = session?.user
//     if (session) {
//         return session.user
//     } else {
//         return null
//     }
// }

// module.exports = { isLoggedIn, getUserData }