<script lang="ts">
  import type { EditorCommand } from '../types';
  
  export let execCommand: (command: EditorCommand, value?: string) => void;

  const fontSizes = [
    { name: 'Default', value: '3' },
    { name: 'Small', value: '2' },
    { name: 'Medium', value: '3' },
    { name: 'Large', value: '4' },
    { name: 'Larger', value: '5' },
    { name: 'Largest', value: '6' }
  ];
</script>

<select
  on:change={(e) => execCommand('fontSize', e.currentTarget.value)}
  class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 
         focus:outline-none focus:ring-2 focus:ring-blue-500 w-24"
>
  <option value="">Size</option>
  {#each fontSizes as size}
    <option value={size.value}>
      {size.name}
    </option>
  {/each}
</select>