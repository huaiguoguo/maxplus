<template>
	<view class="container">
		<view class="nav">
			<view class="nav_left">
				<image src="/static/img/max+/band_icon_player.png" mode="scaleToFill"></image>
				<text>个人信息</text>
			</view>
			<view class="nav_right">
				Max ID:10832260
			</view>
		</view>


		<view class="userinfo">
			<view class="item">
				<text>头像</text>
				<image src="/static/img/max+/me_default_home.png" mode="scaleToFill"></image>
			</view>
			
			<view class="item">
				<text>设置昵称</text>
				<text>lifugui</text>
			</view>
			
			<view class="item">
				<text>个性签名</text>
				<text>这是签名</text>
			</view>
		</view>

		<view class="nav">
			<view class="nav_left">
				<image src="/static/img/max+/band_icon_player.png" mode="scaleToFill"></image>
				<text>个人信息</text>
			</view>
		</view>

		<view class="game_account">
			
			<view class="game_account_item">
				<image src="/static/img/max+/icon_dota2_bind.png" mode="scaleToFill"></image>
				<text>添加Dota2游戏账号</text>
			</view>
			
			<view class="game_account_item">
				<image src="/static/img/max+/icon_csgo_bind.png" mode="scaleToFill"></image>
				<text>添加 CS:GO 游戏账号</text>
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
		background: rgb(225, 230, 235);
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
			// background: #ccc;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			font-size: 25upx;
			color: #C0C0C0;
			.nav_left{
				width: 50%;
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
					color: rgb(54, 64, 74);
				}
			}
			.nav_right{
				margin-right: 20upx;
				color: rgb(151, 160, 170);
			}
		}
		.userinfo{
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			.item{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 30upx 0upx;
				text{
					margin-left: 20upx;
					font-size: 25upx;
					color: #000000;
					&:nth-child(2){
						margin-right: 15upx;
					}
				}
				image{
					margin-right: 20upx;
					width: 80upx;
					height: 80upx;
					will-change: transform;
				}
				
				&:nth-child(2),&:nth-child(3){
					border-top: 1upx solid rgb(226,231, 236);
				}
			}
		}
		.game_account{
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-bottom: 20upx;
			.game_account_item{
				width: 95%;
				height: 100upx;
				background: rgb(247, 248, 249);
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				margin-top: 25upx;
				border-radius: 15upx;
				image{
					width: 40upx;
					height: 40upx;
					will-change: transform;
					align-self: flex-start;
					// background-color: red;
				}
				text{
					flex: 1;
					display: block;
					font-size: 30upx;
					color: rgb(140, 150, 160);
					// background: blue;
					text-align: center;
				}
			}
		}
	}
</style>
