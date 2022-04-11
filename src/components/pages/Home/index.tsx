import { useTools } from '../../../hooks/useTools';

import { SearchBar } from '../../SearchBar';
import { Tool } from '../../../components/Tool';
import { Button } from '../../../components/Button';

import {
  Container,
  Content,
  Title,
  Heading,
  Header,
  SearchWrapper,
  PlusIcon,
  InputCheck,
  ToolsContainer,
} from './styles';

interface HomeProps {
  onOpenNewToolModal: () => void;
}

export function Home({ onOpenNewToolModal }: HomeProps) {
  const { tools } = useTools();

  return (
    <Container>
      <Content>
        <Title>VUTTR</Title>
        <Heading>Very Useful Tools to Remember</Heading>

        <Header>
          <SearchWrapper>
            <SearchBar />
            <InputCheck name="search" id="search" />
            <label htmlFor="search">search in tags only</label>
          </SearchWrapper>

          <Button onClick={onOpenNewToolModal}>
            <PlusIcon /> Add
          </Button>
        </Header>

        <ToolsContainer>
          {tools?.map((tool) => (
            <Tool
              id={tool.id}
              description={tool.description}
              link={tool.link}
              title={tool.title}
              tags={tool.tags}
              key={tool.id}
            />
          ))}
        </ToolsContainer>
      </Content>
    </Container>
  );
}
