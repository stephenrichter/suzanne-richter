import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  id?: string;
  title: string;
  subtitle?: string;
}

const TitleSection: React.FC<Props> = ({ center, id, title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle center={center}>{title}</Styled.SubTitle>}
    <Styled.Title id={id} center={center}>{subtitle}</Styled.Title>
    <Styled.Separator center={center} />
  </Styled.TitleSection>
);

export default TitleSection;
