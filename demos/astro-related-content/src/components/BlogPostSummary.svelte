<script>
  import { H_ELLIPSIS_ENTITY } from "~constants/entities";

  let { postTitle, datePublished, seoMetaDescription, slug } = $props();

  /**
   * @param event {MouseEvent} - click
   */
  const handleMouseEnter = (event) => {
    let element = /** @type {HTMLElement} */ (event.target);
    element.style.cursor = "pointer";
  };

  /**
   * @param event {MouseEvent} - click
   */
  const handleMouseLeave = (event) => {
    let element = /** @type {HTMLElement} */ (event.target);
    element.style.cursor = "default";
  };

  const handleMouseDown = (event) => {
    // only override click when user clicks inside element but not on an anchor tag
    if (event.target.tagName !== "A") {
      window.location.assign(`/${slug}`);
    }
  };

  const dateString = new Date(datePublished).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
  const idString = `blog-post-summary-${slug}`;
</script>

<div
  role="presentation"
  class="container"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  onmousedown={handleMouseDown}
>
  <div class="content">
    <h3>
      <a
        aria-label={`Open ${postTitle} blog post`}
        aria-describedby={idString}
        href={`/${slug}/`}>{postTitle}</a
      >
    </h3>
    <p>{dateString}</p>
    <p>{seoMetaDescription}</p>
    <span id={idString} aria-hidden="true">Read more {H_ELLIPSIS_ENTITY}</span>
  </div>
</div>

<style>
  .container {
    display: flex;
    width: var(--max-width-full);
    margin-block: var(--spacing-12);
    margin-inline: var(--spacing-0);
  }

  .content {
    width: 80%;
    border: var(--spacing-px-2) solid var(--color-theme-2);
    border-radius: var(--spacing-3);
    margin-block: var(--spacing-0);
    margin-inline: auto;
    padding-block: var(--spacing-4);
    padding-inline: var(--spacing-4);
  }
  .content h3 {
    margin-block: var(--spacing-0);
    margin-inline: var(--spacing-2);
  }
  .content p {
    color: var(--color-theme-1);
    font-size: var(--mobile-font-size-2);
    margin-block: var(--spacing-2);
    margin-inline: var(--spacing-2);
  }

  .content:focus,
  .content:hover {
    border-color: var(--color-theme-4);
    background-color: var(--color-theme-4);
    box-shadow: var(spacing-0) var(--spacing-0) var(--spacing-1)
      var(--spacing-0) var(--color-theme-4-alpha-20);
    color: var(--color-accent);
  }

  .content:focus h3,
  .content:hover h3 {
    color: var(--color-theme-2);
  }
  .content:focus p,
  .content:hover p {
    color: var(--color-theme-3);
  }
</style>
