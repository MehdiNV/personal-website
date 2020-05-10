import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadshotImage = ({imageName}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headshot1Croatia.jpg" }) {
        childImageSharp {
          fixed (width: 140){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img
    fixed={data.file.childImageSharp.fixed}
    style = {{
        borderRadius: "50%"
    }}
    alt="Headshot Image"
  />
}

export default HeadshotImage
