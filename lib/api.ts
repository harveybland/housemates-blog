import { PostResponseProps } from "../types/types";

export async function postsData(): Promise<any[]> {
  try {
    const response = await fetch('/api/posts');

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const json: PostResponseProps[] = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; //
  }
}

export async function postSingleData(): Promise<any> {
  try {
    const response = await fetch(`/api/post`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const json: PostResponseProps = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; //
  }
}