import { NextResponse } from "next/server";

const url = 'https://jsonplaceholder.typicode.com';

export async function GET() {
    try {
        const postResp = await fetch(`${url}/posts`);
        const posts = await postResp.json();

        // Fetch user and comments for each post and add user and comments length to each post
        const postsWithData = await Promise.all(
            posts.map(async (post: any) => {
                const userResp = await fetch(`${url}/users/${post.userId}`);
                const user = await userResp.json();

                const commentsResp = await fetch(`${url}/posts/${post.id}/comments`);
                const comments = await commentsResp.json();

                return { ...post, user, NumbOfComments: comments.length };
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
