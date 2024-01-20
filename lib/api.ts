// import { EmailLookupResponse } from 'types/types';

export async function postsData(): Promise<any> {
  try {
    const response = await fetch('/api/posts');

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    
    const json: any = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; //
  }
}
