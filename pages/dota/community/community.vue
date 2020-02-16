<template>
	<view class="container">

		<view class="navigate">
			<view @click="active = 1; navIcon='/static/img/max+/band_icon_topic.png'; navTitle='帖子'" class="top_nav">
				<text>帖子</text>
				<view class="up">
					<image v-show="active==1" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="active = 2; navIcon='/static/img/max+/band_icon_max.png'; navTitle='话题'" class="top_nav">
				<text>话题</text>
				<view class="up">
					<image v-show="active==2" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>

		<view class="list">
			<view class="list_navigation">
				<view class="left">
					<view class="img">
						<image class="icon" :src="navIcon" mode=""></image>
					</view>
					<view class="title"> {{navTitle}} </view>
				</view>
				<view v-show="active == 1" class="right">
					<view class="select">
						<image src="/static/img/max+/news_type_dota2.png" mode="scaleToFill"></image>
						<text class="text">Dota2</text>
					</view>
				</view>
			</view>
			
			<view v-show="active == 1" class="tiezi">
				<view class="iconNav">
					<view v-for="(item, index) in iconList" :key="index" class="icon_item">
						<view class="icon">
							<image :src="item.icon" mode="scaleToFill"></image>
						</view>
						<view class="name">
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
				
				<view class="tiezi_navigation">
					<view class="tz_nav_left">
						<view class="tz_nav_left_icon">
							<image src="/static/img/max+/band_icon_data.png" mode="scaleToFill"></image>
						</view>
						<view class="title">帖子列表</view>
					</view>
					<view class="tz_nav_right">
						<view @click="select=!select" class="select">
							<view class="select_title">
								<text>最新回复</text>
							</view>
							<view class="select_down">
								<image src="/static/img/max+/ic_sort_down.png" mode="scaleToFill"></image>
							</view>
						</view>
						<!-- v-show="select == 2" -->
						<view v-show="select" class="select_list">
							<text>最新发帖</text>
							<text>最新回复</text>
							<text>热门贴子</text>
						</view>
					</view>
				</view>
				
				<view class="content">
					<view class="top_list">
						<view v-for="(item,index) in [1,2]" :key="index" class="top_list_item">
							<text>【置顶】</text>
							<text>世外之争内容征集活动开启! 赢取M币刀币专属称号, 做最靓...</text>
						</view>
					</view>
					<view class="main_list">
						<view v-for="(item, index) in [1,2,3,4,5]" :key="index" class="main_list_item">
							<view class="user_avatar">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							</view>
							<view class="item_info">
								<view class="item_info_user">
									<view class="user">
										<text>Joker</text>
										<text>LV.13</text>
										<image src="/static/img/max+/vip_level1.png" mode="scaleToFill"></image>
									</view>
									<view class="close">
										<image src="/static/img/max+/post_not_interested.png" mode="scaleToFill"></image>
									</view>
								</view>
								<view class="item_info_content">
									<view class="title">
										兄弟 寒假想整一个ipad
									</view>
									<view class="info">
										是min好还是air好呢兄弟们给点意见我其实想整个mini, 但是同学说太小了
									</view>
									<view class="pic">
										<image src="/static/img/max+/day_2.png" mode="scaleToFill"></image>
									</view>
								</view>
								<view class="item_info_footer">
									<view class="footer_left">
										<view class="max">
											<!-- bbs_liked.png -->
											<image src="/static/img/max+/icon_topic_max.png" mode="scaleToFill"></image>
											<text>小时前</text>
										</view>
										‧
										<view class="max_name">
											<text>Max家</text>
										</view>
									</view>
									<view class="footer_right">
										<view class="thumbs">
											<image src="/static/img/max+/bbs_unliked.png" mode="scaleToFill"></image>
											<text>1</text>
										</view>
										<view class="comment">
											<image src="/static/img/max+/bbs_comment.png" mode="scaleToFill"></image>
											<text>35</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view v-show="active == 2" class="huati">
				<view class="h_nav">
					<view @click="changeLeftActive(index)" v-for="(item, index) in [1,2,3,4,5,6,7,8,9]" :key="index" :class="[left_active_index==index?'h_nav_item active':'h_nav_item']">
						<text>我的关注</text>
					</view>
				</view>
				<view class="h_content">
					<view class="h_content_list">
						<view class="h_content_list_top h_list">
							<view v-for="(item, index) in [1,2,3,4]" :key="index" class="h_content_list_item">
								<view class="h_content_list_item_left">
									<image src="/static/img/max+/rb_bet_on.png" mode=""></image>
									<view class="item_left_body">
										<text>Rush　B</text>
										<text>CSGO技巧、开黑,就在Rush B!</text>
									</view>
								</view>
								<view class="h_content_list_item_right">
									<view class="item_right_body">
										<text>帖子: 12774.8k</text>
										<image src="/static/img/max+/icon_csgo_right.png" mode=""></image>
									</view>
								</view>
							</view>
						</view>
						
						<view class="h_content_list_main h_list">
							<view class="h_content_list_main_nav">
								<text>推荐话题</text>
							</view>
							<view v-for="(item, index) in [1,2,3,4,5,6,7,8,9]" :key="index" class="h_content_list_item">
								<view class="h_content_list_item_left">
									<image src="/static/img/max+/rb_bet_on.png" mode=""></image>
									<view class="item_left_body">
										<text>Rush　B</text>
										<text>CSGO技巧、开黑,就在Rush B!</text>
									</view>
								</view>
								<view class="h_content_list_item_right">
									<view class="item_right_body">
										<text>帖子: 12774.8k</text>
										<image src="/static/img/max+/icon_csgo_right.png" mode=""></image>
									</view>
								</view>
							</view>
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
				main_active: {
					index: null,
					show: false
				},
				left_active_index: 1,
				active: 1,
				select: false,
				navTitle: '帖子',
				navIcon: '/static/img/max+/band_icon_max.png',
				iconList: [
					{
						icon: '/static/img/max+/rb_bet_on.png',
						name: 'Max家'
					},
					{
						icon: '/static/img/max+/rb_bet_on.png',
						name: 'Rush B'
					},
					{
						icon: '/static/img/max+/rb_bet_on.png',
						name: 'Steam游'
					},
					{
						icon: '/static/img/max+/add_button.png',
						name: '添加话题'
					},
				],
				list: [{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					}
				]
			}
		},
		mounted() {
			window.addEventListener('mousewheel',this.handleScroll,false)
		},
		methods: {
			changeLeftActive(index){
				this.left_active_index = index;
			},
			handleScroll(){
				if(this.select){
					this.select = false;
				}
			}
		}
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	.container {
		width: 100%;
		height: auto;
		// background: red;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		.navigate {
			width: 100%;
			height: 46upx;
			background-color: rgb(20, 25, 30);
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size: 25upx;
			padding-top: 30upx;
			color: #C0C0C0;

			.top_nav {
				width: 50%;
				height: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				// background: red;
				text-align: center;

			}

			.up {
				width: 25upx;
				height: 15upx;
				line-height: 15upx;
				// background: red;
				border: 0upx;

				image {
					width: 25upx;
					height: 15upx;
					border: 0upx;
				}
			}
		}

		.list {
			width: 100%;
			height: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			// margin-top: 30upx;

			.list_navigation {
				width: 100%;
				height: 65upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background-color: rgb(225, 230, 235);
				padding: 15upx 0upx;

				.left {
					width: auto;
					height: auto;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					// background: #5C8DFF;
					margin-left: 20upx;

					.img {
						// background: #CCCCCC;
						width: 45upx;
						height: 45upx;
						line-height: 45upx;
						padding-bottom: 10upx;
						image {
							width: 100%;
							height: 100%;
							will-change: transform;
						}
					}

					.title {
						font-size: 25upx;
						color: rgb(61, 71, 80);
						// background: pink;
					}
				}

				.right {
					width: auto;
					height: auto;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					margin-right: 10upx;

					// background: blue;
					.select {
						width: auto;
						height: 50upx;
						line-height: 50upx;
						font-size: 20upx;
						color: rgb(140, 150, 160);
						border-radius: 30upx;
						border: 1px solid #ccc;
						text-align: center;
						
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						padding: 2upx 20upx;
						
						// background: yellow;
						
						image{
							width: 25upx;
							height: 25upx;
							line-height: 25upx;
							will-change: transform;
							// background: green;
						}
						text{
							height: 50upx;
							line-height: 50upx;
							// background: red;
							margin-left: 10upx;
						}
					}
					
					.active {
						background-color: #FFFFFF;
						color: #000000;
					}
				}
			}
			
			.tiezi{
				width: 100%;
				height: 100%;
				.iconNav{
					width: 100%;
					height: 100%;
					// background-color: red;
					height: auto;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					padding: 10upx 0upx;
					.icon_item{
						width: 17%;
						height: 150upx;
						// background-color: pink;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						// background: orange;
						&:nth-child(n+2){
							margin-left: 10upx;
						}
						.icon{
							width: 100upx;
							height: 100upx;
							line-height: 100upx;
							// background: blue;
							image{
								width: 100%;
								height: 100%;
								will-change: transform;
							}
						}
						.name{
							margin-top: 10upx;
							font-size: 25upx;
							color: #000000;
						}
					}
				}
				.tiezi_navigation{
					width: 100%;
					height: 100upx;
					background-color: #e1e6eb;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.tz_nav_left{
						width: auto;
						height: auto;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						// background: blue;
						padding-left: 20upx;
						.tz_nav_left_icon{
							height: 100%;
							// background-color: red;
							
							image{
								width: 45upx;
								height: 45upx;
								will-change: transform;
							}
						}
						.title{
							width: auto;
							height: auto;
							// background: orange;
							font-size: 25upx;
							color: #2C405A;
						}
					}
					.tz_nav_right{
						width: auto;
						height: auto;
						padding-right: 20upx;
						.select{
							// background: red;
							width: 150upx;
							height: 50upx;
							// line-height: 50upx;
							text-align: center;
							border-radius: 20upx;
							border: 1upx solid #2C405A;
							
							display: flex;
							justify-content: center;
							align-items: center;
							padding: 0upx 10upx;
							.select_title{
								width: 80%;
								height: 100%;
								// background: blue;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								text{
									// background: pink;
									font-size: 25upx;
									color: #2C405A;
								}
							}
							.select_down{
								width: 30upx;
								height: 100%;
								// background: blue;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								image{
									width: 25upx;
									height: 20upx;
									// line-height: 20upx;
									will-change: transform;
								}
							}
							
						}
						.select_list{
							width: 350upx;
							height: auto;
							background-color: rgb(250, 250, 250);
							
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-start;
							
							position: fixed;
							right: 0;
							z-index: 9;
							
							border-top-left-radius: 8upx;
							border-bottom-left-radius: 8upx;
							
							box-shadow: 0upx 20upx 50upx 5upx #ccc;//007AFF
							padding: 20upx;
							text{
								font-size: 30upx;
								// margin-left: 10upx;
								
								// background: pink;
								&:nth-child(n+1){
									margin: 30upx 0upx 30upx 10upx;
								}
							}
						}
					}
				}
				
				.content{
					width: 100%;
					height: auto;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background: ;
					.top_list{
						width: 100%;
						height: auto;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.top_list_item{
							font-size: 25upx;
							color: #000000;
							width: 100%;
							height: 30upx;
							padding: 25upx 0upx;
							
							// background-color: orange;
							
							&:nth-child(n+2){
								margin-top: 10upx;
								border-top: 1upx solid #ccc;
							}
							text{
								&:nth-child(1){
									color: #0FAEFF;
								}
							}
						}
					}
					.main_list{
						width: 100%;
						height: auto;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin-top: 20upx;
						.main_list_item{
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: flex-start;
							margin-top: 30upx;
							border-top: 1upx solid #ccc;
							padding: 20upx 0upx;
							// background: red;
							.user_avatar{
								flex: 1;
								height: 100%;
								display: flex;
								flex-direction: row;
								justify-content: space-around;
								align-items: center;
								
								// background: #007AFF;
								image{
									width: 70upx;
									height: 70upx;
									border-radius: 70upx;
									border: 1upx solid #CCCCCC;
									will-change: transform;
									
								}
								
							}
							.item_info{
								flex: 6;
								height: 100%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: flex-start;
								.item_info_user{
									width: 100%;
									display: flex;
									flex-direction: row;
									justify-content: space-between;
									align-items: center;
									// background-color: orange;
									.user{
										width: 30%;
										height: 100%;
										// background-color: blue;
										display: flex;
										flex-direction: row;
										justify-content: center;
										align-items: center;
										text{
											width: 20%;
											&:nth-child(1){
												width: 40%;
												height: 100%;
												border: 0upx solid #3F536E;
												border-radius: 10upx;
												// background: yellow;
												font-size: 25upx;
												color: #3F536E;
												text-align: center;
											}
											&:nth-child(2){
												width: 40%;
												height: 100%;
												border: 0upx solid #3F536E;
												border-radius: 10upx;
												background: rgb(255,193,7);
												font-size: 22upx;
												color: #FFFFFF;
												text-align: center;
												margin-left: 10upx;
											}
										}
										image{
											width: 50upx;
											height: 40upx;
											will-change: transform;
											margin-left: 10upx;
										}
									}
									.close{
										width: auto;
										// background-color: pink;
										text-align: right;
										padding-right: 20upx;
										image{
											width: 40upx;
											height: 30upx;
											will-change: transform;
										}
									}
									
								}
								.item_info_content{
									width: 100%;
									// background-color: #126F93;
									display: flex;
									flex-direction: column;
									justify-content: flex-start;
									align-items: left;
									
									.title{
										margin: 5upx 5upx;
										font-size: 30upx;
										color: black;
									}
									.info{
										margin: 5upx;
										font-size: 25upx;
										color: #ccc;
									}
									.pic{
										margin: 5upx 0upx;
										image{
											width: 400upx;
											height: 350upx;
											will-change: transform;
										}
									}
									
								}
								.item_info_footer{
									width: 100%;
									height: auto;
									display: flex;
									flex-direction: row;
									justify-content: space-between;
									align-items: center;
									// background-color: orange;
									margin-top: 10upx;
									.footer_left{
										// background: #4E77D9;
										display: flex;
										flex-direction: row;
										justify-content: space-between;
										align-items: center;
										font-size: 20upx;
										color: #CCCCCC;
										.max{
											display: flex;
											flex-direction: row;
											justify-content: center;
											align-items: center;
											
											image{
												width: 30upx;
												height: 30upx;
												will-change: transform;
											}
											text{
												margin-left: 10upx;
											}
										}
										.max_name{
											margin-left: 10upx;
										}
										
									}
									.footer_right{
										// background: red;
										height: 100%;
										display: flex;
										flex-direction: row;
										justify-content: space-between;
										align-items: center;
										font-size: 25upx;
										color: #C0C0C0;
										image{
											width: 30upx;
											height: 20upx;
											will-change: transform;
											margin-right: 5upx;
										}
										text{
											width: 30upx;
											height: 30upx;
											// background: #00B26A;
										}
										.thumbs{
											// background: red;
											display: flex;
											flex-direction: row;
											justify-content: center;
											align-items: center;
											
										}
										.comment{
											// background: blue;
											margin-left: 30upx;
											display: flex;
											flex-direction: row;
											justify-content: center;
											align-items: center;
										
										}
									}
									
								}
							}
							
						}
					
					}
				}
			
			}
			
			.huati{
				width: 100%;
				height: 100%;
				// background: red;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: flex-start;
				font-size: 25upx;
				// color: pink;
				.h_nav{
					flex: 1;
					width: 22%;
					height: 100%;
					position: fixed;
					left: 0;
					background: rgb(247, 248, 249);
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;
					.h_nav_item{
						width: 100%;
						height: 85upx;
						line-height: 85upx;
						text-align: center;
						
						&:nth-child(n+1){
							margin-top: 0upx;
						}
						&:nth-child(n+2){
							border-top: 2upx solid #ccc;
							// border-bottom: 2upx solid #ccc;
						}
					}
					.active{
						border-left: 10upx solid #000000;
						font-weight: 550;
						background: #FFFFFF;
					}
				}
				.h_content{
					flex: 4;
					width: 76%;
					height: 100%;
					position: fixed;
					right: 0;
					// background: orange;
					margin-left: 20upx;
					overflow: auto;
					
					.h_list{
						width: 100%;
						height: 100%;
						// background: #1582AD;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					.h_content_list_top{
						.h_content_list_item{
							&:nth-child(n+2){
								margin-top: 20upx;
							}
						}
					}
					.h_content_list_main{
						.h_content_list_main_nav{
							width: 100%;
							height: 80upx;
							// background: red;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							color: #C0C0C0;
						}
						.h_content_list_item{
							&:nth-child(n+3){
								margin-top: 20upx;
							}
						}
					}
					
					.h_content_list_item{
						width: 100%;
						height: auto;
						background: rgb(247, 248, 249);//#5677FC;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: flex-start;
						
						.h_content_list_item_left{
							flex: 3;
							height: 100upx;
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							// background: #E80080;
							font-size: 20upx;
							padding: 5upx 20upx 5upx 10upx;
							image{
								width: 70upx;
								height: 70upx;
								will-change: transform;
							}
							.item_left_body{
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: flex-start;
								padding-left: 10upx;
								text{
									color: #000000;
									font-size: 25upx;
									&:nth-child(2){
										margin-top: 10upx;
										color: #C8C7CC;
										font-size: 20upx;
									}
								}
							}
						}
						.h_content_list_item_right{
							flex: 1;
							width: 100%;
							height: auto;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							.item_right_body{
								width: 100%;
								height: 100%;
								
								color: #BCBCBC;
								// background: red;
								display: flex;
								flex-direction: row;
								justify-content: center;
								align-items: flex-start;
								
								text{
									// background: orange;
									width: 150upx;
									padding: 10upx 0upx;
									font-size: 20upx;
									text-align: right;
								}
								
								image{
									width: 50upx;
									height: 50upx;
									will-change: transform;
								}
								
							}
						}
					}
				}
			}
			
		}

	
	}
</style>
