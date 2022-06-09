import { StyledRepositoryItem } from '../styles/RepositoryItem.styled';

export function RepositoryItem({ name, description, html_url }) {
  return (
    <StyledRepositoryItem>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url}>Acessar Repositório</a>
    </StyledRepositoryItem>
  );
}
