
import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';


// What comes after the / in http://localhost:3000/blogs/ has the BlogDetail object values returned
const BlogDetail = () => {
    // make it work with query into useRouter method
    const { query } = useRouter();
    return (
    <PageLayout>
        <h1>Hello Detail Page - {query?.slug}</h1>
    </PageLayout>
    )
}

export default BlogDetail;