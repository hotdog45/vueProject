<template>
  <div class="grid-system">
    <div class="grid-canvas" style="display: none" ref="system">
      <canvas ref="canvas" @click="destoryGrid()"></canvas>
    </div>
    <div class="toggle-grid" @click="drawGrid()">
      <!-- <svg-icon icon-class="grid"></svg-icon> -->
      <van-icon name="setting" />

    </div>
  </div>
</template>

<script>
import Gtx from '@/utils/gtx';

export default {
  name: 'grid',
  methods: {
    destoryGrid() {
      this.$refs.system.style.display = 'none';
    },
    drawGrid() {
      this.$refs.system.style.display = 'block';

      const unitWidth = 8;
      const unitHeight = 8;
      const gtx = new Gtx(this.$refs.canvas);

      gtx.fitParent();

      const width = this.$refs.canvas.clientWidth;
      const height = this.$refs.canvas.clientHeight;

      gtx.setStrokeStyle('#ddd');
      gtx.lineWidth(1);
      for (let i = 0; i * unitWidth < width; i += 1) {
        gtx.beginPath();
        gtx.moveTo((i + 1) * unitWidth, 0);
        gtx.lineTo((i + 1) * unitWidth, height);
        gtx.stroke();
      }

      for (let i = 0; i * unitHeight < height; i += 1) {
        gtx.beginPath();
        gtx.moveTo(0, (i + 1) * unitHeight);
        gtx.lineTo(width, (i + 1) * unitHeight);
        gtx.stroke();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
