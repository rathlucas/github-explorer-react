import styled from 'styled-components';

export const StyledRepositoryItem = styled.li`
  list-style: none;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid gray;

  :last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }
`;
