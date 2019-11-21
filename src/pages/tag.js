import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class TagPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Tag"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Tag Page</h1>
        
      </Layout>
    )
  }
}

export default TagPage
