<template>
	<view class="container">
		<view class="nav">
			<view @click="active = 1" :class="[active==1?'item news active':'item news']"> 
				<text>周富贵</text>
			</view>
			<view @click="active = 2" :class="[active==2?'item post active':'item post']">
				<text>周天台</text>
			</view>
			<view @click="active = 3" :class="[active==3?'item anchor active':'item anchor']">
				<text>M币排行</text>
			</view>
		</view>
		<view @click="active=1" v-show="active==1" class="list fugui">
			<view class="list_field">
				<text>排名</text>
				<text>玩家</text>
			</view>
			<view class="list_content">
				<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" class="list_item">
					<view class="left">
						<view class="index">
							<text>{{index+1}}</text>
						</view>
						<view class="userinfo">
							<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							<view class="username">
								<view class="name">
									<text>active=1桓桓</text>
									<image src="/static/img/max+/vip_level5.png" mode="scaleToFill"></image>
								</view>
								<text>Max id:2526480</text>
							</view>
						</view>
					</view>
					<view class="right">
						<text>62.66</text>
					</view>
				</view>
			</view>
		</view>
		
		<view @click="active=2" v-show="active==2" class="list tiantai">
			<view class="list_field">
				<text>排名</text>
				<text>玩家</text>
			</view>
			<view class="list_content">
				<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" class="list_item">
					<view class="left">
						<view class="index">
							<text>{{index+1}}</text>
						</view>
						<view class="userinfo">
							<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							<view class="username">
								<view class="name">
									<text>active=2桓桓</text>
									<image src="/static/img/max+/vip_level5.png" mode="scaleToFill"></image>
								</view>
								<text>Max id:2526480</text>
							</view>
						</view>
					</view>
					<view class="right">
						<text>62.66</text>
					</view>
				</view>
			</view>
		</view>
		
		<view @click="active=3" v-show="active==3" class="list paihang">
			<view class="list_field">
				<text>排名</text>
				<text>玩家</text>
			</view>
			<view class="list_content">
				<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" class="list_item">
					<view class="left">
						<view class="index">
							<text>{{index+1}}</text>
						</view>
						<view class="userinfo">
							<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							<view class="username">
								<view class="name">
									<text>active=3桓桓</text>
									<image src="/static/img/max+/vip_level5.png" mode="scaleToFill"></image>
								</view>
								<text>Max id:2526480</text>
							</view>
						</view>
					</view>
					<view class="right">
						<text>62.66</text>
						<image src="/static/img/max+/max_coin.png" mode="scaleToFill"></image>
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

		.nav{
			width:90%;
			height: 50upx;
			background: #CCCCCC;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius: 8upx;
			margin-top: 20upx;
			border: 1upx solid #000000;

			.item{
				flex: 1;
				height: 50upx;
				box-sizing: content-box;
				font-size: 25upx;
				color: #000000;

				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				&:nth-child(n+1){
					border-right: 1upx solid #000000;
				}
				&:last-child{
					border-right: 0upx solid #000000;
				}
			}
			.active{
				background: #000000;
				// border-top-left-radius: 8upx;
				// border-bottom-left-radius: 8upx;
				color: #FFFFFF;
			}
		}
		
		
		
		.list{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: #FFFFFF;
			margin-top: 25upx;
			.list_field{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				text{
					flex: 0.7;
					font-size: 28upx;
					// background: red;
					text-align: center;
					text-align: left;
					padding: 10upx 20upx;
					&:nth-child(2){
						flex:2;
						// background: blue;
						text-align: left;
						// padding: 0upx;
					}
				}
			}
			.list_content{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.list_item{
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					// background: red;
					padding: 15upx 0upx;
					&:nth-child(n+1){
						border-top: 1upx solid rgb(246, 247, 249);
					}
					.left{
						width: 60%;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						// background: blue;
						.index{
							// background: yellow;
							text{
								font-size: 28upx;
								color: #000000;
								// background: red;
							}
						}
						.userinfo{
							// width: 80%;
							display: flex;
							flex-direction: row;
							justify-content: space-around;
							align-items: center;
							// background: orange;
							// margin-left: 20upx;
							image{
								width: 80upx;
								height: 80upx;
								border-radius: 80upx;
								will-change: transform;
							}
							.username{
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: flex-start;
								margin-left: 20upx;
								// background: red;
								.name{
									height: 40upx;
									display: flex;
									flex-direction: row;
									justify-content: flex-start;
									align-items: center;
									text{
										font-size: 28upx;
										color: #000000;
										margin-bottom: 5upx;
									}
									image{
										width: 40upx;
										height: 40upx;
										will-change: transform;
										margin-left: 10upx;
									}
								}
								text{
									margin-top: 8upx;
									font-size: 25upx;
									color: #C8C7CC;
								}
							}
						}
					}
					.right{
						width: 30%;
						color: #16AB60;
						font-size: 28upx;
						text-align: center;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						image{
							width: 35upx;
							height: 35upx;
							will-change: transform;
							margin-left: 5upx;
						}
					}
				}
			}

		}
		
	}
</style>
