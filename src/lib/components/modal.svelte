<script>
  export let show_modal = false;
</script>

<dialog open={show_modal}>
  <article >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <a href="#close" aria-label="Close" class="close secondary" on:click={() => (show_modal = false)}></a>
      <slot name="header" />
      <slot name="content" />
      <footer>
        <slot name="footer" />
      </footer>
  </article>
</dialog>
