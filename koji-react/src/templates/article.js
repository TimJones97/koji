import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
        blogImg {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`

const Disclaimer = ({ author }) => {
    return (
        author
            ? <h5 style={{fontStyle: 'italic', opacity: 0.7, paddingTop: '20px'}} align='center'>
                ***DISCLAIMER: The views and opinions expressed in this article are those 
                of the author and do not necessarily reflect the opinion or position of Chainlink Oracle Reputation.
            </h5>
            : null
    )
}

const SLink = styled(Link)
`
  text-decoration: none!important;
  &: hover {
    text-decoration: underline!important;
  }
`

const Date = styled.div
`
  margin-left: auto;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`

const Subtitle = styled.p
`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.6rem!important;
`

const Title = styled.h1
`
  padding: 0;
  text-align: center;
  margin-bottom: 1.6rem!important;
  font-size: 1.6rem!important;
  font-weight: 700!important;
  @media (min-width: 960px) {
    font-size: 1.8rem!important;
  }
`

const Topbar = styled.div
`
  margin-top: 2rem;
  font-size: 14px;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  
`

const Article = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  const seo = {
    metaTitle: `Radar - ${frontmatter.title}`,
    metaDescription: frontmatter.description,
    shareImage: frontmatter.blogImg,
    article: true,
  };
  return (
    <Layout seo={seo}>
      <div className="container blog-container">
        <Topbar>
          <div>
            <SLink to="/">Tracer > </SLink>
            <SLink to={`/radar`}>Radar > </SLink>
            {frontmatter.title}
          </div>
          <Date>
            {frontmatter.date}
          </Date>
        </Topbar>
        <Title>{frontmatter.title}</Title>
        <Subtitle>{frontmatter.subtitle}</Subtitle>
        {frontmatter.authorName ? <h2 className="author">By <a className="author-name" href={frontmatter.authorUrl} target="_blank" rel="noopener noreferrer">{frontmatter.authorName}</a></h2> : ''}
        <MDXRenderer>{body}</MDXRenderer>
        <Disclaimer author={frontmatter.authorName} />
      </div>
    </Layout>
  );
};

export default Article;