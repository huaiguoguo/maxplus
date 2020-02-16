<template>
	<view class="container">
		<view class="introduce">
			<text>
				Max+作为国内最专业的电竞数据和资讯平台，旨在为广大热爱电竞的玩家提供最新最专业的新闻资讯和攻略教学，我们尊重每一位新闻原创者的工作成果，并且会帮助原创作者更好的呈现作品和传播作品。
				
				不论你是专业出身，或仅仅只是一名深爱电竞的热血少年想要发表自己的独到见解，欢迎向我们投稿，你将有机会成为Max+专栏作者。
				
				申请/投稿邮箱：news@dotamax.com
			</text>
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

	.introduce{
		width: 95%;
		height: auto;
		background: #FFFFFF;
		padding: 50upx 50upx;
		text{
			// background: red;
			font-size: 30upx;
			color: #000000;
		}
	}
}
</style>
