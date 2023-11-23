import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Gallery from '@browniebroke/gatsby-image-gallery';

const Index = ({ data }) => {
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    // Generate name based on the index as caption.
    caption: `Image ${index}`,
  }));

  return (
    <Layout>
      <Seo title="Aesthetics" />
      <Header metadata={data.site.siteMetadata} />
      <br />
      <Gallery images={images} />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query Aesthetics {
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
      filter: { relativeDirectory: { eq: "gallery" }}
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
