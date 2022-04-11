import styled from 'styled-components';

import { X } from 'styled-icons/feather';

interface TitleProps {
  link: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 5px;
  border: 1px solid var(--darkest-white);
  background-color: var(--white);
  box-shadow: 0px 5px 7px #0000000d;

  padding: 20px;
  width: 750px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Title = styled.a.attrs<TitleProps>(({ link }) => ({
  href: link,
  target: '_blank',
}))<TitleProps>`
  font-size: 20px;
  letter-spacing: 0.4px;
  line-height: 26px;
`;

export const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.36px;
  color: var(--ink);

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const IconClose = styled(X)`
  width: 20px;
  height: 20px;
  opacity: 1;
  cursor: pointer;
`;

export const Description = styled.div`
  display: flex;

  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.36px;

  margin-top: 10px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 12px;
  gap: 8px;
`;
export const Tag = styled.div`
  display: flex;

  font-weight: bold;
`;
