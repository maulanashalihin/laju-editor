<script lang="ts">
  import type { EditorCommand } from '../types';
  import EditorButton from './EditorButton.svelte';
  import EditorSelect from './EditorSelect.svelte';
  import ColorPicker from './ColorPicker.svelte';
  import BackgroundColorPicker from './BackgroundColorPicker.svelte';
  import FontPicker from './FontPicker.svelte';
  import FontSizePicker from './FontSizePicker.svelte';
  import LineSpacing from './LineSpacing.svelte';
  import { insertImage, insertYouTube } from '../utils/media';
  import { insertLink } from '../utils/link';
  import { insertDivider } from '../utils/divider';
  
  export let execCommand: (command: EditorCommand, value?: string) => void;
</script>

<div class="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-300">
  <EditorButton on:click={() => execCommand('undo')} title="Undo">
    <span class="material-icons">undo</span>
  </EditorButton>
  
  <EditorButton on:click={() => execCommand('redo')} title="Redo">
    <span class="material-icons">redo</span>
  </EditorButton>

  <div class="w-px h-8 bg-gray-300 mx-1"></div>

  <EditorSelect
    value="p"
    on:change={(e) => execCommand('formatBlock', e.currentTarget.value)}
  >
    <option value="p">Paragraph</option>
    <option value="h1">Heading 1</option>
    <option value="h2">Heading 2</option>
    <option value="h3">Heading 3</option>
  </EditorSelect>
  
  <FontPicker {execCommand} />
  <FontSizePicker {execCommand} />
  <ColorPicker {execCommand} />
  <BackgroundColorPicker {execCommand} />
  <LineSpacing {execCommand} />
  
  <div class="w-px h-8 bg-gray-300 mx-1"></div>
  
  <EditorButton on:click={() => execCommand('bold')} title="Bold">
    <span class="material-icons">format_bold</span>
  </EditorButton>
  
  <EditorButton on:click={() => execCommand('italic')} title="Italic">
    <span class="material-icons">format_italic</span>
  </EditorButton>
  
  <EditorButton on:click={() => execCommand('underline')} title="Underline">
    <span class="material-icons">format_underlined</span>
  </EditorButton>

  <EditorButton on:click={() => execCommand('strikeThrough')} title="Strikethrough">
    <span class="material-icons">format_strikethrough</span>
  </EditorButton>
  
  <EditorButton on:click={() => insertLink(execCommand)} title="Insert Link">
    <span class="material-icons">link</span>
  </EditorButton>
  
  <div class="w-px h-8 bg-gray-300 mx-1"></div>
  
  <EditorButton on:click={() => execCommand('justifyLeft')} title="Align Left">
    <span class="material-icons">format_align_left</span>
  </EditorButton>
  
  <EditorButton on:click={() => execCommand('justifyCenter')} title="Center">
    <span class="material-icons">format_align_center</span>
  </EditorButton>
  
  <EditorButton on:click={() => execCommand('justifyRight')} title="Align Right">
    <span class="material-icons">format_align_right</span>
  </EditorButton>
  
  <div class="w-px h-8 bg-gray-300 mx-1"></div>
  
  <EditorButton
    on:click={() => execCommand('insertUnorderedList')}
    title="Bullet List"
  >
    <span class="material-icons">format_list_bulleted</span>
  </EditorButton>
  
  <EditorButton
    on:click={() => execCommand('insertOrderedList')}
    title="Numbered List"
  >
    <span class="material-icons">format_list_numbered</span>
  </EditorButton>
  
  <div class="w-px h-8 bg-gray-300 mx-1"></div>
  
  <EditorButton
    on:click={() => insertImage(execCommand)}
    title="Insert Image"
  >
    <span class="material-icons">image</span>
  </EditorButton>
  
  <EditorButton
    on:click={() => insertYouTube(execCommand)}
    title="Insert YouTube Video"
  >
    <span class="material-icons">smart_display</span>
  </EditorButton>

  <EditorButton
    on:click={() => insertDivider(execCommand)}
    title="Insert Divider"
  >
    <span class="material-icons">horizontal_rule</span>
  </EditorButton>
</div>