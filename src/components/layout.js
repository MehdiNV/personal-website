/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./componentsCSS/layout.css"

import { RiGatsbyLine, RiReactjsLine, RiHeartLine } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          padding: `0 0 1.45rem`,
        }}
        class = "body"
      >
        <main>{children}</main>
        <footer class="animate__animated animate__fadeIn animate__delay-5s">
          <h6 id = "footerName">Designed & Developed by Mehdi Naderi Varandi</h6>
          <h6> © {new Date().getFullYear()}. Made with
            <span>
              <RiGatsbyLine />
              <RiReactjsLine />
              <GrGraphQl />
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
