import styled from 'styled-components';

export const Container = styled.button`
  padding: 14px 26px;
  color: var(--white);
  background-color: var(--blue);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.36px;
  text-align: center;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  display: block;
  white-space: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;