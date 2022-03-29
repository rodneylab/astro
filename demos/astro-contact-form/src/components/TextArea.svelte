<script>
  import InputField from "$components/InputField.svelte";
  import { createEventDispatcher } from "svelte";

  export let value;
  export let required = false;
  export let placeholder;
  export let id;
  export let title;
  export let error = null;
  export let rows = 5;

  const dispatch = createEventDispatcher();
</script>

<div>
  <InputField {id} {title} {error}>
    <textarea
      bind:value
      on:change={() => {
        dispatch("update", value);
      }}
      {required}
      {id}
      aria-invalid={error != null}
      aria-describedby={error != null ? `${id}-error` : null}
      {rows}
      {placeholder}
      {title}
      type="text"
    />
  </InputField>
</div>
