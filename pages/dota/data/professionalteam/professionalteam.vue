<template>
	<view class="container">
		<view class="band">
			<image src="/static/img/max+/band_icon_team.png" mode="scaleToFill"></image>
			<text>职业战队</text>
		</view>
		<view class="nav">
			<text class="nav_item nav_order">排名</text>
			<text class="nav_item nav_team">战队</text>
			<text class="nav_item nav_score">MMR</text>
		</view>
		<view class="list">
			<view v-for="(item, index) in [1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20]" :key="index" class="item">
				<view class="item_left">
					<text class="left_field order">{{index+1}}</text>
					<image class="left_field icon" src="/static/img/max+/1838315.png" mode="scaleToFill"></image>
					<text class="left_field team_name">TNC Predator</text>
				</view>
				<view class="item_right">
					<view class="score_progress">
						<text class="right_field score">4850</text>
						<view class="progress">
							<view class="jindu"></view>
						</view>
					</view>
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
		// margin-top: 20upx;
		
		.band{
			width: 100%;
			height: 80upx;
			// background: red;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			image{
				width: 40upx;
				height: 40upx;
				will-change: transform;
				margin-left: 45upx;
			}
			text{
				font-size: 30upx;
				color: #000000;
			}
		}
		.nav{
			width: 100%;
			height: 70upx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			background: #FFFFFF;
			.nav_item{
				font-size: 26upx;
				color: #BCBCBC;
			}
			.nav_order{
				flex: 1;
				// margin-left: 30upx;
				// background-color: pink;
				text-indent: 50upx;
			}
			.nav_team{
				flex: 3;
				// background: blue;
				// text-align: center;
				text-indent: 80upx;
			}
			.nav_score{
				flex: 1.8;
				text-align: left;
				// margin-right: 100upx;
				// background: red;
				// margin-right: 30upx;
				// text-indent: 80upx;
			}
		}
		.list{
			background: #FFFFFF;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.item{
				width: 100%;
				height: 80upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				border-top: 1px solid rgb(230, 234, 238);
				.item_left{
					width: 40%;
					// padding: 0upx 50upx;
					margin-left: 50upx;
					
					text-align: center;
					// background: red;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.left_field{
						font-size: 28upx;
						color: #000000;
					}
					.order{
						
					}
					.icon{
						width: 50upx;
						height: 50upx;
						will-change: transform;
					}
					.team_name{
					}
				}
				.item_right{
					width: 25%;
					// background: blue;
					text-align: left;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					margin-right: 50upx;
					.score_progress{
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: flex-start;
						text{
							font-size: 26upx;
							color:#000000;
							padding: 5upx 0upx;
						}
						.progress{
							width: 80%;
							height: 8upx;
							// padding: 5upx 0upx;
							background: rgb(235, 230, 225);
							.jindu{
								width: 70%;
								height: 100%;
								background: rgb(145, 130, 100);
							}
						}
					}
					image{
						width: 15upx;
						height: 25upx;
						will-change: transform;
					}
					
				}
			}
		}
	}
</style>
