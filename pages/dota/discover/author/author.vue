<template>
	<view class="container">
		<view class="band">
			<view class="band_left">
				<image src="/static/img/max+/band_icon_follow_player.png" mode="scaleToFill"></image>
				<text>作者列表</text>
			</view>
			<view class="band_right">
				<text @click="redirectApply()">成为作者</text>
			</view>
		</view>
		<view class="list">
			<view @click="redirect()" v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="index" class="item">
				<view class="item_left">
					<view class="item_left_img">
						<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
					</view>
					<view class="item_left_content">
						<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
						<text>鬼影会议室</text>
					</view>
				</view>
				<view class="item_right">
					<view class="title">
						<text>努力让自己的文章看起来能够专业一点的战地记者</text>
					</view>
					<view class="abstract">
						<text>布克维Mintor: 魔王降临, 永不言败! RNG 2-1 击败GeeK Fam杀入决赛</text>
					</view>
					<view class="time_total">
						<view class="time">
							<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
							<text>7小时前</text>
						</view>
						<view class="total">
							<text>125篇新闻</text>
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
		},
		methods:{
			redirect(){
				uni.navigateTo({
					url: '/pages/dota/discover/author/detail/detail'
				})
			},
			redirectApply(){
				uni.navigateTo({
					url: '/pages/dota/discover/author/apply_author/apply_author'
				})
			}
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
	background: rgb(225, 230, 235);
	.band{
		width: 100%;
		height: 100upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
		.band_left{
			width: 30%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			image{
				width: 40upx;
				height: 40upx;
				will-change: transform;
				margin-left: 20upx;
			}
			text{
				font-size: 25upx;
				margin-left: 10upx;
				color: rgb(40, 50, 60);
			}
		}
		.band_right{
			width: 20%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			text{
				font-size: 25upx;
				color: rgb(141, 151, 161);
				border-radius: 25upx;
				border: 1upx solid #C0C0C0;
				padding: 8upx 12upx;
				background: #FFFFFF;
			}
		}
	}
	.list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.item{
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			&:nth-child(n+2){
				margin-top: 5upx;
			}
			.item_left{
				width: 35%;
				height: 100%;
				
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				position: relative;
				// background: red;
				.item_left_img{
					width: 90%;
					height: 100%;
					// background: blue;
					overflow: hidden;
					image{
						width: 100%;
						height: 250upx;
						will-change: transform;
						filter: blur(15upx);
					}
				}
				.item_left_content{
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 0upx;
					left: 0upx;
					image{
						width: 80upx;
						height: 80upx;
						will-change: transform;
						border-radius: 80upx;
					}
					text{
						font-size: 30upx;
						color: #FFFFFF;
						margin-top: 20upx;
						font-size: 25upx;
					}
				}

			}
			.item_right{
				width: 70%;
				height: 100%;
				// margin-left: 10upx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: space-between;
				padding: 20upx;
				.title{
					width: 100%;
					height: 30%;
					text{
						font-size: 25upx;
						color: #000000;
					}
				}
				.abstract{
					width: 100%;
					height: 30%;
					text{
						font-size: 25upx;
						color: #BCBCBC;
					}
				}
				.time_total{
					width: 100%;
					height: 30%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.time{
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						image{
							width: 25upx;
							height: 25upx;
							will-change: transform;
						}
						text{
							font-size: 23upx;
							color: #BCBCBC;
						}
					}
					.total{
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						text{
							font-size: 23upx;
							color: #BCBCBC;
						}
					}
				}
			}
		}
	}
}
</style>
