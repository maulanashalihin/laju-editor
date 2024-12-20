<script lang="ts">
  import type { EditorCommand } from '../types';
  
  export let execCommand: (command: EditorCommand, value?: string) => void;
  let isOpen = false;

  const spacings = [
    { value: '1', label: 'Single' },
    { value: '1.5', label: '1.5' },
    { value: '2', label: 'Double' },
    { value: '2.5', label: '2.5' },
    { value: '3', label: 'Triple' }
  ];

  function setLineHeight(height: string) {
    execCommand('lineHeight', height);
    isOpen = false;
  }
</script>

<div class="relative inline-block">
  <button
    on:click={() => isOpen = !isOpen}
    class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 
           focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1"
    title="Line Spacing"
  >
    <span class="material-icons text-lg">format_line_spacing</span>
  </button>

  {#if isOpen}
    <div 
      class="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      style="min-width: 120px;"
    >
      {#each spacings as spacing}
        <button
          class="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
          on:click={() => setLineHeight(spacing.value)}
        >
          {spacing.label}
        </button>
      {/each}
    </div>
  {/if}
</div>

<svelte:window on:click={(e) => {
  if (!e.target.closest('.relative')) {
    isOpen = false;
  }
}}/>