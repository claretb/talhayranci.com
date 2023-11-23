import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import Seo from '../components/seo';
import NotFound from '../pages/404';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.frontmatter.type === 'blog'
  );
  const noBlog = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Seo title="Blog" />
      <Header metadata={data.site.siteMetadata} />
      {!noBlog && <BlogPosts posts={posts} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query Blog {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            type
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
