<script lang="ts">
  import { fontFamilies } from '../utils/fonts';
  import type { EditorCommand } from '../types';
  
  export let execCommand: (command: EditorCommand, value?: string) => void;
</script>

<select
  on:change={(e) => execCommand('fontName', e.currentTarget.value)}
  class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 
         focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Font Family</option>
  {#each fontFamilies as font}
    <option value={font.value} style="font-family: {font.value}">
      {font.name}
    </option>
  {/each}
</select>