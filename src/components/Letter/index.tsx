import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle } from 'helpers/definitions';

const Letter: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "letter section" } }) {
        html
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;

  return (
    <Container section center>
      <TitleSection id="my-story" title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <FormatHtml content={markdownRemark.html} />
    </Container>
  );
};

export default Letter;
