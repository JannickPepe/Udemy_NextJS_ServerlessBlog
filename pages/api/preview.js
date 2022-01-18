import { getBlogBySlug } from '../../lib/api';

export default async function enablePreview(req, res) {

    // the if statement will check for secret or required slug if not then return the res.status
    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({message: 'Invalid token'})
    }

    // or if there is a blog with given checks then await and import the promise getBlogBySlug with the given values
    const blog = await getBlogBySlug(req.query.slug);

    // send res.status if there is no blug
    if (!blog) {
        return res.status(401).json({message: 'Invalid Slug!'})
    }
    // setPreviewData will set cookies into you browsert
    // __prerender_bypass __next_preview_data
    res.setPreviewData({});
    res.writeHead(307, { Location: `/blogs/${blog.slug}`})
    res.end();
}