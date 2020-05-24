import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentSection from '../components/contentSection'
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentSection />
  </Layout>
)

export default IndexPage
