
import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap'


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
                    {/* Blog Content Here */}
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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