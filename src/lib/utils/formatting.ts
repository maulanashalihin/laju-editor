import type { EditorCommand } from '../types';

export const applyLineSpacing = (value: string) => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);
  const contents = range.cloneContents();
  const div = document.createElement('div');
  div.style.lineHeight = value;
  div.appendChild(contents);

  // Preserve the selection
  const start = range.startContainer;
  const end = range.endContainer;
  const startOffset = range.startOffset;
  const endOffset = range.endOffset;

  // Delete old content and insert new wrapped content
  range.deleteContents();
  range.insertNode(div);

  // Restore selection
  range.setStart(start, startOffset);
  range.setEnd(end, endOffset);
  selection.removeAllRanges();
  selection.addRange(range);
};

export const execFormatCommand = (command: EditorCommand, value: string = '') => {
  if (command === 'lineHeight') {
    applyLineSpacing(value);
  } else {
    document.execCommand(command, false, value);
  }
};