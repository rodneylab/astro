<script>
  import InputField from "$components/InputField.svelte";
  import { createEventDispatcher } from "svelte";

  export let value;
  export let required = false;
  export let placeholder;
  export let id;
  export let title;
  export let error = null;

  const dispatch = createEventDispatcher();
</script>

<div>
  <InputField {id} {title} {error}>
    <input
      bind:value
      on:change={() => {
        dispatch("update", value);
      }}
      {required}
      {id}
      aria-invalid={error != null}
      aria-describedby={error != null ? `${id}-error` : null}
      {placeholder}
      {title}
      type="text"
    />
  </InputField>
</div>
