<script>
    export let onClick = true;
</script>

<button class="fab primary" aria-label="Add" on:click={ onClick }>
    <iconify-icon height="42" icon="material-symbols:add" />
</button>

<style>
    .fab {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 60px;
        right: 20px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
</style>
