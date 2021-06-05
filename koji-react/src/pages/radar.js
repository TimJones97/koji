import React from "react"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles";
import Banner from '../components/banner'

import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allMdx(
        filter: {
          fields: { collection: { eq: "posts" } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          id
          excerpt(truncate: true, pruneLength: 126)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title 
            subtitle
            readTime
            blogImg {
              childImageSharp {
                fixed(width: 800) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Articles = () => {
  const data = useStaticQuery(query);
  return (
    <Layout>
      <Banner title={"Radar"} subTitle={"An up-to-date relay of information in the Tracer ecosystem"}/>
      <ArticlesComponent articles={data.allMdx.edges} />
    </Layout>
  )
}

export default Articles;
