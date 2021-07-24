import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';

import { rhythm, scale } from '../utils/typography';
import useTranslation from '@/hooks/useTranslation';

function Posts(): JSX.Element {
  const { locale } = useTranslation();
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              locale
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <div>
        <h3
          style={{
            ...scale(0.2),
            fontFamily: `Montserrat, sans-serif`,
            marginTop: rhythm(3),
            marginBottom: 0,
            color: 'grey',
            textTransform: 'uppercase',
          }}
        >
          Recent Posts
        </h3>
      </div>
      <div>
        {posts.map(({ node }) => {
          if (node.frontmatter.locale !== locale) return null;

          const title = node.frontmatter.title || node.fields.slug;

          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
