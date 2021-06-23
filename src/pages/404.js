import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFoundPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="404: Not found" />
          <section className="normal-section not-found light-nav contrast-nav">
            <div className="container">
              <header>
                <h1>
                  This page does not exist.
                </h1>
              </header>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default NotFoundPage
