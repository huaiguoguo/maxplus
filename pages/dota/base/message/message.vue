<template>
	<view class="container">
		<view class="title">
			<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
			<text>我的消息</text>
		</view>
		
		<view class="cotent">
			<view class="nav">
				<view @click="changeBorder(1)" :class="[active==1?'item reply active':'item reply']">
					<text :style="border_one">回复消息</text>
				</view>
				<view @click="changeBorder(2)" :class="[active==2?'item thumbs active':'item thumbs']">
					<text :style="border_two">赞</text>
				</view>
				<view @click="changeBorder(3)" :class="[active==3?'item notice active':'item notice']">
					<text :style="border_three">通知</text>
				</view>
			</view>
			
			<view v-show="active == 1" class="list reply_list">
				<view class="notice_list_item">
					
				</view>
				<view class="no_message">
					<image src="/static/img/max+/no_message.png" mode="scaleToFill"></image>
					<text>暂无消息</text>
				</view>
			</view>
			<view v-show="active == 2" class="list thumbs_list">
				<view class="notice_list_item">
					
				</view>
				<view class="no_message">
					<image src="/static/img/max+/no_message.png" mode="scaleToFill"></image>
					<text>暂无消息</text>
				</view>
			</view>
			<view v-show="active == 3" class="list notice_list">
				<view class="notice_list_item">
					
				</view>
				<view class="no_message">
					<image src="/static/img/max+/no_message.png" mode="scaleToFill"></image>
					<text>暂无消息</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
				border_one:'',
				border_two: 'border-right: 2upx solid rgb(225, 230, 235);',
				border_three: '',
			};
		},
		methods:{
			changeBorder(index){
				if(index == 1){
					this.active = 1;
					this.border_one = '';
					this.border_two = 'border-right: 2upx solid rgb(225, 230, 235);';
				}
				if(index == 2){
					this.active = 2;
					this.border_one = '';
					this.border_two = '';
				}
				if(index == 3){
					this.active = 3;
					this.border_one = 'border-right: 2upx solid rgb(225, 230, 235);';
					this.border_two = '';
				}
			}
		}
	}
</script>

<style lang="less">
	page{
		background: rgb(225, 230, 235);
	}
	.container{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: red;
		// position: relative;
		
		.title {
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			background: rgb(225, 230, 235);
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			font-size: 23upx;
			color: #000000;
			
			image {
				margin-left: 20upx;
				width: 40upx;
				height: 40upx;
				will-change: transform;
			}
		}

		.cotent{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: #FFFFFF;
			
			position: fixed;
			top: 15%;
			bottom: 0;
			left: 0;
			right: 0;
			background: #FFFFFF;
			z-index: 9;
			
			.nav{
				width: 100%;
				background-color: rgb(247, 248, 249);
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background: blue;
				font-size: 25upx;
				color: rgb(64, 73, 82);
				
				position: fixed;
				top: 11.5%;
				left: 0;
				right: 0;
				background: #FFFFFF;
				z-index: 10;
				
				.item{
					width: 35%;
					padding: 20upx 0upx;
					background: rgb(247, 248, 249);
					text-align: center;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					text{
						width: 100%;
						height: 100%;
						padding: 5upx 0px;
						// background: pink;
					}
				}
				
				.active{
					color: #000000;
					font-weight: 550;
					background: #FFFFFF;
				}
			}
			
			.list{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
				.notice_list_item{}
				.no_message{
					width: 100%;
					height: 100%;
					position: fixed;
					top: 13.5%;
					bottom: 0;
					left: 0;
					right: 0;
					background: #FFFFFF;
					z-index: 9;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					image{
						width: 100upx;
						height: 100upx;
						will-change: transform;
						margin-top: -750upx;
					}
					text{
						margin-top: 20upx;
						font-size: 30upx;
						color: #3C3E49;
					}
				}
			}
			
		}
	}
</style>
