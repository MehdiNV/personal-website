import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const HeadshotImage = ({imageName}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headshot1Croatia.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} alt="" />
}

export default HeadshotImage
