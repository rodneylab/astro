<script>
  import EmailInputField from "$components/EmailInputField.svelte";
  import TextArea from "$components/TextArea.svelte";
  import TextInputField from "$components/TextInputField.svelte";

  let botField = "";
  let name = "";
  let email = "";
  let message = "";

  let serverState;
  $: submitting = false;
  $: errors = null;

  function handleServerResponse(ok, msg) {
    serverState = { ok, msg };
  }

  const handleSubmit = async () => {
    try {
      submitting = true;
      await fetch(`/.netlify/functions/contact-form-message`, {
        method: "POST",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bot_field: botField,
          email,
          name,
          message,
        }),
      });
      submitting = false;
      handleServerResponse(true, "");
    } catch (error) {
      console.error(`Eror: ${error}`);
      submitting = false;
      handleServerResponse(
        false,
        "Unable to send your message at the moment.  Please try again later."
      );
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="form-container">
  <input
    aria-hidden="true"
    type="hidden"
    name="bot-field"
    bind:value={botField}
  />
  <TextInputField
    value={name}
    id="contact-name"
    placeholder="Name"
    title="Name"
    required
    error={errors?.name ?? null}
    on:update={(event) => {
      name = event.detail;
    }}
  />
  <EmailInputField
    value={email}
    id="contact-email"
    placeholder="blake@example.com"
    title="Email"
    required
    error={errors?.email ?? null}
    on:update={(event) => {
      email = event.detail;
    }}
  />
  <TextArea
    value={message}
    id="contact-message"
    placeholder="Write your message here..."
    title="Message"
    required
    rows={6}
    error={errors?.message ?? null}
    on:update={(event) => {
      const value = event.detail.trim();
      message = value;
    }}
  />
  <div class="button-container">
    <button type="submit" disabled={submitting}> Send</button>
  </div>
  {#if serverState}<p class={!serverState.ok ? "errorMsg" : ""}>
      {serverState.msg}
    </p>{/if}
</form>

<style>
  .button-container {
    display: flex;
    width: 100%;
    margin: var(--spacing-2);
    justify-content: flex-end;
  }
</style>
