<template>
	<view class="container">
		<view class="nav">
			<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
			<text>lifugui</text>
		</view>
		<view class="content">
			<view class="cotnent_nav">
				<view @click="active=1" :class="[active == 1?'item follow active':'item follow']">
					<text>我的关注</text>
				</view>
				<view @click="active=2" :class="[active == 2?'item fans active':'item fans']">
					<text>我的粉丝</text>
				</view>
			</view>

			<view class="content_body">
				
				<view v-show="active == 1" class="content_body_item follow">
					<view class="body_item"></view>
					<view class="no_message">
						<view class="message_content">
							<image src="/static/img/max+/def_tag_favour.png" mode="scaleToFill"></image>
							<text>暂无关注</text>
						</view>
					</view>
				</view>

				<view v-show="active == 2" class="content_body_item fans">
					<view class="body_item"></view>
					<view class="no_message">
						<view class="message_content">
							<image src="/static/img/max+/def_tag_favour.png" mode="scaleToFill"></image>
							<text>暂无粉丝</text>
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
				active: 1
			};
		}
	}
</script>

<style lang="less">
	page{
		background: #FFFFFF;
	}
	.container{
		width: 100%;
		height: 100%;
		.nav{
			width: 100%;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			background: rgb(225, 230, 235);
			image{
				width: 40upx;
				height: 40upx;
				will-change: transform;
				margin-left: 25upx;
			}
			text{
				font-size: 28upx;
				color: #000000;
			}
		}
		.content{
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0;
			.cotnent_nav{
				width: 100%;
				height: 100%;
				background: rgb(247, 248, 249);
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.item{
					width: 50%;
					height: 100%;
					padding: 20upx 0upx;
					text-align: center;
					font-size: 27upx;
					color: rgb(40, 50, 60);
				}
				
				.active{
					font-size: 30upx;
					color: #000000;
					font-weight: 550;
					background: #FFFFFF;
				}
			}
			.content_body{
				width: 100%;
				height: 100%;
				background: red;
				.content_body_item{
					
					.body_item{}
					.no_message{
						width: 100%;
						height: 100%;
						position: fixed;
						top: 16.7%;
						bottom: 0upx;
						left: 0upx;
						right: 0upx;
						.message_content{
							width: 100%;
							height: 100%;
							// background: orange;
							display: flex;
							flex-direction: column;
							justify-content: flex-start;
							align-items: center;
							image{
								width: 150upx;
								height: 150upx;
								will-change: transform;
								margin-top: 350upx;
							}
							text{
								font-size: 28upx;
								color: rgb(157, 166, 174);
								margin-top: 30upx;
							}
						}
						
					}
				}
				
			}
		}
	}
</style>
