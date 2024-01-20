import { NextResponse } from "next/server";

const url = 'https://jsonplaceholder.typicode.com';

export async function GET(request: Request) {
    try {
        const idFromUrl = new URL(request.url);
        const id = idFromUrl.searchParams.get('id');
        const postResp = await fetch(`${url}/posts/${id}`);

        return NextResponse.json( postResp , { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);

        // You can inspect the error object and provide a more informative response
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
