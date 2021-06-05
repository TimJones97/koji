import React from "react";
import Card from "./card";

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';


const Articles = ({ articles }) => {
  const sortedArticles = articles.sort((a, b) => new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date))
  const titleArticle = sortedArticles[0].node;
  const remainingArticles = sortedArticles.slice(1, sortedArticles.length)
  return (
    <Container container xs={12} className="container articles">
      <Grid xs={12} className="card-container">
          <Card
              article={titleArticle}
              key={`${titleArticle.frontmatter.title}`}
              featured={true}
          />
      </Grid>
      {remainingArticles.map((article, index) => {
        return (
        <Grid xs={12} md={6} className="card-container">
            <Card
                article={article.node}
                key={`${article.node.frontmatter.title}`}
            />
        </Grid>
        )
      })}
    </Container>
  );
};

export default Articles;