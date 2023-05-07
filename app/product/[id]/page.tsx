import clientPromise from "@/util/database"
import Link from "next/link"


export default async function Product(props: any) {

    // let db = (await clientPromise).db('nextjs-ts')
    // let result = await db.collection('product').find().toArray();
    let id: string = props.params.id


    return (
        <div >
            product : {id}
        </div>
    )
}
