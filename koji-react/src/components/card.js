import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Grid from '@material-ui/core/Grid';
import Markdown from 'react-markdown';

const Card = ({ article, featured }) => {
  const { date, slug, title, readTime, subtitle, blogImg } = article.frontmatter;
  if (featured) {
    return (
      <Link to={`/radar/${slug}`}>
        <div className="blog-card">
          <Grid container spacing={1} className="content featured" >
            <Grid xs={12} md={6} lg={6}>
              {blogImg && (
                <Img
                  fluid={blogImg.childImageSharp.fixed}
                  imgStyle={{ position: "static", marginTop: 'auto' }}
                  />
              )}
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <div className="excerpt">
                <h2><strong>{title}</strong></h2>
                <h5>{subtitle}</h5>
                <p className="sub-text">{date} - {readTime} minute read</p>
                <Markdown disallowedTypes={["heading"]} excapeHtml={false} source={article.excerpt} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Link>
    );
  } else {
    return (
      <Link to={`/radar/${slug}`}>
        <div className="blog-card">
          <div className="content">
            <h4><strong>{title}</strong></h4>
            <h5>{subtitle}</h5>
            <p className="sub-text">{date} - {readTime} minute read</p>
            {blogImg && (
              <Img
                fixed={blogImg.childImageSharp.fixed}
                imgStyle={{ position: "static", marginTop: 'auto' }}
                />
            )}
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;