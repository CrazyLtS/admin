<template>
  <div class="sketchpad" ref="wrap">
    <canvas
      ref="canvas"
      @mousedown="handledrawstart($event)"
      @mousemove="handledrawmove($event)"
      @mouseup="handledrawend($event)"
    ></canvas>
    <div class="ctx-tools">
      <el-color-picker
      v-model="drawObj.penColor"
      size="small"
      @active-change="changeColor"
      @click="toolType = 'color'"
      class="tool-icon "
      ></el-color-picker>
      <span class="tool-icon iconfont icon-qianbi" @click="toolType = 'pen'">
        <el-slider
          v-show="toolType === 'pen'"
          v-model="drawObj.penweight"
          :step="1"
          :min="1"
          :max="9"
          input-size="mini"
          style="width: 100px;"
          >
        </el-slider>
      </span>
      <span class="tool-icon iconfont icon-xiangpica" @click="toolType = 'era'">
        <el-slider
          v-show="toolType === 'era'"
          v-model="drawObj.xpcweight"
          :step="1"
          :min="1"
          :max="9"
          input-size="mini"
          style="width: 100px;"
          >
        </el-slider>
      </span>
      <span class="tool-icon iconfont icon-chexiao" @click.stop="handleReback"></span>
      <span class="tool-icon iconfont icon-zhongzuo" @click.stop="handleForw"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sketchpad',
  data () {
    return {
      defcolor: 'coral',
      toolType: 'pen',
      // 画布相关参数
      drawObj: {
        isStart: false,
        beginAxis: {},
        points: new Array(4),
        penweight: 1,
        penColor: '#EDEFED',
        xpcweight: 2,
        traces: []
      },
      rejudge: false,
      retime: 0
    }
  },
  methods: {
    // 画布逻辑
    // 获取坐标位置
    getAxis (e) {
      let top = 0
      let left = 0
      function getOffset (node) {
        top += node.offsetTop
        left += node.offsetLeft
        if (node.offsetParent) {
          getOffset(node.offsetParent)
        }
      }
      getOffset(this.$el)
      return {
        x: e.clientX - left,
        y: e.clientY - top
      }
    },
    // 绘画路径
    drawLine (beginAxis = { x: 0, y: 0 }, controlPoint = { x: 0, y: 0 }, endPoint = { x: 0, y: 0 }) {
      // beginPath()创建新路径
      this.ctx.beginPath()
      this.ctx.moveTo(beginAxis.x, beginAxis.y)
      // 利用锚点画出平滑路径
      this.ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y)
      // 描绘路径
      this.ctx.stroke()
      // 闭合及结束路径
      this.ctx.closePath()
    },
    // 路径初始样式
    lineStyle () {
      const drawObj = this.drawObj
      // 路径粗细
      this.ctx.lineWidth = drawObj.penweight * 3
      // 路径颜色
      this.ctx.fillStyle = drawObj.penColor
      this.ctx.strokeStyle = drawObj.penColor
      // 线条与线条间接合处的样式
      this.ctx.lineJoin = 'round'
      // 线条末端样式
      this.ctx.lineCap = 'round'
    },
    changeColor (color) {
      this.drawObj.penColor = color
    },
    saveCanvas () {
      // 获取画布内容
      const data = this.$refs.canvas.toDataURL()
      // 将画布内容加入到traces
      this.drawObj.traces.unshift(data)
      // 删除最后一个画布内容
      if (this.drawObj.traces.length > 10) {
        this.drawObj.traces.length = 10
      }
    },
    pentart (e) {
      const drawObj = this.drawObj
      drawObj.beginAxis = this.getAxis(e)
      drawObj.points.push(drawObj.beginAxis)
      this.lineStyle()
    },
    penmove (e) {
      const drawObj = this.drawObj
      // 鼠标的实时位置
      const nowAxis = this.getAxis(e)
      drawObj.points.push(nowAxis)
      // 判断数组中是否已经有三个坐标点以上,绘制路径
      if (drawObj.points.length > 3) {
        // 获取数组最后的两个坐标,进行路径描绘
        const lastTwoPoints = drawObj.points.slice(-2)
        // 以最后两个坐标的第一个为控制点
        const controlPoint = lastTwoPoints[0]
        // 以最后连个点的中间点为最后的路径坐标点
        const endPoint = {
          x: (lastTwoPoints[0].x + lastTwoPoints[1].x) / 2,
          y: (lastTwoPoints[0].y + lastTwoPoints[1].y) / 2
        }
        // 描绘路径
        this.drawLine(drawObj.beginAxis, controlPoint, endPoint)
        drawObj.beginAxis = endPoint
      }
    },
    penend (e) {
      const endAxis = this.getAxis(e)
      const drawObj = this.drawObj
      drawObj.points.push(endAxis)

      if (drawObj.points.length > 3) {
        // 获取数组最后的两个坐标,进行路径描绘
        const lastTwoPoints = drawObj.points.slice(-2)
        // 以最后两个坐标的第一个为控制点
        const controlPoint = lastTwoPoints[0]
        // 以最后连个点的中间点为最后的路径坐标点
        const endPoint = lastTwoPoints[1]
        // 描绘路径
        this.drawLine(drawObj.beginAxis, controlPoint, endPoint)
      }
      drawObj.beginAxis = {}
      drawObj.points = []
    },
    // 橡皮檫逻辑
    crtEraser (e) {
      const drawObj = this.drawObj
      const ctx = this.ctx
      ctx.save()
      ctx.beginPath()
      // 创建一个鼠标坐标位置为圆心，的圆的裁剪区域
      ctx.arc(drawObj.beginAxis.x, drawObj.beginAxis.y, drawObj.xpcweight * 2, 0, Math.PI * 2)
      ctx.clip()
      // 将裁剪后的内容清除
      ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      // 恢复裁剪前的画布状态，消除裁剪状态
      ctx.restore()
    },
    eraStar (e) {
      const drawObj = this.drawObj
      // 记录橡皮擦开始时的坐标
      drawObj.beginAxis = this.getAxis(e)
      this.crtEraser(e)
    },
    eraMove (e) {
      const drawObj = this.drawObj
      const ctx = this.ctx
      // 记录鼠标移动时的坐标
      const moveAxis = this.getAxis(e)
      this.crtEraser(e)
      // 清除因为鼠标移动过快,未能清除的矩形区域
      // 计算矩形区域的各个坐标点的位置
      const sinAxis = drawObj.xpcweight * 2 * Math.sin(Math.atan((moveAxis.y - drawObj.beginAxis.y) / (moveAxis.x - drawObj.beginAxis.x)))
      const cosAxis = drawObj.xpcweight * 2 * Math.cos(Math.atan((moveAxis.y - drawObj.beginAxis.y) / (moveAxis.x - drawObj.beginAxis.x)))
      const hasJudge = moveAxis.x - drawObj.beginAxis.x
      const lbAxis = hasJudge === 0 ? { X: drawObj.beginAxis.x + drawObj.xpcweight * 2, Y: drawObj.beginAxis.y } : { X: drawObj.beginAxis.x + sinAxis, Y: drawObj.beginAxis.y - cosAxis }
      const rbAxis = hasJudge === 0 ? { X: moveAxis.x + drawObj.xpcweight * 2, Y: moveAxis.y } : { X: moveAxis.x + sinAxis, Y: moveAxis.y - cosAxis }
      const rtAxis = hasJudge === 0 ? { X: moveAxis.x - drawObj.xpcweight * 2, Y: moveAxis.y } : { X: moveAxis.x - sinAxis, Y: moveAxis.y + cosAxis }
      const ltAxis = hasJudge === 0 ? { X: drawObj.beginAxis.x - drawObj.xpcweight * 2, Y: drawObj.beginAxis.y } : { X: drawObj.beginAxis.x - sinAxis, Y: drawObj.beginAxis.y + cosAxis }
      // 将最后的坐标传递给开始的坐标,作为型区域的开始坐标
      drawObj.beginAxis = moveAxis
      // 描绘矩形区域进行裁剪
      // 保存画布状态
      ctx.save()
      ctx.beginPath()
      // 绘制裁剪区域
      ctx.moveTo(lbAxis.X, lbAxis.Y)
      ctx.lineTo(rbAxis.X, rbAxis.Y)
      ctx.lineTo(rtAxis.X, rtAxis.Y)
      ctx.lineTo(ltAxis.X, ltAxis.Y)
      ctx.closePath()
      // 裁剪并清除区域中的内容
      ctx.clip()
      ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      // 恢复画布保存的状态
      ctx.restore()
    },
    handledrawstart (e) {
      // 判断是否测回后重新绘画
      if (this.rejudge) {
        this.drawObj.traces.splice(0, this.retime - 1)
        console.log(this.drawObj.traces)
        this.rejudge = false
      }
      this.retime = 0
      if (this.toolType === 'pen') {
        this.pentart(e)
      } else if (this.toolType === 'era') {
        this.eraStar(e)
      }
      this.drawObj.isStart = true
    },
    handledrawmove (e) {
      if (this.drawObj.isStart) {
        if (this.toolType === 'pen') {
          this.penmove(e)
        } else if (this.toolType === 'era') {
          this.eraMove(e)
        }
      }
    },
    handledrawend (e) {
      if (this.toolType === 'pen') {
        this.penend(e)
      }
      this.drawObj.isStart = false
      this.saveCanvas()
    },
    reback (index) {
      if (index < this.drawObj.traces.length && index > -1) {
        const img = document.createElement('img')
        img.src = this.drawObj.traces[index]
        console.log(this.drawObj.traces.length, index)
        img.onload = () => {
          // 清除画布
          this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
          // 将数组中储存的canvas对象复制到画布上
          this.ctx.drawImage(img, 0, 0)
          this.rejudge = true
        }
      } else {
        alert('只能跳转到这里了哦!')
      }
    },
    handleReback () {
      this.retime++
      this.reback(this.retime)
    },
    handleForw () {
      this.retime--
      this.reback(this.retime)
    }
  },
  mounted () {
    // 创建canvas实例
    const canvas = this.$refs.canvas
    // 创建画板上下文
    const ctx = this.ctx = canvas.getContext('2d')
    // 初始化大小
    const width = (canvas.width = this.$refs.wrap.clientWidth)
    const height = (canvas.height = this.$refs.wrap.clientHeight)
    // 初始化画板的颜色
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, width, height)
    //  监听窗口大小变化事件
    let bingo = true
    window.onresize = () => {
      // 限制触发次数
      if (bingo) {
        bingo = false
        const oldWidth = canvas.width
        const oldHeight = canvas.height
        // 保存之前的状态
        const oldImage = canvas.toDataURL(oldWidth, oldHeight)
        const image = new Image()
        image.src = oldImage
        image.onload = () => {
          // 重置canvas的大小
          const newWidth = (canvas.width = this.$refs.wrap.clientWidth)
          const newHeght = (canvas.height = this.$refs.wrap.clientHeight)
          // 将窗口变化之前的画布内容添加回画布
          ctx.drawImage(image, 0, 0, newWidth, newHeght)
          bingo = true
        }
      }
    }
  }
}
</script>

<style lang="less">
@import "~assets/font/iconfont.css";
@import "~assets/css/common";
.sketchpad {
  position: absolute;
  top: 100px;
  left: 15px;
  right: 15px;
  bottom: 20px;
  border-radius: 5px;
  canvas {
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  }
  .ctx-tools {
    position: absolute;
    top: -57px;
    right: 40%;
    height: 30px;
    line-height: 30px;
    .tool-icon {
      position: relative;
      display: inline-block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      vertical-align: middle;
      margin-right: 20px;
      color: coral;
      font-size: 24px;
      text-align: center;
      cursor: pointer;
      background: #ffffff;
      border-radius: 5px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
      .el-color-picker__trigger {
        width: 100%;
        height: 100%;
        .el-icon-arrow-down {
          &::before {
            content: '';
          }
        }
      }
    }
  }
}
</style>
