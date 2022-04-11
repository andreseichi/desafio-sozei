import {
  Container,
  Header,
  Title,
  CloseWrapper,
  IconClose,
  Description,
  Tags,
  Tag,
} from './styles';

import { ToolType } from '../../types/tools';
import { useState } from 'react';

import { RemoveToolModal } from '../RemoveToolModal';

export function Tool({ id, description, link, tags, title }: ToolType) {
  const [isRemoveToolModalOpen, setIsRemoveToolModalOpen] = useState(false);

  function handleOpenRemoveToolModal() {
    setIsRemoveToolModalOpen(true);
  }

  function handleCloseRemoveToolModal() {
    setIsRemoveToolModalOpen(false);
  }
  return (
    <Container className="tool">
      <Header>
        <Title link={link}>{title}</Title>

        <CloseWrapper onClick={() => handleOpenRemoveToolModal()}>
          <IconClose />
          remove
        </CloseWrapper>
      </Header>
      <Description>{description}</Description>

      <Tags>
        {tags?.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </Tags>

      <RemoveToolModal
        isOpen={isRemoveToolModalOpen}
        onRequestClose={handleCloseRemoveToolModal}
        id={id}
        title={title}
      />
    </Container>
  );
}
