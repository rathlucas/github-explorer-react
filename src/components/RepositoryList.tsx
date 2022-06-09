import React, { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';

import { StyledRepositoryList } from '../styles/RepositoryList.styled';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rathlucas/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <StyledRepositoryList>
      <h1>Lista de Repositórios</h1>

      <ul>
        {repos.map((repo, index) => {
          return <RepositoryItem key={index} repository={repo} />;
        })}
      </ul>
    </StyledRepositoryList>
  );
}
