<template>
	<view class="container">
		<view class="head">
			<view class="head_img">
				<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
			</view>
			<view class="head_content">
				<image class="avatar" src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
				<view class="username">
					<text class="name">鬼影会议室</text>
					<text class="type">作者</text>
				</view>
				<text class="introduction">作者介绍: 努力让自己的文章看起来能够专业一点的战地记者</text>
				<view class="nav">
					<text>文章数 161</text>
					<text>阅读量 45694.8k</text>
					<text>粉丝 42</text>
				</view>
			</view>
		</view>
		<view class="band">
			<view class="band_left">
				<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
				<text>全部文章</text>
			</view>
			<view class="band_right">
				<!-- <text>成为作者</text> -->
			</view>
		</view>
		<view class="list">
			<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="index" class="item">
				<view class="item_left">
					<view class="item_left_img">
						<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
					</view>
					<!-- <view class="item_left_content">
						<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
						<text>鬼影会议室</text>
					</view> -->
				</view>
				<view class="item_right">
					<view class="title">
						<text>布克维Mintor: 魔王降临, 永不言败! RNG</text>
					</view>
					<view class="abstract">
						<text>2-1 击败GeeK Fam杀入决赛</text>
					</view>
					<view class="time_total">
						<view class="time">
							<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
							<text>7小时前</text>
						</view>
						<view class="total">
							<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
							<text>12556</text>
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgb(225, 230, 235);
	.head{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		.head_img{
			width: 100%;
			height: 100%;
			overflow: hidden;
			// background: rgb(0, 0, 0, 0.8);
			image{
				width: 100%;
				height: 400upx;
				will-change: transform;
				filter: blur(15upx);
			}
		}
		.head_content{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			background: rgba(0,0,0,0.7);
			
			position: absolute;
			top: 0upx;
			left: 0upx;
			
			.avatar{
				width: 160upx;
				height: 160upx;
				will-change: transform;
				border-radius: 160upx;
				margin-top: 20upx;
			}
			.username{
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				// background: red;
				margin-top: 20upx;
				text{
					font-size: 30upx;
					color: #FFFFFF;
					text-align: center;
				}
				.name{
					// background: pink;
				}
				.type{
					background: #0FAEFF;
					border-radius: 3upx;
					font-size: 20upx;
					padding: 3upx 10upx;
					margin-left: 10upx;
				}
			}
			.introduction{
				font-size: 22upx;
				color: #CCCCCC;
				margin-top: 20upx;
			}
			.nav{
				width: 100%;
				height: 100upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				// margin-top: 30upx;
				// background: red;
				text{
					width: 33%;
					font-size: 27upx;
					color: rgb(180, 190, 199);
					text-align: center;
					// background: blue;
				}
			}
		}
		
	}
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
				color: #C0C0C0;
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
				// position: relative;
				// background: red;
				.item_left_img{
					width: 100%;
					height: 100%;
					// background: blue;
					// overflow: hidden;
					image{
						width: 100%;
						height: 160upx;
						will-change: transform;
						// filter: blur(15upx);
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
						font-weight: 550;
					}
				}
				.abstract{
					width: 100%;
					height: 30%;
					text{
						font-size: 25upx;
						color: #000000;
						font-weight: 550;
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
						image{
							width: 30upx;
							height: 20upx;
							will-change: transform;
						}
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
