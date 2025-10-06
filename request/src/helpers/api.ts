export const fetcher = (url: string) =>
  fetch(`http://localhost:4000${url}`).then((res) => res.json());

export const api = (url: string, options: RequestInit = {}) =>
  fetch(`http://localhost:4000${url}`, options).then((res) => res.json());
