export const insertLink = (execCommand: (command: string, value?: string) => void) => {
  const url = prompt('Enter URL:');
  if (url) {
    execCommand('createLink', url);
  }
};