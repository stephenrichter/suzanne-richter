import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  primaryLink: string;
  primaryText: string;
  secLink: string;
  secText: string;
}

const HeroBanner: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          primaryLink
          primaryText
          secLink
          secText
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      primaryLink={heroBanner.primaryLink}
      primaryText={heroBanner.primaryText}
      secLink={heroBanner.secLink}
      secText={heroBanner.secText}
    />
  );
};

export default HeroBanner;
