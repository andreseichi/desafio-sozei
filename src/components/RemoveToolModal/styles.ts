import styled from 'styled-components';
import { X } from 'styled-icons/feather';

import { Container as Button } from '../Button/styles';

interface ButtonCustomProps {
  secondary?: boolean;
}

export const Container = styled.div`
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

  p {
    margin-top: 1rem;

    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    line-height: 26px;
  }
`;

export const CloseIcon = styled(X)`
  width: 12px;
  height: 12px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 1rem;
`;

export const ButtonCustom = styled(Button)<ButtonCustomProps>`
  width: 122px;

  padding: 14px 0;

  background-color: ${(props) =>
    props.secondary ? 'var(--most-lightest-blue)' : 'var(--blue)'};
  color: ${(props) => (props.secondary ? 'var(--blue)' : 'var(--white)')};

  &:first-of-type {
    margin-right: 1.875rem;
  }
`;
