import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Projects from '../components/projects';
import Posts from '../components/posts';
import Layout from '../components/layout';
import SEO from '../components/seo';
import useTranslation from '@/hooks/useTranslation';

interface IndexProps {
  location: Location;
  data: Record<string, Record<string, Record<string, string>>>;
}

function Index({ data, location }: IndexProps): JSX.Element {
  const siteTitle = data.site.siteMetadata.title;
  const { t } = useTranslation();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={t('page_title')} />
      <Bio />
      <Projects />
      <Posts />
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
