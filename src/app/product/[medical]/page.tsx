import { validateConfig } from "next/dist/server/config-shared";

async function Medical ({params} : {params:{medical :string}}){
    
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.medical}`,
        {next : {revalidate :3000}}
    );
    const del = await data.json();
    return (

        <div>
            <h3>Medical</h3>
            <p>{del.id}</p>
            <p>{del.title}</p>
            <p>{del.body}</p>
        </div>
    )
}
export default Medical;


// static page {next : {revalidate : 3000}} use for load page data automatically eavery 3 second 
// dynamic page {cache : "no-store"} use for to load data from database