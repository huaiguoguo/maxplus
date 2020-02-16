<template>
	<view class="container">
		<view class="nav">
			<text class="nav_item nav_order">排名</text>
			<text class="nav_item nav_team">战队</text>
			<text class="nav_item nav_score">积分</text>
		</view>
		<view class="list">
			<view v-for="(item, index) in [1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20]" :key="index" class="item">
				<text class="title order">{{index+1}}</text>
				<image class="title icon" src="/static/img/max+/1838315.png" mode="scaleToFill"></image>
				<text class="title team_name">TNC Predator</text>
				<text class="title score">4850</text>
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
		margin-top: 20upx;
		background: #FFFFFF;
		.nav{
			width: 100%;
			height: 70upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.nav_item{
				font-size: 26upx;
				color: #BCBCBC;
			}
			.nav_order{
				flex: 1;
				margin-left: 30upx;
				// background-color: pink;
			}
			.nav_team{
				flex: 1;
				// background: blue;
				text-indent: 30upx;
			}
			.nav_score{
				flex: 1;
				text-align: left;
				// margin-right: 100upx;
				// background: red;
				text-indent: 80upx;
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
				height: 80upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				border-top: 1px solid rgb(230, 234, 238);
				.title{
					font-size: 25upx;
					color: #000000;
				}
				.order{
					flex: 1;
					margin-left: 30upx;
				}
				.icon{
					width: 40upx;
					height: 40upx;
					will-change: transform;
					margin-right: 50upx;
				}
				.team_name{
					flex: 3;
				}
				.score{
					flex: 1;
					margin-right: 30upx;
				}
			}
		}
	}
</style>
