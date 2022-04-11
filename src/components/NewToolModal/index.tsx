import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTools } from '../../hooks/useTools';

import { Plus } from 'styled-icons/feather';
import { Container, CloseIcon, ButtonCustom } from './styles';

interface NewToolModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewToolModal({ isOpen, onRequestClose }: NewToolModalProps) {
  const { createTool } = useTools();

  const [toolName, setToolName] = useState('');
  const [toolLink, setToolLink] = useState('');
  const [toolDescription, setToolDescription] = useState('');
  const [toolTags, setToolTags] = useState('');

  async function handleCreateNewTool(event: FormEvent) {
    event.preventDefault();

    const tags = toolTags.split(' ');
    await createTool({
      title: toolName,
      link: toolLink,
      description: toolDescription,
      tags,
    });

    setToolName('');
    setToolLink('');
    setToolDescription('');
    setToolTags('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTool}>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <CloseIcon />
        </button>
        <header>
          <Plus /> Add new tool
        </header>

        <label htmlFor="tool-name">Tool Name</label>
        <input
          name="tool-name"
          id="tool-name"
          type="text"
          value={toolName}
          onChange={(event) => setToolName(event.target.value)}
        />

        <label htmlFor="tool-link">Tool Link</label>
        <input
          name="tool-link"
          id="tool-link"
          type="text"
          value={toolLink}
          onChange={(event) => setToolLink(event.target.value)}
        />

        <label htmlFor="tool-description">Tool Description</label>
        <input
          name="tool-description"
          id="tool-description"
          type="text"
          value={toolDescription}
          onChange={(event) => setToolDescription(event.target.value)}
        />

        <label htmlFor="tool-tags">Tags</label>
        <input
          name="tool-tags"
          id="tool-tags"
          type="text"
          value={toolTags}
          onChange={(event) => setToolTags(event.target.value)}
        />

        <ButtonCustom>Add tool</ButtonCustom>
      </Container>
    </Modal>
  );
}
