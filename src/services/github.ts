export const getRepositories = (since: number = 0) =>
  fetch(`https://api.github.com/repositories?since=${since}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`Failed Request ${response.status}`);
  });
