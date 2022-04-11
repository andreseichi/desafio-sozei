import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { MagnifyingGlass } from 'styled-icons/entypo';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--darker-white);
  border: 1px solid var(--darkest-white);
  border-radius: 5px;

  padding: 14px;
  min-width: 400px;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  width: 20px;
  height: 20px;

  color: var(--lighter-ink);
`;

export const Input = styled.input<InputProps>`
  background: transparent;
  border: none;

  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.4px;
  line-height: 26px;

  margin-left: 1.25rem;
  width: 100%;

  color: var(--ink);
`;
