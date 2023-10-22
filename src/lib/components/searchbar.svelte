<script>
  export let search = "";
</script>

<input
   type="search"
   id="searchbox"
   bind:value={search}
   placeholder="Search..."
/>

<style>
  #searchbox:focus {
    color: aqua;
  }
</style>
