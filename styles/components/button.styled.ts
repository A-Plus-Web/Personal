import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledButtonWrapper = styled(motion.div)``;

export const StyledButton = styled.button<{ color: string; textColor: string }>`
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 500;
  width: 100%;

  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  font-weight: 900;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
