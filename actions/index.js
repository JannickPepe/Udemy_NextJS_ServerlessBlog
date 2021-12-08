
import useSWR from 'swr';

// we create the fetcher function so the SWR function can be more usable
const fetcher = url => fetch(url).then(res => res.json())

// create the useGetHello arrow function witht the useSWR function with the path string and fether function values
export const useGetHello = () => useSWR('../api/hello', fetcher);


export const useGetBlogs = () => {
    return useSWR(`/api/blogs`, fetcher)
}