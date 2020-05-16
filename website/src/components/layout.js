/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./componentsCSS/layout.css"

import { RiGatsbyLine, RiReactjsLine, RiHeartLine } from "react-icons/ri";
import { GrGraphQl, GrHeroku } from "react-icons/gr";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          padding: `0 0 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <h6 id = "footerName">Designed & Developed by Mehdi Naderi Varandi</h6>
          <h6> © {new Date().getFullYear()}. Made with
            <span>
              <RiGatsbyLine />
              <RiReactjsLine />
              <GrGraphQl />
              <GrHeroku />
              <RiHeartLine />
            </span>
          </h6>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
