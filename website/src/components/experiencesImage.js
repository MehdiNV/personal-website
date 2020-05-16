import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ExperiencesImage = ({imageName}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pondering.png" }) {
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
    fluid={data.file.childImageSharp.fluid}
    alt="About Image from unDraw"
  />
}

export default ExperiencesImage
