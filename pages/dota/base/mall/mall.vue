<template>
	<view class="container">
		<view class="nav">
			<view @click="changeSelect(1)" class="nav_item">
				<text>全部</text>
			</view>
			<view @click="changeSelect(2)" class="nav_item">
				<text>价格</text>
				<image v-show="price_pic_show" :src="price_pic" mode="scaleToFill"></image>
			</view>
			<view @click="changeSelect(3)" class="nav_item">
				<text>销量</text>
				<image v-if="salevolume_pic_show" :src="salevolume_pic" mode="scaleToFill"></image>
			</view>
			<view @click="changeSelect(4)" class="nav_item">
				<text>筛选</text>
				<image v-if="select_pic_show" :src="select_pic" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="list">
			<view class="list_nav">
				<view class="list_nav_left">
					<text>可用M币:<text>20</text></text>
					<image src="/static/img/max+/mcoin_big.png" mode="scaleToFill"></image>
				</view>
				<view class="list_nav_right">
					<text>兑换记录</text>
				</view>
			</view>
			<view class="list_content">
				<view v-for="(item,index) in [1,2,3,4,5,6, 7, 8, 9, 10, 11]" :key="index" class="list_content_item">
					<view class="rate">
						<text>-20%</text>
					</view>
					<view class="pic">
						<image src="/static/img/max+/diy_picker3.png" mode="scaleToFill"></image>
					</view>
					<text class="title">标题</text>
					<text class="mcoin">25000 M币</text>
				</view>
			</view>
		</view>
		
		
		
		
		<view v-show="select_index == 4" :class="[select_index == 4?'select_options select_active':'select_options']">
			
			<view class="cancel_confirm">
				<text>取消</text>
				<text>确定</text>
			</view>
			
			<view class="select_title">
				<text>稀有度</text>
			</view>
			<view class="select_rarity">
				<view v-for="(item, index) in [1,2,3,4,5, 6, 7 ,8, 9]" :key="index" class="rarity_item">
					<text>全部</text>
				</view>
			</view>
			
			<view class="select_title">
				<text>类型</text>
			</view>
			<view class="select_rarity">
				<view v-for="(item, index) in [1,2,3,4,5, 6, 7 ,8, 9]" :key="index" class="rarity_item">
					<text>全部</text>
				</view>
			</view>
			
			<view class="select_title">
				<text>类型</text>
			</view>
			
			
			<view class="pic_content">
				<view class="pic_title">
					<image src="/static/img/max+/overviewicon_str.png" mode="scaleToFill"></image>
					<text>力量英雄</text>
				</view>
				<view class="pic_list">
					<view v-for="(item, index) in [1,2,3,,4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14]" :key="index" class="list_item">
						<image src="/static/img/max+/antimage_hphover.png" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
			
			
			<view class="pic_content">
				<view class="pic_title">
					<image src="/static/img/max+/overviewicon_str.png" mode="scaleToFill"></image>
					<text>欧捷英雄</text>
				</view>
				<view class="pic_list">
					<view v-for="(item, index) in [1,2,3,,4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14]" :key="index" class="list_item">
						<image src="/static/img/max+/antimage_hphover.png" mode="scaleToFill"></image>
					</view>
				</view>
			</view>
			
			<view class="pic_content">
				<view class="pic_title">
					<image src="/static/img/max+/overviewicon_str.png" mode="scaleToFill"></image>
					<text>智力英雄</text>
				</view>
				<view class="pic_list">
					<view v-for="(item, index) in [1,2,3,,4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14]" :key="index" class="list_item">
						<image src="/static/img/max+/antimage_hphover.png" mode="scaleToFill"></image>
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
				select_index: 1,
				
				price_pic: '/static/img/max+/ic_sort_down.png',
				price_pic_show: false,
				price_is_down: false,
				
				salevolume_pic: '/static/img/max+/ic_sort_down.png',
				salevolume_pic_show: false,
				salevolume_is_down: false,
				
				select_pic: '/static/img/max+/ic_sort_down.png',
				select_pic_show: false,
				select_is_down: false,
				
				up_pic: '/static/img/max+/ic_sort_up.png',
				down_pic: '/static/img/max+/ic_sort_down.png'
			};
		},
		methods:{
			changeSelect(index){
				if(index == 1){
					
					this.select_index = 1;
					
					this.price_pic = this.down_pic;
					this.price_pic_show = false;
					this.price_down = false;
					
					this.salevolume_pic = this.down_pic;
					this.salevolume_pic_show = false;
					this.salevolume_down = false;
					
					this.select_pic = this.down_pic;
					this.select_pic_show = false;
					this.select_down = false;
					
				}else if(index == 2){
					this.price_pic_show = true;
					if(this.select_index == index){
						if(this.price_down){
							this.price_pic = this.down_pic;
						}else{
							this.price_pic = this.up_pic;
						}
						this.price_down = !this.price_down;
					}
					this.select_index = index;
					
					
					this.salevolume_pic = this.down_pic;
					this.salevolume_pic_show = false;
					this.salevolume_is_down = false;
					
					this.select_pic = this.down_pic;
					this.select_pic_show = false;
					this.select_down = false;
					
					
				}else if(index == 3){


					this.price_pic = this.down_pic;
					this.price_pic_show = false;
					this.price_down = true;

					this.salevolume_pic_show = true;
					if(this.select_index == index){
						if(this.salevolume_down){
							this.salevolume_pic = this.down_pic;
						}else{
							this.salevolume_pic = this.up_pic;
						}
						this.salevolume_down = !this.salevolume_down;
					}
					this.select_index = index;
					
					
					this.select_pic = this.down_pic;
					this.select_pic_show = false;
					this.select_down = false;


				}else if(index == 4){
					this.price_pic = this.down_pic;
					this.price_pic_show = false;
					this.price_down = true;
					
					this.salevolume_pic = this.down_pic;
					this.salevolume_pic_show = false;
					this.salevolume_down = true;

					this.select_pic_show = true;
					if(this.select_index == index){
						if(this.select_down){
							this.select_pic = this.down_pic;
						}else{
							this.select_pic = this.up_pic;
						}
						this.select_down = !this.select_down;
					}
					this.select_index = index;
					
				}
			},
		}
	}
</script>

<style lang="less">
*{
	margin: 0;
	padding: 0;
}
page{
	background: rgb(225, 230, 235);
}
.container{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	// position: relative;
	.nav{
		width: 100%;
		height: 80upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		box-shadow: 0upx 0upx 30upx 5upx #CCCCCC;
		
		position: fixed;
		top: 10;
		left: 0;
		z-index: 9;
		
		.nav_item{
			width: 23%;
			height: 30upx;
			// background: red;
			border-right: 1upx solid #CCCCCC;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			&:last-child{
				border-right: 0upx solid #CCCCCC;
			}
			text{
				font-size: 25upx;
				color: #000000
			}
			image{
				width: 20upx;
				height: 10upx;
				will-change: transform;
				margin-left: 10upx;
			}
		}
	}
	.list{
		margin-top: 85upx;
		// background: red;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		.list_nav{
			width: 100%;
			height: 100%;
			padding: 20upx 0upx;
			// background: red;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.list_nav_left{
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				// background: blue;
				text{
					margin-left: 20upx;
					font-size: 23upx;
					color: rgb(140, 150, 160);
					text{
						color: orange;
						font-size: 25upx;
						font-weight: 550;
					}
				}
				image{
					width: 30upx;
					height: 30upx;
					will-change: transform;
				}
			}
			.list_nav_right{
				padding: 10upx 25upx;
				margin-right: 20upx;
				background: #FFFFFF;
				// color: orange;
				border-radius: 30upx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				font-size: 23upx;
			}
		}
	
	
		.list_content{
			width: auto;
			height: 100%;
			padding: 0upx 10upx;
			// background: blue;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			align-content: flex-start;
			.list_content_item{
				width: 49.2%;
				height: auto;
				// background: orange;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
				&:nth-child(n+3){
					margin-top: 15upx;
				}
				
				
				
				.rate{
					width: 100upx;
					height: 35upx;
					line-height: 35upx;
					padding: 5upx 0upx;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					background: rgb(248, 51, 13);
					font-size: 23upx;
					color: #FFFFFF;
					text-align: center;
				}
				
				.pic{
					width: 100%;
					// height: auto;
					// background: url('/static/img/max+/diy_picker3.png') no-repeat;
					// background-size: 100% 100%;
					// background-size: cover;
					image{
						width: 100%;
						height: 250upx;
						will-change: transform;
					}
					
				}
				
				text{
					text-align: center;
				}
				.title{
					width: 100%;
					padding: 5upx 0upx;
					background: #000000;
					font-size: 25upx;
					color: #FFFFFF;
					position: absolute;
					bottom: 50upx;
				}
				.mcoin{
					width: 100%;
					padding: 10upx 0upx;
					background: #FFFFFF;
					color: orange;
					font-size: 25upx;
					font-weight: 550;
				}
				
			}
		}
	
	}


	.select_options{
		width: 100%;
		height: 100%;
		background: rgb(241, 242, 243);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		overflow: auto;
		
		position: fixed;
		top: 10%;
		// bottom: 0%;
		// left: 0%;
		right:0%;
		z-index: 99999;
		
		.cancel_confirm{
			width: 100%;
			height: 50upx;
			will-change: transform;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;
			box-shadow: 5upx 10upx 10upx 5upx #CCCCCC;
			font-size: 25upx;
			color: #000000;
			padding: 25upx 0upx;
			
			// position: absolute;
			// top: 5;
			// left: 0;
			// z-index: 10;
			
			text{
				&:nth-child(1){
					margin-left: 20upx;
				}
				&:nth-child(2){
					margin-right: 20upx;
				}
			}
		}
		
		.select_title{
			// margin-top: 50upx;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			background: #CCCCCC;
			padding: 20upx 0upx;
			text{
				font-size: 25upx;
				color: #2C405A;
				margin-left: 20upx;
			}
		}
		
		.select_rarity{
			width: 100%;
			// height: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			margin: 0upx 0upx;
			padding: 10upx 0upx;
			.rarity_item{
				width: 17%;
				background: rgb(58, 73, 90);
				height: auto;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				border-radius: 30upx;
				padding: 10upx 0upx;
				margin: 10upx 12upx;
				text{
					// width: 50upx;
					// height: 30upx;
					line-height: 30upx;
					// background: yellow;
					
					font-size: 28upx;
					color: #FFFFFF;
					// background: #0FAEFF;
					text-align: center;
				}
			}
		}
		
		.pic_content{
			width: 100%;
			height: auto;
			margin-top: 0upx;
			background: #FFFFFF;
			.pic_title{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				padding: 20upx 10upx;
				image{
					width: 30upx;
					height: 30upx;
					will-change: transform;
				}
				text{
					font-size: 25upx;
					color: #2C405A;
					margin-left: 10upx;
				}
			}
			.pic_list{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				.list_item{
					// background: #126F93;
					width: 20%;
					height: atuo;
					image{
						width: 140upx;
						height: 100upx;
						will-change: transform;
					}
				}
			}
		}

	}


	// .select_active{
	// 	animation: cloud 40s linear infinite;
	// }
	
	@keyframes cloud{
		from{
			right:100%
		}
		
		to{
			right:0%
		}
	}

}
</style>
