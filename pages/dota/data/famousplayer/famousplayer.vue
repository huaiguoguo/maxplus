<template>
	<view class="container">
		<view class="band">
			<image src="/static/img/max+/band_icon_follow_player.png" mode="scaleToFill"></image>
			<text>知名玩家</text>
		</view>
		<view class="list">
			<view v-for="(item, index) in [1,2,3,4,5,6,7, 8,9, 10, 11,12,13,14,15]" :key="index" class="item">
				<view class="left">
					<image class="user_avatar" src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
					<text class="username">Zsmj</text>
					<text class="status">正在直播</text>
				</view>
				<view class="right">
					<image class="icon" src="/static/img/max+/ic_data_arena_rate.png" mode="scaleToFill"></image>
					<text class="num">283</text>
					<image class="arrow" src="/static/img/max+/right_arrow.png" mode="scaleToFill"></image>
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
	background: rgb(225, 230, 235);
}
.container{
	width: 100%;
	height: 100%;
	.band{
		width: 100%;
		height: 80upx;
		// background: red;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		image{
			width: 50upx;
			height: 50upx;
			will-change: transform;
			margin-left: 30upx;
			border-radius: 40upx;
		}
		text{
			font-size: 28upx;
			color: #000000;
			margin-left: 5upx;
		}
	}
	.list{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.item{
			width: 100%;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			&:nth-child(n+2){
				border-top: 3upx solid rgb(247, 248, 249);
			}
			.left{
				width: 32%;
				height: 100%;
				margin-left: 30upx;
				// background: red;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.user_avatar{
					width: 70upx;
					height: 70upx;
					will-change: transform;
					border-radius: 50upx;
				}
				.username{
					font-size: 25upx;
					color: #000000;
				}
				.status{
					font-size: 25upx;
					color: rgb(147, 157, 166);
				}
			}
			.right{
				width: 20%;
				height: 100%;
				// background: red;
				margin-right: 25upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.icon{
					width: 60upx;
					height: 60upx;
					border-radius: 60upx;
					will-change: transform;
				}
				.num{
					font-size: 25upx;
					color: #000000;
					margin-right: 15upx;
				}
				.arrow{
					width: 20upx;
					height: 30upx;
					will-change: transform;
				}
			}
		}

	}
}
</style>
