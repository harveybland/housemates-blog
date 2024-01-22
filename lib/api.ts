import { Post } from "../types/types";

export async function postsData(): Promise<Post[]> {
  try {
    const response = await fetch('/api/posts');

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const json: Post[] = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}