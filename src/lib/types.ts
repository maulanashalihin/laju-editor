export type EditorCommand = 
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikeThrough'
  | 'justifyLeft'
  | 'justifyCenter'
  | 'justifyRight'
  | 'insertUnorderedList'
  | 'insertOrderedList'
  | 'insertImage'
  | 'insertHTML'
  | 'formatBlock'
  | 'foreColor'
  | 'backColor'
  | 'fontName'
  | 'fontSize'
  | 'createLink'
  | 'lineHeight'
  | 'undo'
  | 'redo';