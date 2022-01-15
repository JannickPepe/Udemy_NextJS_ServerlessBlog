
import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';


// define what we will like to fetch
const blogFields = `
    title,
    subtitle,
    'slug': slug.current,
    date,
    'author': author->{name, 'avatar': avatar.asset->url},
    coverImage,
`
const builder = imageUrlBuilder(client)


// when returning block results only show the array type blog with the specific values with blogfields. Set offset with initial value to 0
export async function getAllBlogs({offset} = {offset: 0}) {
    const results = await client
    .fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}[${offset}...${offset + 3}]`);
    return results;
}

//
export async function getPaginatedBlogs({offset = 0, date = 'desc'} = {offset: 0, date: 'desc'}) {
const results = await client
    .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 3}]`);
return results;
}



// the parameter source will get the props from the variable assets then return how the image should be
export function urlFor(source) {
    return builder.image(source);
}


// asyncronous function which has slug as prop and make a query result which will fetch every type blog which has a slug
// then have the blogFields where the object slug is, then have res (result) to show the res parameter array index
export async function getBlogBySlug(slug) {
    const result = await client
        .fetch(`*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
        content[]{..., "asset": asset->}
        }`, {slug})
        .then(res => res?.[0])

        return result;
}
