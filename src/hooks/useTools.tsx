import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';

import { ToolType } from '../types/tools';

interface ToolsProviderProps {
  children: ReactNode;
}

type ToolInput = Omit<ToolType, 'id'>;

interface ToolsContextData {
  tools: ToolType[];
  createTool: (tool: ToolInput) => Promise<void>;
  deleteTool: (id: number) => Promise<void>;
}

const ToolsContext = createContext<ToolsContextData>({} as ToolsContextData);

export function ToolsProvider({ children }: ToolsProviderProps) {
  const [tools, setTools] = useState<ToolType[]>([]);

  useEffect(() => {
    api.get('tools').then(({ data }) => {
      setTools(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createTool(tool: ToolInput) {
    const response = await api.post('/tools', tool);
    const { data } = response;

    setTools([...tools, data]);
  }

  async function deleteTool(id: number) {
    const response = await api.delete(`/tools/${id}`);
    const { status } = response;

    if (status === 200) {
      setTools((t) => t.filter((tool) => tool.id !== id));
    }
  }

  return (
    <ToolsContext.Provider value={{ tools, createTool, deleteTool }}>
      {children}
    </ToolsContext.Provider>
  );
}

export function useTools() {
  const context = useContext(ToolsContext);

  return context;
}
