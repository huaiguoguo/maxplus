<template>
	<view class="container">
		<view class="nav">
			<view class="nav_left">
				<image src="/static/img/max+/band_icon_rank.png" mode="scaleToFill"></image>
				<text>当前排名</text>
			</view>
			<view class="nav_right">
				<text>All</text>
				<image src="/static/img/max+/rb_deck.png" mode="scaleToFill"></image>
				<image src="/static/img/max+/rb_deck.png" mode="scaleToFill"></image>
				<image src="/static/img/max+/rb_deck.png" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="content">
			<view class="field">
				<text>英雄</text>
				<text>排名No.1</text>
			</view>
			<view class="list">
				<view v-for="(item, index) in [1,2,3,4,5,6]" :key="index" class="item">
					<view class="left">
						<image src="/static/img/max+/antimage_hphover.png" mode="scaleToFill"></image>
						<text>敌法师</text>
					</view>
					<view class="middle">
						<text>故梦</text>
					</view>
					<view class="right">
						<image src="/static/img/max+/right_arrow.png" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	page{
		
	}
	.container{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.nav{
			width: 100%;
			height: 80upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background: rgb(225, 230, 235);
			.nav_left{
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				image{
					width: 40upx;
					height: 40upx;
					margin-bottom: 8upx;
					will-change: transform;
					margin-left: 20upx;
					// background: blue;
				}
				text{
					display: block;
					height: 40upx;
					// background: red;
					font-size: 27upx;
					line-height: 40upx;
					color: #000000;
				}
			}
			.nav_right{
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				text{
					display: block;
					width: 40upx;
					height: 40upx;
					line-height: 40upx;
					text-align: center;
					border-radius: 50upx;
					color: #FFFFFF;
					font-size: 20upx;
					background: orange;
					margin-right: 15upx;
					font-weight: 550;
				}
				image{
					width: 40upx;
					height: 40upx;
					will-change: transform;
					margin-right: 15upx;
				}
			}
		}
		.content{
			padding: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: #FFFFFF;
			.field{
				width: 65%;
				height: 60upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				// background: red;
				text{
					font-size: 26upx;
					font-weight: 500;
					color: #BCBCBC;
					&:nth-child(2){
						margin-right: 80upx;
					}
				}
			}
			.list{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: space-between;
				// background: red;
				
				.item{
					width: 100%;
					height: 100upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					border-top: 1upx solid #C8C7CC;
					
					.left{
						// flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						image{
							width: 90upx;
							height: 60upx;
							will-change: transform;
							margin-left: 20upx;
						}
						text{
							font-size: 26upx;
							font-weight: 500;
							color: #000000;
							margin-left: 15upx;
						}
					}
					.middle{
						// flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						text{
							font-size: 26upx;
							font-weight: 500;
							color: #000000;
						}
					}
					.right{
						// flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						margin-right: 20upx;
						image{
							width: 20upx;
							height: 30upx;
							will-change: transform;
						}
					}
				}
			}
		}
	}
</style>
