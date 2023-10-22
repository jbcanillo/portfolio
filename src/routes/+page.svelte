<script>
  import { makeGreet, showClock } from "$lib/scripts/functions";
 
  let greetings = "";
  let today = "";
  setInterval(() => {
    greetings = makeGreet();
    today = showClock();
  }, 1000);
</script>

<article>
  <div id="greetings" class="pull-left">
    <h4>{greetings}!</h4>
  </div>
  <div id="today" class="pull-right">
    <h6>{today}</h6>
  </div>
</article>

<style>
  #greetings {
    font-style: italic;
  }
  #today {
    margin-right: 15px;
  }
</style>
