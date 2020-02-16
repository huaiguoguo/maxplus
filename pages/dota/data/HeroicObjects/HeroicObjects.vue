<template>
	<view class="container">
		<view class="navigate">
			<view @click="active = 1" class="nav_item">
				<text>英雄</text>
				<view class="arrow">
					<view v-show="active==1" class="arrow_a"></view>
				</view>
			</view>
			<view @click="active = 2" class="nav_item">
				<text>物品</text>
				<view class="arrow">
					<view v-show="active==2" class="arrow_a"></view>
				</view>
			</view>
		</view>
		<view class="hero_select">
			<view @click="hero_select = 1" class="hero_select_item hero_select_country">
				<view class="select_item_first">
					<text>全球</text>
					<image src="/static/img/max+/hero_list_down.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="hero_select = 2" class="hero_select_item hero_select_week">
				<view class="select_item_first">
					<text>本月</text>
					<image src="/static/img/max+/hero_list_down.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="hero_select = 3" class="hero_select_item hero_select_type">
				<view class="select_item_first">
					<text>全部</text>
					<image src="/static/img/max+/hero_list_down.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="hero_select = 4" class="hero_select_item hero_select_professional_match">
				<view class="select_item_first">
					<text>全部</text>
					<image src="/static/img/max+/hero_list_down.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="hero_child">
			<view v-show="hero_select == 1" class="hero_child_item country">
				<view class="country_title hero_selects">
					<text class="active">全球</text>
					<text>中国</text>
					<text>国外</text>
				</view>
				<view class="mask"></view>
			</view>
			<view v-show="hero_select == 2" class="hero_child_item week">
				<view class="week_title hero_selects">
					<text class="active">本月</text>
					<text>全部</text>
					<text>本周</text>
				</view>
				<view class="mask"></view>
			</view>
			<view v-show="hero_select == 3" class="hero_child_item type">
				<view class="type_title hero_selects">
					<text class="active">全部</text>
					<text>力量型</text>
					<text>敏捷型</text>
					<text>智力型</text>
					<span></span>
					<span></span>
				</view>
				<view class="mask"></view>
			</view>
			<view v-show="hero_select == 4" class="hero_child_item professional">
				<view class="professional_title hero_selects">
					<text class="active">全部分段</text>
					<text>职业比赛</text>
					<text>Very High</text>
					<text>High</text>
					<text>Normal</text>
					<span></span>
				</view>
				<view class="mask"></view>
			</view>
		</view>
		
		<view class="band">
			<image src="/static/img/max+/band_icon_teammate.png" mode="scaleToFill"></image>
			<text>英雄列表</text>
		</view>
		<view class="content">
			<view v-show="active == 1" class="hero_list">
				<view class="item_left">
					<view class="item_left_field">
						<text>英雄</text>
					</view>
					<view class="item_left_list">
						<view v-for="(item,index) in [1,2,3,4,5]" :key="'hero_'+index" class="hero">
							<image src="/static/img/max+/antimage_hphover.png" mode="scaleToFill"></image>
							<text>帕吉</text>
						</view>
					</view>
				</view>
				<view class="item_right">
					<view class="item_right_field">
						<view class="field_text">
							<text>场次</text>
							<text>胜率</text>
							<text>KDA</text>
							<text>场均击杀</text>
							<text>场均死亡</text>
							<text>场均救助</text>
							<text>场均GPM</text>
							<text>场均XPM</text>
							<text>场均正补</text>
							<text>场均反补</text>
							<text>场均伤害</text>
							<text>场均治疗</text>
							<text>场均建筑伤害</text>
						</view>
					</view>
					<view class="item_right_list">
						<view v-for="(item,index) in [1,2,3,4,5]" :key="'hero_info_'+index" class="hero_info">
							<text>932万</text>
							<text>51.8%</text>
							<text>2.50</text>
							<text>7.7</text>
							<text>9.2</text>
							<text>15.3</text>
							<text>391.56</text>
							<text>562.25</text>
							<text>24.92</text>
							<text>6.05</text>
							<text>542.08</text>
							<text>4.50</text>
							<text>26.35</text>
						</view>
					</view>
				</view>
			</view>
			
			<view v-show="active == 2" class="object_list">
				<view class="object_nav">
					<text>物品</text>
					<text>胜率</text>
					<text>场次</text>
				</view>
				<view class="object_content">
					<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]" :key="index" class="object_list_content_item">
						<view class="userinfo">
							<image src="/static/img/max+/antimage_hphover.png" mode="scaleToFill"></image>
							<text>圣剑</text>
						</view>
						<view class="rateinfo">
							<view class="rate">
								<text>88.6%</text>
							</view>
							<view class="progress">
								<view class="jindu"></view>
							</view>
						</view>
						<view class="times">
							<text>912万</text>
						</view>
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
				active: 1,
				hero_select: 1
			};
		}
	}
</script>


<style lang="less">
	page{
		padding: 0upx;
		margin: 0upx;
		background: rgb(225, 230, 235);
	}

	.container{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.navigate{
			width: 100%;
			height: 70upx;
			background: rgb(20, 25, 30);
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			color: #FFFFFF;
			position: fixed;
			top: 88upx;
			z-index: 9;
			.nav_item{
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: center;
				text{
					font-size: 28upx;
				}
				.arrow{
					width: 15upx;
					height: 15upx;
					margin-top: 5upx;
					.arrow_a{
						width: 0upx;
						height: 0upx;
						// background: rgb(255, 255, 255, 200);
						// border-top: 20upx solid #000000; //transparent
						border-right: 15upx solid transparent;
						border-left: 15upx solid transparent;
						border-bottom: 15upx solid rgb(255, 255, 255 , 100);
						position: absolute;
						bottom: 0upx;
					}
				}
			}
		}

		.hero_select{
			width: 100%;
			height: 50upx;
			padding: 12upx 0upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;
			margin-top: 67upx;
			.hero_select_item{
				width: 25%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				
				.select_item_first{
					width: 100%;
					// background: red;
					text-align: center;
					
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					
					text{
						display: block;
						width: 40%;
						// background: blue;
						// border-right: 1upx solid #ccc;
						font-size: 25upx;
					}
					
					
					
					image{
						width: 25upx;
						height: 15upx;
						will-change: transform;
					}
				}
				
				
				// &:nth-child(1),&:nth-child(2),&:nth-child(3){
				// 	border-right: 1upx solid rgb(232, 232, 232);
				// }
				
			}
		}
		
		.hero_child{
			width: 100%;
			height: auto;
			position: fixed;
			top: 0upx;
			background: #FFFFFF;
			z-index: 999;
			.hero_child_item{
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: blue;
				position: relative;
				
				.hero_selects{
					width: 100%;
					height: auto;
					padding: 5upx 0upx;
					background: rgb(242, 242, 242);
					
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: space-around;
					align-items: center;
					
					text{
						display: block;
						width: 28%;
						padding: 15upx 5upx;
						color: black;
						background: rgb(225, 230, 235);
						text-align: center;
						border-radius: 50upx;
						font-size: 25upx;
						margin: 10upx 3upx;
						
					}
					
					span{
						display: block;
						width: 28%;
					}
					
					.active{
						background: #000000;
						color: #FFFFFF;
					}
				}
				
				.mask{
					// width: 100%;
					// position: fixed;
					// background: orange;
					// top: 20%;
					// left: 0upx;
					// bottom: 0upx;
					// right: 0upx;
					// z-index: 9999;
				}
			}
		}
		
		
		.band{
			width: 100%;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			
			image{
				width: 45upx;
				height: 45upx;
				will-change: transform;
				// background-color: red;
			}
			
			text{
				font-size: 28upx;
				color: #000000;
				// background-color: blue;
			}
		}
		
		
		
		
		//代码在这里
		.content{
			width: 100%;
			height: 100%;
			
			//这个列表
			.hero_list{
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.item_left{
					flex: 1;
					height: auto;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.item_left_field{
						width: 100%;
						text{
							display: block;
							// width: 150upx;
							font-size: 25upx;
							color: #000000;
						}
					}
					.item_left_list{
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.hero{
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							image{
								width: 60upx;
								height: 40upx;
								will-change: transform;
							}
							text{
								font-size: 25upx;
								color: #000000;
							}
						}
					}
				}
				.item_right{
					flex: 2;
					height: auto;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					overflow: auto;
					.item_right_field{
						width: 100%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						.field_text{
							width: auto;
							height: 50upx;
							background: red;
							margin-top: 15upx;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							text{
								display: block;
								width: 150upx;
								font-size: 25upx;
								color: #000000;
								// background: orange;
							}
						}
						
					}
					.item_right_list{
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.hero_info{
							width: auto;
							height: 50upx;
							background: red;
							margin-top: 15upx;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							// overflow: auto;
							text{
								display: block;
								font-size: 15upx;
								width: 100upx;
							}
						}
					}
				}
			}
			
			
			
			.object_list{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.object_nav{
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					text{
						width: 33%;
						height: 100%;
						font-size: 25upx;
						color: #BCBCBC;
						// background: blue;
						text-align: center;
						&:nth-child(2){
							text-align: left;
							text-indent: 30upx;
							color: #000000;
						}
					}
				}
				.object_content{
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.object_list_content_item{
						width: 100%;
						height: 120upx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						&:nth-child(n+2){
							border-top: 1upx solid #C0C0C0;
						}
						.userinfo{
							width: 35%;
							height: 100%;
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							// background: red;
							image{
								width: 120upx;
								height: 70upx;
								will-change: transform;
								padding-left: 20upx;
							}
							text{
								// width: 100%;
								// background: blue;
								font-size: 28upx;
								color: #000000;
								text-align: center;
								padding-left: 10upx;
							}
						}
						.rateinfo{
							width: 45%;
							height: 30%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-start;
							// background: orange;
							.rate{
								width: 100%;
								height: 100%;
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								align-items: center;
								text{
									font-size: 28upx;
									color: #000000;
								}
							}
							.progress{
								width: 100%;
								height: 10upx;
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								align-items: center;
								background: rgb(225, 235, 230);
								border-radius: 10upx;
								.jindu{
									width: 50%;
									height: 100%;
									background:#16AB60;
									border-radius: 10upx;
								}
							}
						}
						.times{
							width: 15%;
							height: 100%;
							display: flex;
							flex-direction: row;
							justify-content: flex-end;
							align-items: center;
							// background: pink;
							text{
								font-size: 28upx;
								color: rgb(140, 150, 160);
								// margin-right: 20upx;
								// background: red;
							}
						}
					}
				}
			}
		}
		
	
	}
</style>
