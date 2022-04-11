import styled from 'styled-components';
import { X } from 'styled-icons/feather';

import { Container as Button } from '../Button/styles';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;

    font-size: 1.625rem;
    line-height: 2rem;
    letter-spacing: 0.52px;
    color: var(--ink);

    svg {
      width: 20px;
      height: 20px;
      color: var(--light-ink);
    }
  }

  label {
    margin-top: 1rem;
  }

  input {
    width: 100%;
    background: transparent;
    background-color: var(--darker-white);
    border: 1px solid var(--darkest-white);
    border-radius: 5px;
    color: var(--ink);

    padding: 14px;

    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.4px;
    line-height: 26px;

    margin-top: 0.5rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
`;

export const CloseIcon = styled(X)`
  width: 12px;
  height: 12px;
`;

export const ButtonCustom = styled(Button)`
  width: 100%;
`;
