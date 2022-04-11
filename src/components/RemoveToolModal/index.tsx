import Modal from 'react-modal';
import { useTools } from '../../hooks/useTools';

import { X } from 'styled-icons/feather';

import { Container, CloseIcon, ButtonsWrapper, ButtonCustom } from './styles';

interface NewToolModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
  title: string;
}

export function RemoveToolModal({
  isOpen,
  onRequestClose,
  id,
  title,
}: NewToolModalProps) {
  const { deleteTool } = useTools();

  async function handleRemoveTool(id: number) {
    await deleteTool(id);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content-remove"
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <CloseIcon />
        </button>
        <header>
          <X /> Remove tool
        </header>

        <p>Are you sure you want to remove {title}?</p>

        <ButtonsWrapper>
          <ButtonCustom onClick={onRequestClose} secondary>
            Cancel
          </ButtonCustom>
          <ButtonCustom onClick={() => handleRemoveTool(id)}>
            Yes, remove
          </ButtonCustom>
        </ButtonsWrapper>
      </Container>
    </Modal>
  );
}
