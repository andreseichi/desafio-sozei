import { InputHTMLAttributes } from 'react';
import { Plus } from 'styled-icons/feather';

import styled from 'styled-components';

interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Content = styled.div`
  max-width: 57.5rem;
  margin: 5rem auto 0 auto;

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.625rem;
  letter-spacing: 0.84px;
  line-height: 50px;
`;

export const Heading = styled.h2`
  font-size: 2.25rem;
  letter-spacing: 0.72px;
  line-height: 40px;

  margin-top: 1.25rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.5rem;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusIcon = styled(Plus)`
  width: 20px;
  height: 20px;
  color: var(--white);
`;

export const InputCheck = styled.input.attrs<InputCheckProps>({
  type: 'checkbox',
})`
  margin-left: 1rem;
  margin-right: 0.5rem;

  background-color: var(--blue);

  border-radius: 5px;
`;

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1.25rem;

  .tool + .tool {
    margin-top: 2.5rem;
  }
`;
