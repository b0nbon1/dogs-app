import styled from '@emotion/native';

export const MainContainer = styled.View`
  background-color: ${props => props.theme.blockquotebg};
  flex: 1;
`;

export const Grid = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Card = styled.View`
  background-color: ${props => props.theme.blockquotebg};
`;
