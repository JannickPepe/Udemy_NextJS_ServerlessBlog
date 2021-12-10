
import { getAllBlogs } from '../../lib/api';

// feth the array from the json after the res (response) status
export default async function getBlogs(req, res) {
    const data = await getAllBlogs();
    res.status(200).json(data);
}