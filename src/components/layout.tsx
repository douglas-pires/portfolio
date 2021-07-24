import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

interface LayoutProps {
  location: Location;
  title: string;
}

class Layout extends React.Component<LayoutProps> {
  render(): JSX.Element {
    const { location, title, children } = this.props;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: 70,
          }}
        >
          © {new Date().getFullYear()}, Forked from
          {` `}
          <a href="https://github.com/gatsbyjs/gatsby-starter-blog">
            Gatsby Starter Blog
          </a>
        </footer>
      </div>
    );
  }
}

export default Layout;
