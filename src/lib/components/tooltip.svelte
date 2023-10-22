<!-- Tooltip.svelte -->
<script>
  export let text = "Tooltip text";
  export let position = "top";
</script>

<span id="tooltip">
  <slot/> 
  <span id="tooltiptext" class="{position}">{text}</span>
</span>

<style>
  #tooltip {
    display: inline-block;
  }

  #tooltiptext {
    visibility: hidden;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 14px;
  }

  #tooltip:hover #tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .top {
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
  }

  .bottom {
    top: 125%;
    left: 50%;
    transform: translateX(-50%);
  }

  .left {
    top: 50%;
    right: 125%;
    transform: translateY(-50%);
  }

  .right {
    top: 50%;
    left: 125%;
    transform: translateY(-50%);
  }
</style>
