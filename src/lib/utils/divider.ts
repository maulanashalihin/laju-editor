export const insertDivider = (execCommand: (command: string, value?: string) => void) => {
  execCommand('insertHTML', '<hr class="my-4 border-t border-gray-300">');
};