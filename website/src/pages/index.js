import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProfileHeader from '../components/profileHeader'
import Section from '../components/section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileHeader />
    <Section sectionTitle = "About" />
  </Layout>
)

export default IndexPage
