import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <a href="https://github.com/kinr-jay">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/connor-jacobs-49356031/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/the_kinr/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
      <p>{`Connor Jacobs \u00A9 ${new Date().getFullYear()}`}</p>
    </footer>
  )
}

export default Footer
