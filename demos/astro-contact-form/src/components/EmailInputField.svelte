<script>
  import InputField from "$components/InputField.svelte";
  import { createEventDispatcher } from "svelte";

  export let value;
  export let required = false;
  export let placeholder = "blake@example.com";
  export let id;
  export let title = "Email";
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
      {placeholder}
      {title}
      type="email"
      spellcheck
    />
  </InputField>
</div>
