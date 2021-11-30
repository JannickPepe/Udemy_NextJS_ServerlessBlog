
import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap'

import BlogContent from '../../components/BlogContent';


// What comes after the / in http://localhost:3000/blogs/ has the BlogDetail object values returned
const BlogDetail = ({blog}) => {
    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <BlogHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={blog.coverImage}
                        author={blog.author}
                        date={blog.date}
                    />
                    <hr/>
                    <BlogContent content={blog.content} />
                </Col>
            </Row>
        </PageLayout>
    )
}

// asyncronous function have params values then have the blog to await getBlogBySlog with params.slug value and return props with blog object
export async function getStaticProps({params}) {
    const blog = await getBlogBySlug(params.slug);
    return {
        props: {blog}
    }
}

// make the function getStaticPaths method where the values will be return 
//as from the paths object where any blogs will be mapped over the parameter b into params with the slug object value
export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    return {
        paths: blogs?.map(b => ({params: {slug: b.slug}})),
        fallback: false
    }
}


export default BlogDetail;