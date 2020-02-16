<template>
	<view class="container">
		<view class="band">
			<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
			<text>我的专题</text>
		</view>
		<view class="slider">
			<view class="slider_item">
				<view class="bg">
					<image src="/static/img/max+/skill_default_ow.png" mode="scaleToFill"></image>
				</view>
				<view class="bg_status">
					<image src="/static/img/max+/activity_in_progress.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view class="slider_item">
				<view class="bg">
					<image src="/static/img/max+/skill_default_ow.png" mode="scaleToFill"></image>
				</view>
				<view class="bg_status">
					<image src="/static/img/max+/activity_in_progress.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="list">
			<view v-for="(item, index) in list" :key="index" class="item">
				<view class="left">
					<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
					<view class="title">
						<text>{{item.name}}</text>
						<text>{{item.description}}</text>
					</view>
				</view>
				<view class="right">
					<image src="/static/img/max+/right_arrow.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						name: '我的饰品',
						description: '我的饰品库存'
					},
					{
						name: '我的Dota2英雄榜',
						description: '招牌钟爱灵性坑爹, 属于我的英雄之最'
					},
					{
						name: 'Dota2毒瘤榜',
						description: '毒瘤榜首, 天坑之才, 得之可脆一半'
					},
					{
						name: '饰品资产',
						description: '查看我的库存信息, 全面分析饰品价值'
					},
					{
						name: '我和Dota2',
						description: '我和Dota2不得不说的故事'
					}	
				]
			};
		}
	}
</script>

<style lang="less">
page{
	padding: 0;
	margin: 0;
	background: rgb(225, 230, 235);
}
.container{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.band{
		width: 100%;
		height: 80upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		image{
			width: 40upx;
			height: 40upx;
			will-change: transform;
			margin-left: 25upx;
		}
		text{
			margin-left: 10upx;
			font-size: 28upx;
		}
	}
	.slider{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.slider_item{
			width: 100%;
			height: 100%;
			position: relative;
			&:nth-child(2){
				margin-top: -8upx;
			}
			.bg{
				// width: 100%;
				// height: 100%;
				image{
					width: 100%;
					height: 300upx;
				}
			}
			.bg_status{
				// width: 100%;
				// height: 100%;
				image{
					width: 100upx;
					height: 100upx;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 999;
				}
			}
		}
	}
	.list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		.item{
			width: 100%;
			height: 120upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 5upx 0upx;
			
			&:nth-child(n+2){
				border-top: 1upx solid rgb(230, 234, 238);
			}
			
			.left{
				width: 80%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				// background: blue;
				image{
					width: 70upx;
					height: 70upx;
					will-change: transform;
					border-radius: 70upx;
					margin-left: 30upx;
				}
				.title{
					// width: 50%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-start;
					// background: red;
					margin-left: 20upx;
					
					text{
						font-size: 25upx;
						color: #000000;
						font-weight: 550;
						// padding: 10upx;
						&:nth-child(2){
							color: #BCBCBC;
							font-size: 23upx;
						}
					}
				}
			}
			.right{
				width: 20%;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
				margin-right: 50upx;
				image{
					width: 15upx;
					height: 25upx;
				}
			}
		}
	}
}
</style>
