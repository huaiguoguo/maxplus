<template>
	<view class="container">
		<view class="top">
			<view class="item">
				<view class="left">
					<text>当前账号</text>
				</view>
				<view class="right">
					<text>185****0892</text>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>账号全安</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>消息推送</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>个人隐私</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>黑名单管理</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		
		
		
		<view class="middle">
			<view class="item">
				<view class="left">
					<text>省流模式</text>
					<text>帖子列表图片黑认不显示</text>
				</view>
				<view class="right">
					<view @click="changeOff()" :class="btnClass">
						<view :class=" circleClass"></view>
					</view>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>清除缓存</text>
				</view>
				<view class="right">
					<text>(108MB)</text>
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
		</view>
		
		<view class="footer">
			<view class="item">
				<view class="left">
					<text>检查更新</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>评分</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>反馈</text>
				</view>
				<view class="right">
					<text>qq群: 663218636</text>
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>常见问题</text>
				</view>
				<view class="right">
					<text>Max+v4.4.10</text>
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>

		<view class="exit">
			<text>退出登录</text>
		</view>
		
		<view class="logo">
			<image src="/static/img/max+/bottom_logo.png" mode="scaleToFill"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				on: false,
				btnClass: 'btn',
				circleClass: 'circle'
			};
		},
		methods:{
			changeOff(){
				this.on = !this.on;
				if(this.on){
					this.btnClass = 'btn on';
					this.circleClass = 'circle to_right';
				}else{
					this.btnClass = 'btn off';
					this.circleClass = 'circle to_left';
				}
			}
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
		// background: red;
		
		.top,.middle,.footer, .exit{
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 20upx;
			.item{
				&:nth-child(n+2){
					border-top: 1upx solid rgb(229, 233, 237);
				}
			}
		}
		
		.item{
			width: 100%;
			height: 90upx;
			// height: auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			font-size: 25upx;
			color: #000000;
			// padding: 25upx 0upx;
			.left{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				text{
					margin-left: 30upx;
					&:nth-child(2){
						font-size: 22upx;
						color: rgb(148, 157, 166);
						margin-top: 8upx;
					}
				}
			}
			.right{
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				text{
					margin-right: 15upx;
					color: rgb(147, 156, 166);
					font-size: 23upx;
				}
				image{
					width: 15upx;
					height: 25upx;
					will-change: transform;
					margin-right: 25upx;
				}
				
				.btn{
					width: 80upx;
					height: 40upx;
					margin-right: 25upx;
					background: #FFFFFF;
					border: 2upx solid rgb(230, 230, 230);
					border-radius: 40upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					position: relative;
					.circle{
						width: 40upx;
						height: 40upx;
						border-radius: 40upx;
						background: #FFFFFF;
						box-shadow: 0upx 0upx 6upx 3upx #CCCCCC;
						position: absolute;
						left: 0;
						top: 0;
					}
					.to_right{
						animation: right 0.2s linear alternate forwards;
					}
					
					.to_left{
						animation: left 0.2s linear alternate forwards;
					}
				}
				
				.on{
					animation: changeToRightBackground 0.2s linear alternate forwards;
				}
				
				.off{
					animation: changeToLeftBackground 0.2s linear alternate forwards;
				}
			}
		}
		
		@keyframes changeToRightBackground{
			0% {
				background: #FFFFFF;
			}
			100% {
				background: #19BE6B;
			}
		}
		
		@keyframes changeToLeftBackground{
			0% {
				background: #19BE6B;
			}
			100% {
				background: #FFFFFF;
			}
		}
		
		@keyframes right {
			0% {
				left: 0%;
			}
			100% {
				left:50%;
			}
		}
		
		@keyframes left {
			0% {
				left: 50%;
			}
			100% {
				left:0%;
			}
		}
		
		.exit{
			padding: 15upx 0upx;
			font-size: 30upx;
			font-weight: 550;
		}
		
		.logo{
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-top: 50upx;
			position: absolute;
			bottom: 30upx;
			image{
				width: 100upx;
				height: 40upx;
				will-change: transform;
			}
		}
	}
</style>
