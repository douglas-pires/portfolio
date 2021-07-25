import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import useTranslation from '@/hooks/useTranslation';

function Projects(): JSX.Element {
  const { t, locale } = useTranslation();

  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      site {
        siteMetadata {
          projects {
            en {
              title
              url
              description
              moreLinks {
                type
                url
              }
            }
            br {
              title
              url
              description
              moreLinks {
                type
                url
              }
            }
            fr {
              title
              url
              description
              moreLinks {
                type
                url
              }
            }
          }
        }
      }
    }
  `);

  const { projects } = data.site.siteMetadata;

  return (
    <div>
      <div>
        <h3
          style={{
            ...scale(0.2),
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
            color: 'grey',
            textTransform: 'uppercase',
          }}
        >
          {t('recent_projects')}
        </h3>
      </div>
      <div>
        {projects.map(project => {
          const _locale = locale.includes('BR') ? 'br' : locale;

          const {
            [_locale]: { title, description, url, moreLinks },
          } = project;

          return (
            <div key={title}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <a
                  href={url}
                  style={{ boxShadow: `none` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </h3>
              <p>
                {description}
                {moreLinks &&
                  moreLinks.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      style={{ marginLeft: 10 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type}
                    </a>
                  ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
