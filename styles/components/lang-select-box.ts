import styled from 'styled-components';

export const StyledLangSelectBox = styled.select`
  margin-left: 0.5rem;
  padding: 0.3rem 0.7rem;
  border-radius: 0.3rem;
  background: transparent;
  font-family: Roboto;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.textPrimary};

  & option {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
  }
`;
