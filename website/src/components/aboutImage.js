import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = ({imageName}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "versionControl.png" }) {
        childImageSharp {
          fixed (width: 500, quality: 100){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img
    fixed={data.file.childImageSharp.fixed}
    alt="About Image from unDraw"
  />
}

export default AboutImage
