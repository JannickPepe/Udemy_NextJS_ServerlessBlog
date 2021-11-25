import client from './sanity';

// define what we will like to fetch 
const blogFields = `
    title,
    subtitle,
    'slug': slug.current,
    date,
    'author': author->{name, 'avatar': avatar.asset->url},
    'coverImage': coverImage.asset->url
`

// when returning block results only show the array type blog with the specific values with blogfields
export async function getAllBlogs() {
    const results = await client
    .fetch(`*[_type == "blog"]{${blogFields}}`);
    return results;
}