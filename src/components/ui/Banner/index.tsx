import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  primaryLink: string;
  primaryText: string;
  secLink: string;
  secText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, primaryLink, primaryText, secLink, secText }) => (
  <Styled.Banner>
    <Container section center>
      {/* <TitleSection title={title} subtitle={subtitle} /> */}
      <Styled.Content>{content}</Styled.Content>
      <Link to={primaryLink}>
        <Button primary>{primaryText}</Button>
      </Link>
      <Link to={secLink}>
        <Button>{secText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
