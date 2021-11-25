import client from './sanity';

// when returning block results only show the array type blog with the specific values
export async function getAllBlogs() {
    const results = await client
    .fetch(`*[_type == "blog"]{title, subtitle, slug}`);
    return results;
}