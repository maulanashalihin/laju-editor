<script lang="ts">
  import { colors } from '../utils/fonts';
  import type { EditorCommand } from '../types';
  
  export let execCommand: (command: EditorCommand, value?: string) => void;
  let isOpen = false;
</script>

<div class="relative inline-block">
  <button
    on:click={() => isOpen = !isOpen}
    class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 
           focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1"
    title="Background Color"
  >
    <span class="material-icons text-lg">format_color_fill</span>
    <span class="w-3 h-3 rounded-sm border border-gray-300"></span>
  </button>

  {#if isOpen}
    <div 
      class="absolute left-0 top-full mt-1 p-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      style="width: 200px;"
    >
      <div class="grid grid-cols-5 gap-1">
        {#each colors as color}
          <button
            class="w-8 h-8 rounded-sm hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            style="background-color: {color.value};"
            title={color.name}
            on:click={() => {
              execCommand('backColor', color.value);
              isOpen = false;
            }}
          />
        {/each}
      </div>
    </div>
  {/if}
</div>

<svelte:window on:click={(e) => {
  if (!e.target.closest('.relative')) {
    isOpen = false;
  }
}}/>