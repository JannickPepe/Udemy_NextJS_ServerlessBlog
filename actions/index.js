
import useSWR from 'swr';

// we create the fetcher function so the SWR function can be more usable
const fetcher = url => fetch(url).then(res => res.json())

// create the useGetHello arrow function witht the useSWR function with the path string and fether function values
export const useGetHello = () => useSWR('../api/hello', fetcher);

// for the new useSWR
export const getBlogs = (url) => {
  return fetcher(url)
};

export const useGetBlogs = (initialData) => {
    return useSWR(`../api/blogs`, fetcher, {
        fallbackData: initialData
    })
};
