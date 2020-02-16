<template>
	<view class="container">
		
		<view class="navigate">
			<view @click="head_nav_active = 1" :class="[head_nav_active==1?'nav_item active':'nav_item']">
				<text>赛事新闻</text>
				<view class="arrow">
					<view v-show="head_nav_active==1" class="arrow_a"></view>
				</view>
			</view>
			<view @click="head_nav_active = 2" :class="[head_nav_active==2?'nav_item active':'nav_item']">
				<text>赛程</text>
				<view class="arrow">
					<view v-show="head_nav_active==2" class="arrow_a"></view>
				</view>
			</view>
			<view @click="head_nav_active = 3" :class="[head_nav_active==3?'nav_item active':'nav_item']">
				<text>赛事信息</text>
				<view class="arrow">
					<view v-show="head_nav_active==3" class="arrow_a"></view>
				</view>
			</view>
			<view @click="head_nav_active = 4" :class="[head_nav_active==4?'nav_item active':'nav_item']">
				<text>赛事数据</text>
				<view class="arrow">
					<view v-show="head_nav_active==4" class="arrow_a"></view>
				</view>
			</view>
		</view>
		
		<view v-show="head_nav_active==1" class="news">
			
			<view class="head">
				<view class="head_img">
					<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
				</view>
				<view class="head_content">
					<text class="introduction">这个冬季, 布克维Mintor与你一起过冬</text>
					<view class="nav">
						
						<view class="total">
							<text>40篇新闻</text>
						</view>
						
						<view class="looks">
							<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
							<text>1325394</text>
						</view>
						
					</view>
				</view>
			</view>

			<view class="list">
				
				<view class="list_nav">
					<view @click="active=1" :class="[active==1?'list_nav_item nav_all active':'list_nav_item nav_all']">
						<text>全部</text>
					</view>
					<view @click="active=2" :class="[active==2?'list_nav_item nav_news active':'list_nav_item nav_news']">
						<text>新闻</text>
					</view>
					<view @click="active=3" :class="[active==3?'list_nav_item nav_video active':'list_nav_item nav_video']">
						<text>视频</text>
					</view>
				</view>
				
				<view v-show="active == 1" class="list_item all">
					<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="'all_'+index" class="item">
						<view class="item_left">
							<view class="item_left_img">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							</view>
							<!-- <view class="item_left_content">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
								<text>鬼影会议室</text>
							</view> -->
						</view>
						<view class="item_right">
							<view class="title">
								<text>acitve=1 布克维Mintor: 魔王降临, 永不言败! RNG</text>
							</view>
							<view class="abstract">
								<text>2-1 击败GeeK Fam杀入决赛</text>
							</view>
							<view class="time_total">
								<view class="time">
									<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
									<text>7小时前</text>
								</view>
								<view class="total">
									<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
									<text>12556</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view v-show="active == 2" class="list_item news">
					<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="'news_'+index" class="item">
						<view class="item_left">
							<view class="item_left_img">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							</view>
							<!-- <view class="item_left_content">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
								<text>鬼影会议室</text>
							</view> -->
						</view>
						<view class="item_right">
							<view class="title">
								<text>acitve=2 布克维Mintor: 魔王降临, 永不言败! RNG</text>
							</view>
							<view class="abstract">
								<text>2-1 击败GeeK Fam杀入决赛</text>
							</view>
							<view class="time_total">
								<view class="time">
									<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
									<text>7小时前</text>
								</view>
								<view class="total">
									<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
									<text>12556</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view v-show="active == 3" class="list_item video">
					<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="'video_'+index" class="item">
						<view class="item_left">
							<view class="item_left_img">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							</view>
							<!-- <view class="item_left_content">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
								<text>鬼影会议室</text>
							</view> -->
						</view>
						<view class="item_right">
							<view class="title">
								<text>acitve=3 布克维Mintor: 魔王降临, 永不言败! RNG</text>
							</view>
							<view class="abstract">
								<text>2-1 击败GeeK Fam杀入决赛</text>
							</view>
							<view class="time_total">
								<view class="time">
									<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
									<text>7小时前</text>
								</view>
								<view class="total">
									<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
									<text>12556</text>
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
				
		</view>
		
		<view v-show="head_nav_active==2" class="schedule">
			<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" class="schedule_content">
				<view class="band">
					<view class="band_left">
						<!-- <image src="/static/img/max+/band_icon_follow_player.png" mode="scaleToFill"></image> -->
						<text>11月1日</text>
						<text class="point"></text>
						<text>线下赛</text>
					</view>
					<!-- <view class="band_right">
						<text @click="redirectApply()">成为作者</text>
					</view> -->
				</view>
				<view class="schedule_list">
					<view v-for="(item, index) in [1,2,3,4]" :key="'child_item_'+index" class="child_item">
						<view class="time">
							<text>08:12</text>
						</view>
						<view class="country_one">
							<text>TSpirit</text>
							<image src="/static/img/max+/PH.png" mode="scaleToFill"></image>
						</view>
						
						<view class="rate">
							<text class="rate_one">2</text>
							<text class="rate_colon">:</text>
							<text class="rate_two">0</text>
						</view>
						
						<view class="country_two">
							<image src="/static/img/max+/PH.png" mode="scaleToFill"></image>
							<text>Nip</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view v-show="head_nav_active == 4" class="eventData">
			<view class="select">
				<view class="select_body">
					
				</view>
			</view>
			
			<view class="band">
				<view class="band_left">
					<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
					<text>选手表现</text>
				</view>
				<!-- <view class="band_right">
					<text @click="redirectApply()">成为作者</text>
				</view> -->
			</view>
			
			<view class="performance_content">
				<view class="player">
					<view class="player_item">
						<text>Mirachle-</text>
						<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
						<text>34314.1</text>
						<text>场均伤害量</text>
					</view>
				</view>
				
				<view class="performance_nav">
					<view class="performance_nav_field"><text>全部</text></view>
					<view class="performance_nav_field"><text>1号位</text></view>
					<view class="performance_nav_field"><text>2号位</text></view>
					<view class="performance_nav_field"><text>3号位</text></view>
					<view class="performance_nav_field"><text>辅助</text></view>
				</view>
				
				<view class="performance_list">
					<view class="performance_list_left">
						<view class="performance_list_left_nav">
							<text>排名</text>
							<text>选手</text>
						</view>
						<view v-for="(item, index) in [1,2,3,4,5]" :key="'left_'+index" class="performance_list_left_list">
							<text>1</text>
							<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							<text>Raven</text>
						</view>
					</view>
					<view class="performance_list_right">
						<view class="performance_list_right_nav">
							<view class="field"><text>场均KDA</text></view>
							<view class="field"><text>输出经济比</text></view>
							<view class="field"><text>伤害量</text></view>
							<view class="field"><text>场均击杀</text></view>
							<view class="field"><text>承受伤害</text></view>
							<view class="field"><text>10分钟正反补</text></view>
							<view class="field"><text>10分钟节奏</text></view>
							<view class="field"><text>场均插眼</text></view>
							<view class="field"><text>场均反眼</text></view>
							<view class="field"><text>平均守卫持续时间</text></view>
							<view class="field"><text>使用英雄</text></view>
						</view>
						<view v-for="(item, index) in [1,2,3,4,5]" :key="'right_'+index" class="performance_list_right_list">
							<view class="value"><text>12.7</text></view>
							<view class="value"><text>1.37</text></view>
							<view class="value"><text>31992</text></view>
							<view class="value"><text>5.9</text></view>
							<view class="value"><text>0</text></view>
							<view class="value"><text>0.00</text></view>
							<view class="value"><text>0.00</text></view>
							<view class="value"><text>0.00</text></view>
							<view class="value"><text>0.00</text></view>
							<view class="value"><text>0.00</text></view>
							<view class="value"><text>8</text></view>
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
				head_nav_active:1,
				active: 1,
				sechedule: [
						{
							'date': '1月9日', 
							'type':'预选赛', 
							'item':[
								{
									'time': '08:01',
									'country':'G-pride',
									'country_pic':'/static/img/max+/'
								},
							],
						},
					]
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
	background: rgb(225, 230, 235);
	position: relative;
	
	
	.navigate {
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
		left: 0upx;
		z-index: 9;
	
		.nav_item {
			width: 50%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
	
			text {
				font-size: 28upx;
				color: rgb(88, 98, 110);
			}
			.active{
				color: #FFFFFF;
			}
	
			.arrow {
				width: 15upx;
				height: 15upx;
				margin-top: 5upx;
	
				.arrow_a {
					width: 0upx;
					height: 0upx;
					// background: rgb(255, 255, 255, 200);
					// border-top: 20upx solid #000000; //transparent
					border-right: 15upx solid transparent;
					border-left: 15upx solid transparent;
					border-bottom: 15upx solid rgb(255, 255, 255, 0.5);
					// position: absolute;
					// bottom: 0upx;
				}
			}
		}
	}
				
	
	.news{
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
			position: relative;
			.head_img{
				width: 100%;
				height: 100%;
				overflow: hidden;
				// background: rgb(0, 0, 0, 0.8);
				image{
					width: 100%;
					height: 450upx;
					will-change: transform;
					// filter: blur(15upx);
				}
			}
			.head_content{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: center;
				background: rgba(0,0,0,0.3);
				
				position: absolute;
				top: 0upx;
				left: 0upx;
				bottom: 0upx;
				
				.introduction{
					font-size: 30upx;
					font-weight: 550;
					color: #FFFFFF;
					margin-top: 20upx;
				}
				.nav{
					width: 100%;
					height: 100upx;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					// margin-top: 30upx;
					// background: red;
					.total{
						width: 20%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						border-right: 1upx solid #CCCCCC;
						// background: pink;
						text{
							font-size: 25upx;
							color: rgb(173, 182, 191);
						}
					}
					.looks{
						width: 20%;
						display: flex;
						flex-direction: row;
						justify-content: flex-end;
						align-items: center;
						// background: blue;
						image{
							width: 30upx;
							height: 20upx;
							will-change: transform;
						}
						text{
							// width: 100%;
							font-size: 25upx;
							color: rgb(173, 182, 191);
							text-align: center;
							// background: orange;
						}
					}
		
				}
			}			
		}
		.list{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			// margin-top: 20upx;
			.list_nav{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				
				background: rgb(247, 248, 249);
				.list_nav_item{
					width: 33%;
					height: 100%;
					padding: 20upx 0upx;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					background: rgb(247, 248, 249);
					text{
						width: 33%;
						height: 100%;
						font-size: 26upx;
						color: rgb(40, 50, 60);
						text-align: center;
						// background: red;
					}
				}
		
				.active{
					font-size: 26upx;
					color: #000000;
					text-align: center;
					background: #FFFFFF;
				}
			}
			.list_item{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.item{
					width: 100%;
					height: 100%;
					background: #FFFFFF;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					&:nth-child(n+2){
						margin-top: 5upx;
					}
					.item_left{
						width: 35%;
						height: 100%;
						
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						// position: relative;
						// background: red;
						.item_left_img{
							width: 100%;
							height: 100%;
							// background: blue;
							// overflow: hidden;
							image{
								width: 100%;
								height: 160upx;
								will-change: transform;
								// filter: blur(15upx);
							}
						}
						.item_left_content{
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							position: absolute;
							top: 0upx;
							left: 0upx;
							image{
								width: 80upx;
								height: 80upx;
								will-change: transform;
								border-radius: 80upx;
							}
							text{
								font-size: 30upx;
								color: #FFFFFF;
								margin-top: 20upx;
								font-size: 25upx;
							}
						}
				
					}
					.item_right{
						width: 70%;
						height: 100%;
						// margin-left: 10upx;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: space-between;
						padding: 20upx;
						.title{
							width: 100%;
							height: 30%;
							text{
								font-size: 25upx;
								color: #000000;
								font-weight: 550;
							}
						}
						.abstract{
							width: 100%;
							height: 30%;
							text{
								font-size: 25upx;
								color: #000000;
								font-weight: 550;
							}
						}
						.time_total{
							width: 100%;
							height: 30%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							.time{
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
								image{
									width: 25upx;
									height: 25upx;
									will-change: transform;
								}
								text{
									font-size: 23upx;
									color: #BCBCBC;
								}
							}
							.total{
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
								image{
									width: 30upx;
									height: 20upx;
									will-change: transform;
								}
								text{
									font-size: 23upx;
									color: #BCBCBC;
								}
							}
						}
					}
				}
					
			}
		}
	}
	
	.schedule{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 70upx;
		
		.schedule_content{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		
			.band{
				width: 100%;
				height: 100upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				// background: orange;
				
				.band_left{
					width: 50%;
					height: 100%;
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
						font-size: 28upx;
						margin-left: 10upx;
						color: rgb(40, 50, 60);
						&:nth-child(4){
							color: rgb(141, 151, 161);
						}
					}
					.point{
						width: 5upx;
						height: 5upx;
						border-radius: 5upx;
						background: rgb(145, 155,164);
					}
				}
				.band_right{
					width: 20%;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					text{
						font-size: 25upx;
						color: #C0C0C0;
						border-radius: 25upx;
						border: 1upx solid #C0C0C0;
						padding: 8upx 12upx;
						background: #FFFFFF;
					}
				}
			}
			
			.schedule_list{
				width: 100%;
				height: 100%;
				background: rgb(225, 230, 235);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #FFFFFF;
				.child_item{
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						padding: 20upx 0upx;
						&:nth-child(n+2){
							border-top: 1upx solid rgb(230, 234, 238);
						}
						.time{
							width: 20%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							// background: red;
							text{
								font-size: 28upx;
								text-align: center;
								color: rgb(145, 155, 164);
							}
						}
						.country_one{
							width: 30%;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							// background: blue;
							text{
								font-size: 30upx;
								font-weight: 550;
							}
							image{
								width: 40upx;
								height: 30upx;
								will-change: transform;
								margin-left: 20upx;
							}
							
						}
						.rate{
							width: 20%;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							// background: pink;
							.rate_one{
								font-size: 30upx;
								font-weight: 550;
								color: #00B26A;
							}
							.rate_colon{
								font-size: 35upx;
								color: rgb(145, 155, 164);
								margin: 0upx 5upx;
							}
							.rate_two{
								font-size: 30upx;
								font-weight: 550;
								color: rgb(145, 155, 164);
							}
						}
						.country_two{
							width: 30%;
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							// background: #007AFF;
							image{
								width: 40upx;
								height: 30upx;
								will-change: transform;
							}
							text{
								font-size: 30upx;
								font-weight: 550;
								text-align: left;
								margin-left: 20upx;
							}
						}
					}
				
			
			}
		
		}
	}


	.eventData{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.select{
			width: 20%;
			height: 100upx;
			.select_body{
				
			}
		}

		.band{
			width: 100%;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			// background: orange;
			
			.band_left{
				width: 50%;
				height: 100%;
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
					font-size: 28upx;
					margin-left: 10upx;
					color: rgb(40, 50, 60);
					&:nth-child(4){
						color: rgb(141, 151, 161);
					}
				}
				.point{
					width: 5upx;
					height: 5upx;
					border-radius: 5upx;
					background: rgb(145, 155,164);
				}
			}
			.band_right{
				width: 20%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				text{
					font-size: 25upx;
					color: #C0C0C0;
					border-radius: 25upx;
					border: 1upx solid #C0C0C0;
					padding: 8upx 12upx;
					background: #FFFFFF;
				}
			}
		}
		
		.performance_content{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.player{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.player_item{
					width: 25%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text{
						font-size: 25upx;
					}
					image{
						width: 45upx;
						height: 45upx;
						will-change: transform;
						border-radius: 45upx;
					}
					text{
						
					}
				}
			}
			.performance_nav{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				// background: red;
				margin: 20upx 0upx;
				.performance_nav_field{
					width: 20%;
					// background: blue;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					text{
						white-space: nowrap;
						text-align: center;
						// background: orange;
					}
				}
			}
			.performance_list{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				background: red;
				font-size: 20upx;
				.performance_list_left{
					width: 30%;
					background: red;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.performance_list_left_nav{
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						overflow-x: scroll;
						.field{
							width: 150upx;
							height: 50upx;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							background: orange;
							font-size: 25upx;
							background: pink;
							&:nth-child(n+2){
								margin-left: 2upx;
							}
							text{
								white-space: nowrap;
							}
						}
					}
					.performance_list_left_list{
						width: 100%;
						height: 60upx;
						padding: 5upx 0upx;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						border-top: 1upx solid orange;
						image{
							width: 50upx;
							height: 50upx;
							will-change: transform;
							border-radius: 50upx;
						}
						text{
							white-space: nowrap;
						}
					}
				}
				
				.performance_list_right{
					width: 70%;
					height: 100%;
					background: blue;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;
					overflow: auto;
					.performance_list_right_nav{
						// width: 100%;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						overflow-x: scroll;
						.field{
							width: 150upx;
							
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							background: orange;
							font-size: 25upx;
							background: pink;
							&:nth-child(n+2){
								margin-left: 2upx;
							}
							text{
								white-space: nowrap;
							}
						}
					}
					.performance_list_right_list{
						// width: 100%;
						height: 60upx;
						padding: 5upx 0upx;
						border-top: 1upx solid orange;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						.value{
							width: 150upx;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							
							background: orange;
							
							font-size: 25upx;
							background: pink;
							&:nth-child(n+2){
								margin-left: 2upx;
							}
							text{
								text-align: center;
								white-space: nowrap;
							}
						}
						
					}
				}
			}
		}

		
	}

}
</style>
