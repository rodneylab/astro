<script lang="ts">
  export let id: string;
  export let title: string;
  export let error: string | null = null;
</script>

<span class="screen-reader-text"><label for={id}>{title}</label></span>
<slot />
{#if error}
  <small id={`${id}-error`} class="error-text">{error}</small>
{/if}
