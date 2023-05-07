export default async function Write() {

    return (
        <div className="container">
            <form action="/api/write/product" method="POST">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="Title" />
                <label htmlFor="content">Content</label>
                <textarea rows={8} cols={70} name="content" placeholder="Content" />
                <button type="submit">Write</button>
            </form>
        </div>
    )
}