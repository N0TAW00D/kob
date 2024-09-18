export default async function Page() {
    const data = await fetch("https://api.vercel.app/blog");
    const posts = await data.json();
    

    return (
        <ul>
            {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
            {posts.map((post:any) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

// export default async function Page() {
//     const data = await fetch("https://api.vercel.app/blog");
//     const posts = await data.json();
//     return(
//         <ul>
//             {posts.map((post: any)=>(
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     );
    
// }