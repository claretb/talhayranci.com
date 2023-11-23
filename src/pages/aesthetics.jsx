import { graphql } from 'gatsby';
import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';
import Gallery from '@browniebroke/gatsby-image-gallery';

const Index = ({ data }) => {
  //   const posts = data.allMarkdownRemark.edges.filter(
  //     (edge) => edge.node.frontmatter.type === 'blog'
  //   );
  //   const noBlog = !posts || !posts.length;

  //   if (!posts || !posts.length) {
  //     return <NotFound />;
  //   }
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    // Generate name based on the index as caption.
    caption: `Image ${index}`,
  }));

  return (
    <Layout>
      <SEO title="Aesthetics" />
      <Header metadata={data.site.siteMetadata} />
      <br />
      <Gallery images={images} />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query CombinedQuery {
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
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name, order: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
