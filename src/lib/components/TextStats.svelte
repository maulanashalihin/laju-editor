<script lang="ts">
  import { countCharacters, countWords } from '../utils/textStats';
  
  export let content: string;

  $: characterCount = countCharacters(content);
  $: wordCount = countWords(content);
</script>

<div class="text-sm text-gray-600 mt-2 flex gap-4">
  <span>Characters: {characterCount}</span>
  <span>Words: {wordCount}</span>
</div>