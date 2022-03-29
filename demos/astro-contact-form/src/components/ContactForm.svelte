<script>
  let botField = '';
  let name = '';
  let email = '';
  let message = '';

  let serverState;
  $: submitting = false;

  function handleServerResponse(ok, msg) {
    serverState = { ok, msg };
  }

  const handleSubmit = async () => {
    console.log({ email, name, message });
    try {
      submitting = true;
      await fetch(`/.netlify/functions/contact-form-message`, {
        method: 'POST',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          botField,
          email,
          name,
          message,
        }),
      });
      submitting = false;
      handleServerResponse(true, '');
    } catch (error) {
      console.error(`Eror: ${error}`);
      submitting = false;
      handleServerResponse(
        false,
        'Unable to send your message at the moment.  Please try again later.',
      );
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="form-container">
  <input aria-hidden="true" type="hidden" name="bot-field" bind:value={botField} />
  <div>
    <span class="screen-reader-text"><label for="name">Name</label></span>
    <input bind:value={name} required id="name" placeholder="Name" title="Name" type="text" />
  </div>
  <div>
    <span class="screen-reader-text"><label for="email">Email</label></span>
    <input
      bind:value={email}
      required
      id="email"
      placeholder="blake@example.com"
      title="Email"
      type="email"
    />
  </div>
  <div>
    <span class="screen-reader-text"><label for="message">Message</label></span>
    <textarea
      bind:value={message}
      required
      id="message"
      rows={6}
      placeholder="Write your message here..."
      title="Message"
      type="text"
    />
  </div>
  <div class="button-container">
    <button type="submit" disabled={submitting}> Send</button>
  </div>
  {#if serverState}<p class={!serverState.ok ? 'errorMsg' : ''}>
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
