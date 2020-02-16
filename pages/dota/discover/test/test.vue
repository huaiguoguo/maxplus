<template>
    <view>
        <!-- 横向滚动条 -->
            <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="100%" @scrolltolower="scrolltolower">
                <view class="scroll-view-item_H uni-bg-red">A</view>
                <view class="scroll-view-item_H uni-bg-green">B</view>
                <view class="scroll-view-item_H uni-bg-blue">C</view>
            </scroll-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            scroll(event) {
                //距离么个边界距离
                console.log(event.detail)
            },
            //滚动到底部/右边触发
            scrolltolower() {
                console.log(1111);
            },
            // 滚动到顶部/左边触发
            scrolltoupper() {
                console.log(2222);
            }
        }
    }
</script>

<style lang="scss">
    .scroll-view_H {
		width: 100%;
        white-space: nowrap;
        .scroll-view-item_H {
            display: inline-block;
            width: 100%;
            height: 100px;
        }
        .uni-bg-red {
            background: red;
        }
        
        .uni-bg-green {
            background: green;
        }
        
        .uni-bg-blue {
            background: blue;
        }    
    }
</style>