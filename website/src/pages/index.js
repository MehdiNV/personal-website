import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProfileHeader from '../components/profileHeader'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileHeader />

  </Layout>
)

export default IndexPage
