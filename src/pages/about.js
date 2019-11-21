import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import "../styles/index.scss";
class AboutPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>About us</h1>
        
      </Layout>
    )
  }
}

export default AboutPage
