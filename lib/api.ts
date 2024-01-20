import { PostResponseProps } from "../types/types";

export async function postsData(): Promise<PostResponseProps[]> {
  try {
    const response = await fetch('/api/posts');

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const json: PostResponseProps[] = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; //
  }
}
