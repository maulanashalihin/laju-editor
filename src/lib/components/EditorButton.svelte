<script lang="ts">
  export let title: string;
  export let active = false;
</script>

<button
  on:click
  {title}
  class="w-8 h-8 flex items-center justify-center rounded border border-gray-300 
         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 
         {active ? 'bg-gray-200' : 'bg-white'}"
>
  <slot />
</button>