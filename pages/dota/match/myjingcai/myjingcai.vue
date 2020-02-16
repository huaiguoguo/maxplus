<template>
	<view class="container">
		<view class="head">
			<image class="head_img" src="/static/img/max+/vip_levellarge0.png" mode="scaleToFill"></image>
			<text class="title">暂无等级</text>
			<text class="rate"><text>0</text>/100000</text>
			<view class="progress">
				<view class="jindu"></view>
			</view>
		</view>
		<view class="band">
			<view class="band_left">
				<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
				<text>竞猜统计</text>
			</view>
			<view class="band_right">
				<text>本周</text>
				<text @click="redirect('set')">竞猜设置</text>
			</view>
		</view>
		<view class="dashborad">
			<view class="dash_item times">
				<view class="dash_item_content">
					<text>0</text>
					<text>竞猜场次</text>
				</view>
			</view>
			<view class="dash_item rate">
				<view class="dash_item_content">
					<text>0</text>
					<text>胜率</text>
				</view>
			</view>
			<view class="dash_item revenue">
				<view class="dash_item_content">
					<text>0</text>
					<text>总收益</text>
				</view>
			</view>
		</view>
		<view class="band">
			<view class="band_left">
				<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
				<text>竞猜历史</text>
			</view>
		</view>
		<view class="history">
			<view class="history_field">
				<text class="field">状态</text>
				<text class="field">比赛</text>
				<text class="field">队伍</text>
				<text class="field">收益</text>
			</view>
			<view class="history_list">
				<view v-for="(item, index) in [1,2,3,4,5]" :key="index" class="item">
					
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
			redirect(type){
				if(type == 'set'){
					uni.navigateTo({
						url: '/pages/dota/match/myjingcai/jingcaisetting/jingcaisetting'
					})
				}
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
	.head{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgb(20, 25, 30);
		padding-bottom: 40upx;
		.head_img{
			width: 120upx;
			height: 120upx;
			will-change: transform;
			margin-top: 20upx;
		}
		.title{
			margin-top: 20upx;
			font-size: 28upx;
			color: rgb(100, 111, 124);
		}
		.rate{
			margin-top: 20upx;
			font-size: 28upx;
			color: rgb(100, 111, 124);
			text{
				color: rgb(164, 201, 238);
			}
		}
		.progress{
			width: 70%;
			height: 8upx;
			background: #C0C0C0;
			border-radius: 8upx;
			margin-top: 20upx;
			.jindu{
				width: 70%;
				height: 100%;
				background: #16AB60;
				border-radius: 8upx;
			}
		}
	}
	.band{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		// background: orange;
		padding: 20upx 0upx;
		.band_left{
			width: 30%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			// background: blue;
			
			image{
				width: 40upx;
				height: 40upx;
				will-change: transform;
				margin-left: 20upx;
			}
			text{
				font-size: 26upx;
				color: rgb(40, 50, 60);
			}
		}
		.band_right{
			width: 30%;
			// background: red;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			text{
				display: block;
				width: 100upx;
				height: 40upx;
				line-height: 40upx;
				border-radius: 25upx;
				padding: 5upx 10upx;
				background: #FFFFFF;
				font-size: 26upx;
				border: 0upx solid #CCCCCC;
				text-align: center;
				margin-right: 20upx;
			}
		}
	}
	.dashborad{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #FFFFFF;
		.dash_item{
			flex: 1;
			// height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			// background: blue;
			padding: 20upx 0upx;
			.dash_item_content{
				width: 100%;
				height: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				// background: pink;
				text{
					&:nth-child(2){
						color: rgb(134, 134, 134);
						font-size: 25upx;
						margin-top: 15upx;
					}
				}
			}
			&:nth-child(2){
				.dash_item_content{
					// background: red;
					border-left: 2upx solid #CCCCCC;
					border-right: 2upx solid #CCCCCC;
				}
			}
		}
	}
	
	.history{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.history_field{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			background: #FFFFFF;
			padding: 15upx 0upx;
			color: rgb(140, 150, 160);
			font-size: 28upx;
			// background: blue;
			.field{
				flex: 1;
				// background: red;
				&:nth-child(1){
					text-indent: 50upx;
					// background: red;
				}
				&:nth-child(2){
					flex: 2;
					// background: pink;
					text-align: center;
				}
				&:nth-child(3){
					flex: 1;
					// background: red;
					text-align: center;
				}
				&:nth-child(4){
					flex: 1.5;
					// background: orange;
					text-align: center;
				}
			}
		}
		.history_list{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.item{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				
			}
		}
	}
}
</style>
