<template>
	<view class="container">
		<view class="nav">
			<text>LIVE</text>
			<text>数据直播列表</text>
		</view>
		<view class="list">
			<view class="left">
				<view v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index" class="left_item">
					<text>01:12</text>
				</view>
			</view>
			<view class="right">
				
				<view v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="'abc_'+index" class="right_item">

					<view class="right_item_left">
						<view class="right_item_left_item">
							<image src="/static/img/max+/diy_picker7.png" mode="scaleToFill"></image>
							<text>RTRw</text>
						</view>
						<view class="right_item_left_item">
							<image src="/static/img/max+/diy_picker7.png" mode="scaleToFill"></image>
							<text>MeriT</text>
						</view>
					</view>

					<view class="right_item_middle">
						<view class="right_item_middle_item">
							<text>0</text>
							<image src="/static/img/max+/PH.png" mode="scaleToFill"></image>
						</view>
						<view class="right_item_middle_item">
							<text>0</text>
							<image src="/static/img/max+/CN.png" mode="scaleToFill"></image>
						</view>
					</view>

					<view class="right_item_right">
						<view class="right_item_right_top">
							<image src="/static/img/max+/recoder_switch_camera.png" mode="scaleToFill"></image>
							<text>直播</text>
						</view>
						<view class="right_item_right_bottom">
							<text>BO1</text>
						</view>
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
	padding: 0;
	margin: 0;
	background: rgb(225, 230, 235);
}
.container{
	width: 100%;
	height: 100%;
	background: rgb(225, 230, 235);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// padding: 50upx 0upx;
	.nav{
		width: 100%;
		height: 100upx;
		// background: red;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
		font-size: 28upx;
		text{
			font-size: 40upx;
			color: #000000;
			// background: blue;
			margin-left: 85upx;
			&:nth-child(2){
				font-size: 25upx;
				color: rgb(150, 159, 169);
				margin-left: 20upx;
				margin-bottom: 10upx;
			}
		}
	}

	.list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		
		
		.left{
			flex: 1;
			// width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			// background: red;
			.left_item{
				width: 100%;
				height: 140upx;
				// background: blue;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 15upx 0upx;
				padding: 20upx 0upx;
				&:nth-child(n+2){
					// border: 1upx solid #CCCCCC;
				}
				text{
					font-size: 28upx;
					color: #BCBCBC;
				}
			}
		}

		.right{
			flex: 3;
			height: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.right_item{
				width: 100%;
				height: 138upx;
				// background: pink;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				
				padding: 20upx 0upx;
				
				&:nth-child(n+2){
					// margin-top: 20upx;
					border-top: 2upx solid rgb(235, 249, 242);
				}
				
				.right_item_left{
					width: 30%;
					height: 100%;
					// background: red;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.right_item_left_item{
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						padding: 15upx 0upx;
						image{
							width: 50upx;
							height: 40upx;
							will-change: transform;
						}
						text{
							font-size: 28upx;
							color: #000000;
						}
					}
				}
				
				.right_item_middle{
					width: 20%;
					height: 100%;
					// background: orange;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.right_item_middle_item{
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						padding: 15upx 0upx;
						text{
							font-size: 30upx;
							color: #C0C0C0;
						}
						image{
							width: 25upx;
							height: 25upx;
							will-change: transform;
						}
					}
				}
				
				.right_item_right{
					width: 30%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					// background: red;
					.right_item_right_top{
						width: 70%;
						height: 60%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						background: rgb(76, 152, 56);
						border-radius: 5upx;
						padding: 8upx 5upx;
						image{
							width: 30upx;
							height: 20upx;
							will-change: transform;
						}
						text{
							font-size: 24upx;
							color: #FFFFFF;
							margin-left: 10upx;
						}
					}
					.right_item_right_bottom{
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						margin-top: 15upx;
						text{
							font-size: 28upx;
							color: #BCBCBC;
						}
					}
				}
			}
		}
	}
	
}
</style>
