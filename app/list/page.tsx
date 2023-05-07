import clientPromise from "@/util/database"
import Link from "next/link"


export default async function Product() {

    let db = (await clientPromise).db('nextjs-ts')
    let result = await db.collection('product').find().toArray();


    
    return (
        <div >
            {result.map((a: any, i: number) => {
                return (<div className="list-item" key={i}>
                    <Link href={"/list/"} ><h4>{a.title}</h4></Link>
                    {a.content}
                    <span>{a.date.toString()}</span></div>)
            })}
        </div>
    )
}
