import type { EditorCommand } from '../types';
export declare const extractYouTubeId: (url: string) => string | null;
export declare const insertImage: (execCommand: (command: EditorCommand, value?: string) => void) => void;
export declare const insertYouTube: (execCommand: (command: EditorCommand, value?: string) => void) => void;
