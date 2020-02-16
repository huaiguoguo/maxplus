<template>
	<view class="container">
		<view class="band">
			<image src="/static/img/max+/band_icon_topic.png" mode="scaleToFill"></image>
			<text>专题列表</text>
		</view>
		<view class="list">
			<view @click="redirect()" v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13]" :key="index" class="item">
				<view class="item_img">
					<image src="/static/img/max+/skill_default_ow.png" mode="scaleToFill"></image>
				</view>
				<view class="item_info">
					<view class="title">
						<text>Weplay! 布克维Minor</text>
					</view>
					<view class="info">
						<text>38篇新闻</text>
						<text>2小时前</text>
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
					url: '/pages/dota/discover/thematiclist/thematicdetail/thematicdetail'
				})
			}
		}
	}
</script>

<style lang="less">
page{
	padding: 0;
	margin: 0;
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
		justify-content: flex-start;
		align-items: center;
		background: rgb(225, 230, 235);
		image{
			width: 40upx;
			height: 40upx;
			will-change: transform;
			margin-left: 20upx;
		}
		text{
			font-size: 25upx;
			margin-left: 10upx;
		}
	}
	.list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.item{
			width: 49.5%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;
			&:nth-child(n+3){
				margin-top: 8upx;
			}
			.item_img{
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				image{
					width: 100%;
					height: 250upx;
					will-change: transform;
				}
			}
			.item_info{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				// background: red;
				padding: 10upx 0upx;
				.title{
					width: 100%;
					height: 50upx;
					color: #000000;
					font-size: 30upx;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					text{
						font-size: 28upx;
						text-indent: 20upx;
					}
				}
				.info{
					width: 90%;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					text{
						font-size: 22upx;
						color: #BCBCBC;
					}
				}
			}
		}
	}
}
</style>
