<script lang="ts">
  export let html: string;
  let showPreview = false;
</script>

<div class="mt-4">
  <button
    on:click={() => showPreview = !showPreview}
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
           flex items-center gap-2"
  >
    <span class="material-icons">{showPreview ? 'visibility_off' : 'visibility'}</span>
    {showPreview ? 'Hide HTML' : 'Show HTML'}
  </button>

  {#if showPreview}
    <pre class="mt-4 p-4 bg-gray-100 rounded-lg overflow-x-auto whitespace-pre-wrap">
      <code class="text-sm">{html}</code>
    </pre>
  {/if}
</div>