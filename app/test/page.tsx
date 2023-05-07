import clientPromise from "@/util/database"

export default async function List() {

    let db = (await clientPromise).db('nextjs-ts')
    let result = await db.collection('test').find().toArray();
    console.log(result)

    return (
        <div >
            This is Test Page
        </div>
    )
}
