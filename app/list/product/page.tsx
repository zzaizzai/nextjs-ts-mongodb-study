import clientPromise from "@/util/database"
import Link from "next/link"
import dayjs from "dayjs";

export default async function Product() {

    let db = (await clientPromise).db('nextjs-ts')
    let result = await db.collection('product').find().toArray();

    return (
        <div >
            {result.map((a: any, i: number) => {
                return (<div className="list-item" key={i}>
                    <Link href={"/product/" + a._id.toString()} ><h4>{a.title}</h4></Link>
                    {a.content}
                    <span>{dayjs(a.date).format("MM/DD HH:mm")}</span></div>)
            })}
        </div>
    )
}
