import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from '../components/job-banner';
import Jobs from '../components/jobs';
import { JobInfo, ThemeProvider } from '@dospore/job-board';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { colorTheme } from '../theme'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      # rawMarkdownBody
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        jobTitle
        contract
        location
        applicationLink
      }
    }
    allMdx(
        filter: {
          fields: { collection: { eq: "jobs" } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          id
          frontmatter {
            slug
            category
            date
            jobTitle 
            contract
            location
          }
        }
      }
    }
  }
`


const Article = ({ data }) => {
    const { frontmatter, body } = data.mdx;
    const { jobTitle } = frontmatter;
    const seo = {
        metaTitle: `Tracer Careers - ${jobTitle}`,
        metaDescription: `Open ${jobTitle} position. Join the Tracer team.`,
        shareImage: {childImageSharp: {original: { src: '/tcr_banner.png'}}},
        article: false,
    };
    
    return (
        <Layout seo={seo}>
            {/* <ThemeProvider theme={colorTheme}>
                <Banner />
                <JobInfo {...frontmatter}>
                    <MDXRenderer>{body}</MDXRenderer>
                </JobInfo>
                <Jobs jobs={data.allMdx.edges} />
            </ThemeProvider> */}
        </Layout>
    );
};

export default Article;