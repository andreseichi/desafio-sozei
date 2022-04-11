import { Container, SearchIcon, Input } from './styles';

export function SearchBar() {
  return (
    <Container>
      <SearchIcon />
      <Input placeholder="Search..." />
    </Container>
  );
}
