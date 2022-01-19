
import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import ErrorPage from 'next/error';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap'
import { urlFor } from 'lib/api';
import moment from 'moment';
import { useRouter } from 'next/router';

import BlogContent from '../../components/BlogContent';
import PreviewAlert from '../../components/PreviewAlert';


// What comes after the / in http://localhost:3000/blogs/ has the BlogDetail object values returned
const BlogDetail = ({blog, preview}) => {
    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode="404"/>
    }
    if (router.isFallback) {
        
        return (
        <PageLayout className="blog-detail-page">
            Loading...
        </PageLayout>
        )
    }

    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    { preview && <PreviewAlert /> }
                    <BlogHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={urlFor(blog.coverImage).height(500).url()}
                        author={blog.author}
                        date={moment(blog.date).format('LLL')}
                    />
                    <hr/>
                    { blog.content &&
                        <BlogContent content={blog.content} />
                    }
                </Col>
            </Row>
        </PageLayout>
    )
}

// asyncronous function have params values, the preview value and previewData. Then have the blog to await getBlogBySlog with any promise values and then return the property onto the object blog
export async function getStaticProps({params, preview = false, previewData}) {

    const blog = await getBlogBySlug(params.slug, preview);
    return {
        props: {blog, preview}
    }
};


//Introduce fallback
// make the function getStaticPaths method where the values will be return 
//as from the paths object where any blogs will be mapped over the parameter b into params with the slug object value
export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    const paths = blogs?.map(b => ({params: {slug: b.slug}}));
    return {
        paths,
        fallback: true
    }
}


export default BlogDetail;