<template>
	<view class="container">
		<view class="top">
			<view class="item">
				<view class="left">
					<text>更新交易URL</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>竞猜帮助及规则</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>更新公告</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>竞猜特权</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>竞猜规则考试</text>
				</view>
				<view class="right">
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		
		
		
		<view class="middle">
			<view class="item">
				<view class="left">
					<text>不显示体育竞猜</text>
				</view>
				<view class="right">
					<view @click="changeOff()" :class="btnClass">
						<view :class="circleClass"></view>
					</view>
				</view>
			</view>
			
			<view class="item">
				<view class="left">
					<text>交易密码</text>
				</view>
				<view class="right">
					<view @click="jyChangeOff()" :class="jybtnClass">
						<view :class="jycircleClass"></view>
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="logo">
			<text>注：本站所有竞猜均只为休闲娱乐, 增加比赛趣味性, 所有饰品和M币均不能兑换为现金</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				on: false,
				btnClass: 'btn',
				circleClass: 'circle',
				jyon: false,
				jybtnClass: 'btn',
				jycircleClass: 'circle'
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
			},
			jyChangeOff(){
				this.jyon = !this.jyon;
				if(this.jyon){
					this.jybtnClass = 'btn on';
					this.jycircleClass = 'circle to_right';
				}else{
					this.jybtnClass = 'btn off';
					this.jycircleClass = 'circle to_left';
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
			// margin-top: 20upx;
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
		
		@keyframes jy_right {
			0% {
				left: 0%;
			}
			100% {
				left:50%;
			}
		}
		
		@keyframes jy_left {
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
			text{
				width: 95%;
				line-height: 50upx;
				font-size: 26upx;
				color: rgb(40, 50, 60);
			}
		}
	}
</style>
