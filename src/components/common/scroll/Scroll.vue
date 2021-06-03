<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  BScroll.use(PullUp)
    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                scroll: null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                pullUpLoad: this.pullUpLoad,
                probeType: this.probeType,
            })
            this.scroll.on('pullingUp', this.pullingUpHandler)
            this.scroll.on('scroll',(position) => {
                this.$emit('scroll',position)
            })
        },
        methods: {
            pullingUpHandler(){
                this.$emit('pullingUp')
                this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>
</style>