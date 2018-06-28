<template>
    <div class="circle">
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" class="timer">
            <circle class="bigCircle" r="100" cx="100" cy="100" fill="gray"></circle>
            <circle class="smallCircle" r="90" cx="100" cy="100" fill="lightgray"></circle>
            <path class="segment" :d="path"></path>
            <text v-if="text != ''" class="text" x="100" y="100">{{ text }}</text>
        </svg>
    </div>
</template>

<script>
function calcPath (angle) {
  let d
  let {x, y} = calcEndPoint(angle)
  if (angle <= 180) {
    d = `M100,100 L100, 0 A100,100 0 0,0 ${x}, ${y} z`
  } else {
    d = `M100,100 L100, 0 A100,100 0 0,0 100, 200 A100,100 0 0,0 ${x}, ${y} z`
  }
  return d
}

function calcEndPoint (angle) {
  let x, y
  x = 100 - 100 * Math.sin(Math.PI * angle / 180)
  y = 100 - 100 * Math.cos(Math.PI * angle / 180)
  return {
    x, y
  }
}

export default {
  props: ['angle', 'text'],
  computed: {
    path () {
      return calcPath(this.angle)
    }
  }
}
</script>

<style scoped lang="scss">
  $big-circle-color: black;
  $small-circle-color: white;
  $segment-color: blue;
  $text-color: black;
  .circle {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    vertical-align: middle;
    svg {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .bigCircle {
    fill: $big-circle-color;
  }
  .smallCircle {
    fill: $small-circle-color;
  }
  .segment {
    fill: $segment-color;
    opacity: 0.5;
  }
  .text {
    font-size: 1em;
    stroke-width: 0;
    opacity: .9;
    fill: $text-color;
    text-anchor: middle;
  }
</style>
