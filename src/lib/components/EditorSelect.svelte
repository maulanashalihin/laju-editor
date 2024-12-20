<script lang="ts">
  export let value: string;
</script>

<select
  {value}
  on:change
  class="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 
         focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <slot />
</select>