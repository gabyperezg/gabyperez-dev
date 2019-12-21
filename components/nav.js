import React from 'react'
import Link from 'next/link'

const links = [{ href: 'https://github.com/PichuPerez', label: 'GitHub' }].map(
  link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  }
)

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>gabyperez.dev</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href} target="_blank">
            {label}
          </a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        color: purple;
        text-align: center;
        font-family: 'Raleway', sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #a299a8;
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
      }
    `}</style>
  </nav>
)

export default Nav
