import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Something went wrong!</h1>
    <p>Unfortunately something, somewhere, went wrong. This route doesn't exist</p>
  </Layout>
)

export default NotFoundPage
