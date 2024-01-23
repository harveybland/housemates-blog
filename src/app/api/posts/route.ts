import { NextResponse } from "next/server";
import { Post } from "../../../../types/types";


const url = 'https://jsonplaceholder.typicode.com';

export async function GET() {
    try {
        const postResp = await fetch(`${url}/posts`);
        const posts: Post[] = await postResp.json();

        // Fetch author and comments for each post and add author and comments length to each post
        // TODO: Optimize this code to make it faster
        const postsWithData = await Promise.all(
            posts.map(async (post) => {
                const authorResp = await fetch(`${url}/users/${post.userId}`);
                const author = await authorResp.json();

                const commentsResp = await fetch(`${url}/posts/${post.id}/comments`);
                const comments = await commentsResp.json();

                return { ...post, author, NumbOfComments: comments.length };
            })
        );

        return NextResponse.json( postsWithData , { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);

        // You can inspect the error object and provide a more informative response
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
