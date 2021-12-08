
import { useState } from 'react';
import useSWR from 'swr';
import { Row, Col } from 'react-bootstrap';
import PageLayout from '../components/PageLayout';
import AuthorIntro from '../components/AuthorIntro';
import CardItem from '../components/CardItem';
import CardListItem from '../components/CardListItem';
import FilteringMenu from '../components/FilteringMenu';

import { getAllBlogs } from '../lib/api';

// we create the fetcher function so the SWR function can be more usable
const fetcher = url => fetch(url).then(res => res.json())

// Iterate over the blogs and map the blog
export default function Home({blogs}) {
  const [filter, setFilter] = useState({
    view: { list: 0 }
  });

  // create the useSWR function with the path string and fether function
  const { data, error } = useSWR('../api/hello', fetcher);
  debugger

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          debugger
          setFilter({...filter, [option]: value});
        }}
      />
      <hr/>
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        { blogs.map(blog =>
          filter.view.list ?
            <Col key={`${blog.slug}-list`} md="9">
            <CardListItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`
                }}
              />
            </Col>
            :
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`
                }}
              />
            </Col>
          )
        }
      </Row>
    </PageLayout>
  )
}


export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}