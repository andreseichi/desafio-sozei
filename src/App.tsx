import { useState } from 'react';
import Modal from 'react-modal';

import { NewToolModal } from './components/NewToolModal';
import { Home } from './components/pages/Home';
import { GlobalStyle } from './styles/global';
import { ToolsProvider } from './hooks/useTools';

Modal.setAppElement('#root');

export function App() {
  const [isNewToolModalOpen, setIsNewToolModalOpen] = useState(false);

  function handleOpenNewToolModal() {
    setIsNewToolModalOpen(true);
  }

  function handleCloseNewToolModal() {
    setIsNewToolModalOpen(false);
  }

  return (
    <ToolsProvider>
      <GlobalStyle />
      <Home onOpenNewToolModal={handleOpenNewToolModal} />

      <NewToolModal
        isOpen={isNewToolModalOpen}
        onRequestClose={handleCloseNewToolModal}
      />
    </ToolsProvider>
  );
}
