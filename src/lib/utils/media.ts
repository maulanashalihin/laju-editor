import type { EditorCommand } from '../types';

export const extractYouTubeId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const insertImage = (execCommand: (command: EditorCommand, value?: string) => void) => {
  const url = prompt('Enter image URL:');
  if (url) {
    execCommand('insertImage', url);
  }
};

export const insertYouTube = (execCommand: (command: EditorCommand, value?: string) => void) => {
  const url = prompt('Enter YouTube URL:');
  if (url) {
    const videoId = extractYouTubeId(url);
    if (videoId) {
      const embed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
      execCommand('insertHTML', embed);
    }
  }
};