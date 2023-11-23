import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import Seo from '../components/seo';
import SectionUpdates from '../components/section-updates';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const updates = get(data, 'site.siteMetadata.updates', false);
  // const posts = data.allMarkdownRemark.edges.filter(
  //   (edge) => edge.node.frontmatter.type === 'blog'
  // );
  // const projects = data.allMarkdownRemark.edges.filter(
  //   (edge) => edge.node.frontmatter.type === 'project'
  // );
  // const experience = get(data, 'site.siteMetadata.experience', false);
  // const skills = get(data, 'site.siteMetadata.skills', false);
  // const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <Seo title={'Home'} />
      <Header metadata={data.site.siteMetadata} />
      {about && <SectionAbout about={about} />}
      {updates && updates.length && <SectionUpdates updates={updates} />}
      {/* {!noBlog && <SectionBlog posts={posts} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />} */}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query pageUserstalhaDesktopGitHubtalhayranciComsrcpagesindexJsx1345041852 {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        updates {
          date
          name
          description
        }
        experience {
          name
          description
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 5) {
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
