import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  section?: boolean;
  center?: boolean;
}

export const Container = styled.div<StyledProps>`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto p-5 content-center justify-center`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
  ${({ center }) => center && tw`content-center justify-center`};
`;
