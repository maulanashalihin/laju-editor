<script lang="ts">
  import type { EditorCommand } from './types';
  import Toolbar from './components/Toolbar.svelte';
  import HtmlPreview from './components/HtmlPreview.svelte';
  import TextStats from './components/TextStats.svelte';
  import { execFormatCommand } from './utils/formatting';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let content = '';

  let editorRef: HTMLDivElement;

  const execCommand = (command: EditorCommand, value: string = '') => {
    execFormatCommand(command, value);
    editorRef.focus();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      execCommand('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  };

  $: if (editorRef && content !== editorRef.innerHTML) {
    editorRef.innerHTML = content;
  }

  function handleInput() {
    content = editorRef.innerHTML;
    dispatch('change', content);
  }
</script>

<div class="space-y-4">
  <div class="border border-gray-300 rounded-lg overflow-hidden bg-white">
    <Toolbar {execCommand} />
    
    <div
      class="min-h-[200px] p-4 overflow-y-auto editor-content"
      bind:this={editorRef}
      contenteditable="true"
      on:keydown={handleKeyDown}
      on:input={handleInput}
    ></div>

    <div class="px-4 py-2 border-t border-gray-300">
      <TextStats {content} />
    </div>
  </div>

  <HtmlPreview html={content} />
</div>