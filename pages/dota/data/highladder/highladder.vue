<template>
	<view class="container">
		<view class="header">
			<view class="h_top">
				<image src="/static/img/max+/ic_data_ladder_dota2.png" mode="scaleToFill"></image>
				<text>天梯排名</text>
			</view>
			<view class="h_bottom">
				<view class="navigate">
					<view @click="active = 1" :class="[active==1?'nav_item active':'nav_item']">
						<text>国服天梯</text>
						<view class="arrow">
							<view v-show="active==1" class="arrow_a"></view>
						</view>
					</view>
					<view @click="active = 2" :class="[active==2?'nav_item active':'nav_item']">
						<text>东南亚天梯</text>
						<view class="arrow">
							<view v-show="active==2" class="arrow_a"></view>
						</view>
					</view>
					<view @click="active = 3" :class="[active==3?'nav_item active':'nav_item']">
						<text>美服天梯</text>
						<view class="arrow">
							<view v-show="active==3" class="arrow_a"></view>
						</view>
					</view>
					<view @click="active = 4" :class="[active==4?'nav_item active':'nav_item']">
						<text>欧服天梯</text>
						<view class="arrow">
							<view v-show="active==4" class="arrow_a"></view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="band">
			<image src="/static/img/max+/band_icon_rank.png" mode="scaleToFill"></image>
			<text>段位分布</text>
		</view>
		<view class="histogram">

		</view>
		<view class="band">
			<image src="/static/img/max+/band_icon_calendar.png" mode="scaleToFill"></image>
			<text>今日排名</text>
		</view>
		<view class="list">
			
			
			<view v-show="active==1" class="list_content one">
				<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]" :key="index" class="item">
					<view class="left">
						<text class="index">{{index+1}}</text>
						<view class="item_left_arrow">
							
							
							<!-- <view class="line"></view> -->
							<!--这个地方是横线块 用if来判断是显示横线块还是下面的箭头-->
							<view class="arrow_b">
								<view class="arrow_bb"></view>
							</view>
							<text>1</text>
							
							
						</view>
						<image class="avatar" src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
						<text class="username">one-June</text>
					</view>
					<view class="right">
						<image class="r_icon" src="/static/img/max+/ic_data_arena_rate.png" mode="scaleToFill"></image>
						<text>1</text>
						<image class="r_arrow" src="/static/img/max+/more_arrow.png" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
			
			
			<view v-show="active==2" class="list_content two">
				<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]" :key="index" class="item">
					<view class="left">
						<text class="index">{{index+1}}</text>
						<view class="item_left_arrow">
							
							
							<!-- <view class="line"></view> -->
							<!--这个地方是横线块 用if来判断是显示横线块还是下面的箭头-->
							<view class="arrow_b">
								<view class="arrow_bb"></view>
							</view>
							<text>1</text>
							
							
						</view>
						<image class="avatar" src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
						<text class="username">two-June</text>
					</view>
					<view class="right">
						<image class="r_icon" src="/static/img/max+/ic_data_arena_rate.png" mode="scaleToFill"></image>
						<text>1</text>
						<image class="r_arrow" src="/static/img/max+/more_arrow.png" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
			
			<view v-show="active==3" class="list_content three">
				<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]" :key="index" class="item">
					<view class="left">
						<text class="index">{{index+1}}</text>
						<view class="item_left_arrow">
							
							
							<!-- <view class="line"></view> -->
							<!--这个地方是横线块 用if来判断是显示横线块还是下面的箭头-->
							<view class="arrow_b">
								<view class="arrow_bb"></view>
							</view>
							<text>1</text>
							
							
						</view>
						<image class="avatar" src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
						<text class="username">three-June</text>
					</view>
					<view class="right">
						<image class="r_icon" src="/static/img/max+/ic_data_arena_rate.png" mode="scaleToFill"></image>
						<text>1</text>
						<image class="r_arrow" src="/static/img/max+/more_arrow.png" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
			
			
			<view v-show="active==4" class="list_content four">
				<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]" :key="index" class="item">
					<view class="left">
						<text class="index">{{index+1}}</text>
						<view class="item_left_arrow">
							
							
							<!-- <view class="line"></view> -->
							<!--这个地方是横线块 用if来判断是显示横线块还是下面的箭头-->
							<view class="arrow_b">
								<view class="arrow_bb"></view>
							</view>
							<text>1</text>
							
							
						</view>
						<image class="avatar" src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
						<text class="username">four-June</text>
					</view>
					<view class="right">
						<image class="r_icon" src="/static/img/max+/ic_data_arena_rate.png" mode="scaleToFill"></image>
						<text>1</text>
						<image class="r_arrow" src="/static/img/max+/more_arrow.png" mode="scaleToFill"></image>
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
				active: 1
			};
		}
	}
</script>

<style lang="less">
	page {
		padding: 0;
		margin: 0;
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.header {
			width: 100%;
			// height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: #000000;
			
			position: fixed;
			top: 88upx;
			left: 0;
			z-index: 9;
			
			.h_top{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #000000;
				image {
					width: 100upx;
					height: 100upx;
				}
				
				text {
					font-size: 30upx;
					color: #FFFFFF;
				}
			}
			.h_bottom{
				width: 100%;
				height: 100%;
				
				.navigate {
					width: 100%;
					height: 70upx;
					background: #000000;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					color: #FFFFFF;
				
					.nav_item {
						width: 50%;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: flex-end;
						align-items: center;
				
						text {
							font-size: 28upx;
							color: rgb(88, 98, 110);
						}
						.active{
							color: #FFFFFF;
						}
				
						.arrow {
							width: 15upx;
							height: 15upx;
							margin-top: 5upx;
				
							.arrow_a {
								width: 0upx;
								height: 0upx;
								// background: rgb(255, 255, 255, 200);
								// border-top: 20upx solid #000000; //transparent
								border-right: 15upx solid transparent;
								border-left: 15upx solid transparent;
								border-bottom: 15upx solid rgb(255, 255, 255, 100);
								position: absolute;
								bottom: 0upx;
							}
						}
					}
				}
			
			}

		}

		

		.band {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			margin-top: 120upx;
			background: rgb(225, 230, 235);
			padding: 20upx 0upx;
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

		.Histogram {}

		.list {
			width: 100%;
			height: 100%;

			.list_content{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				
				.item{
					width: 100%;
					height: 100upx;
					padding: 0upx 0upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					&:nth-child(n+2){
						border-top: 1upx solid #CCCCCC;
					}
					.left{
						width: 50%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						margin-left: 20upx;
						.index{
							font-size: 30upx;
							color: #000000;
						}
				
						.item_left_arrow{
							width: 20%;
							height: 30upx;
							margin-left: 20upx;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							// background: pink;
							.line{
								width: 70upx;
								height: 6upx;
								background: #BCBCBC;
							}
							.arrow_b{
								// width: 100%;
								// height: 100%;
								margin-top: 10upx;
								// background: orange;
								
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								
								.arrow_bb {
									width: 12upx;
									height: 12upx;
									background: rgb(255, 255, 255);
									// border-top: 20upx solid #000000; //transparent
									// border-left: 15upx solid transparent;
									border-right: 5upx solid #16AB60;
									border-bottom: 5upx solid #16AB60;
									transform: rotate(225deg);
									
									// position: absolute;
									// bottom: 0upx;
									margin-bottom: 5upx;
								}
							}
							text{
								font-size: 25upx;
								color: #16AB60;
								margin-left: 10upx;
							}
						}
						.avatar{
							width: 80upx;
							height: 80upx;
							will-change: transform;
							border-radius: 40upx;
							margin-left: 20upx;
						}
						.username{
							font-size: 25upx;
							color: #000000;
							margin-left: 15upx;
							
						}
					}
					.right{
						width: 15%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						margin-right: 50upx;
						// background: red;
						.r_icon{
							width: 50upx;
							height: 50upx;
							will-change: transform;
							border-radius: 40upx;
						}
						text{
							font-size: 25upx;
							color: #000000;
						}
						.r_arrow{
							width: 20upx;
							height: 25upx;
							will-change: transform;
							border-radius: 0upx;
						}
					}
				}
						
						
			}

		
		}
	}
</style>
