export const handleRequest = (response: Response) => {
  if (response.ok) {
    return response.json();
  } else {
    const message = response.status === 404 ? 'Resource Not found' : 'An unexpected error has occurred';
    return message;
  }
};
