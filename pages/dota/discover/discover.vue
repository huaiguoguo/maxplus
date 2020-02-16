<template>
	<view class="container">

		<view class="navigate">
			<view @click="active = 1; navIcon='/static/img/max+/band_icon_max.png'; navTitle='新闻'" class="top_nav">
				<text>新闻</text>
				<view class="up">
					<image v-show="active==1" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="active = 2; navIcon='/static/img/max+/band_icon_max.png'; navTitle='RPG'" class="top_nav">
				<text>RPG</text>
				<view class="up">
					<image v-show="active==2" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="active = 3; navIcon='/static/img/max+/band_icon_max.png'; navTitle='直播'" class="top_nav">
				<text>直播</text>
				<view class="up">
					<image v-show="active==3" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
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

			<view v-show="active == 1" class="main_content">
				<view class="news_img">
					<image src="/static/img/max+/cat.jpg" mode="scaleToFill"></image>
				</view>
				<view class="news_content">
					<view class="title">
						<text>印尼爪哇猫咪收容站 被遗弃的喵星人过上集体生活</text>
					</view>
					<view class="time_look">
						<view class="time">
							<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
							<text>8小时前</text>
						</view>
						<view class="line"></view>
						<view class="look">
							<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
							<text>175786</text>
						</view>
					</view>
				</view>
			</view>

			<view v-show="active == 1" class="list_content">
				<view @click="redirect(index)" v-for="(item, index) in list" :key="index" class="item">
					<view class="left">
						<image :src="item.icon" mode=""></image>
					</view>
					<view class="right">
						<view class="item_title">
							<text>印尼爪哇猫咪收容站 被遗弃的喵星人过上集体生活</text>
						</view>
						<view class="item_time_look">
							<view class="item_time">
								<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
								<text>8小时前</text>
							</view>
							<view class="item_line"></view>
							<view class="item_look">
								<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
								<text>175786</text>
							</view>
						</view>
					</view>
				</view>
			</view>



			<view v-show="active == 1" class="topics">
				<view @click="redirectList('jingxuan')" class="topics_navigate">
					<text>精选专题</text>
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>

				<view class="topic_content">
					<view @click="redirect(index)" v-for="(item, index) in [1,2, 3,4,5,6]" :key="index" class="topic_content_item">
						<view class="item_img">
							<image src="/static/img/max+/cat.jpg" mode="scaleToFill"></image>
						</view>
						<view class="item_content">
							<view class="item_content_title">
								<text>英雄攻略专题</text>
							</view>
							<view class="item_content_time_look">
								<view class="item_content_time">
									<!-- <image src="/static/img/max+/time.png" mode="scaleToFill"></image> -->
									<text>378篇新闻</text>
								</view>
								<view class="item_content_line"></view>
								<view class="item_content_look">
									<!-- <image src="/static/img/max+/read.png" mode="scaleToFill"></image> -->
									<text>1天前</text>
								</view>
							</view>
						</view>
					</view>

					<view class="topic_content_item item_end">
						<view class="item_img_end">
							<image src="/static/img/max+/author_view_all_bg.png" mode="scaleToFill"></image>
						</view>
						<view class="item_content_end">
							<view class="img_end">
								<image src="/static/img/max+/circle_btn_more_gray.png" mode="scaleToFill"></image>
							</view>
							<view class="title_end">
								<text>全部专题</text>
							</view>
						</view>
					</view>
				</view>
			</view>


			<view v-show="active == 1" class="list_content">
				<view @click="redirect(index)" v-for="(item, index) in list" :key="index" class="item">
					<view class="left">
						<image :src="item.icon" mode=""></image>
					</view>
					<view class="right">
						<view class="item_title">
							<text>印尼爪哇猫咪收容站 被遗弃的喵星人过上集体生活</text>
						</view>
						<view class="item_time_look">
							<view class="item_time">
								<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
								<text>8小时前</text>
							</view>
							<view class="item_line"></view>
							<view class="item_look">
								<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
								<text>175786</text>
							</view>
						</view>
					</view>
				</view>
			</view>



			<view v-show="active == 1" class="topics zz">
				<view @click="redirectList('zuozhe')" class="topics_navigate">
					<text>作者专栏</text>
					<image src="/static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
				</view>

				<view class="topic_content">
					<view v-for="(item, index) in [1,2, 3,4,5,6]" :key="index" class="topic_content_item">
						<view class="item_img">
							<image src="/static/img/max+/cat.jpg" mode="scaleToFill"></image>
						</view>
						<view class="item_content">
							<view class="item_content_avatar">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							</view>
							<view class="item_content_title">
								<text>昵称</text>
							</view>
							<view class="item_content_time_look">
								<view class="item_content_look">
									<!-- <image src="/static/img/max+/read.png" mode="scaleToFill"></image> -->
									<text>1天前</text>
								</view>
							</view>
						</view>
					</view>

					<view class="topic_content_item item_end">
						<view class="item_img_end">
							<image src="/static/img/max+/author_view_all_bg.png" mode="scaleToFill"></image>
						</view>
						<view class="item_content_end">
							<view class="img_end">
								<image src="/static/img/max+/circle_btn_more_gray.png" mode="scaleToFill"></image>
							</view>
							<view class="title_end">
								<text>作者列表</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			
			
			<view v-show="active == 2" class="list_content prglist">
				<view v-for="(item, index) in list" :key="index" class="item">
					<view class="left">
						<image :src="item.icon" mode=""></image>
					</view>
					<view class="right">
						<view class="item_title">
							<text>印尼爪哇猫咪收容站 被遗弃的喵星人过上集体生活</text>
						</view>
						<view class="item_time_look">
							<view class="item_time">
								<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
								<text>8小时前</text>
							</view>
							<view class="item_line"></view>
							<view class="item_look">
								<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
								<text>175786</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<view v-show="active == 3" class="online">
				<view class="main_video">
					<view class="main_video_avatar">
						<image src="/static/img/max+/day_2.png" mode="scaleToFill"></image>
						<text>ZSMJ的直播间</text>
					</view>
					<view class="main_video_info">
						<view class="main_user">
							<view class="user_avatar">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							</view>
							<view class="user_name">
								<text>zard1991</text>
							</view>
						</view>
						<view class="main_user_looker">
							<text>639814名观众</text>
						</view>
					</view>
				</view>
				<view class="list_video">
					<view v-for="(item, index) in [1,2,3, 4, 5,6 ]" :key="index" class="video_item">
						<view class="video_avatar">
							<image src="/static/img/max+/day_2.png" mode="scaleToFill"></image>
							<text>ZSMJ的直播间</text>
						</view>
						<view class="video_info">
							<view class="user_avatar">
								<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							</view>
							<view class="user_name_looker">
								<text>zard1991</text>
								<text>639814名观众</text>
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
				active: 1,
				navTitle: '新闻',
				navIcon: '/static/img/max+/band_icon_max.png',
				list: [{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},
				]
			}
		},
		methods: {
			redirect(index){
				uni.navigateTo({
					url: '/pages/dota/news/news?id='+index
				});
			},
			redirectList(url){
				if(url == 'jingxuan'){
					uni.navigateTo({
						url: '/pages/dota/discover/thematiclist/thematiclist'
					})
				}
				if(url == 'zuozhe'){
					uni.navigateTo({
						url: '/pages/dota/discover/author/author'
					})
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
			
			position: fixed;
			top: 80upx;
			z-index: 9;

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
			margin-top: 62upx;

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


			.main_content {
				width: 100%;
				height: 100%;
				background-color: red;
				position: relative;

				// background: url(/static/img/max+/cat.jpg) no-repeat;
				// background-size: 100% 100%;
				.news_img {
					width: 100%;
					height: 400upx;
					background-color: orange;

					image {
						width: 100%;
						height: 100%;
						will-change: transform;
					}
				}

				.news_content {
					width: 100%;
					// height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					position: absolute;
					bottom: 20upx;
					z-index: 8;
					// background: blue;
					font-size: 25upx;
					color: #FFFFFF;

					.title {
						width: 100%;
						height: 100%;
						font-size: 30upx;
						font-weight: 550;
						text-align: center;
						padding: 10upx 0upx;
					}

					.time_look {
						width: 100%;
						height: 100%;
						font-size: 20upx;
						font-weight: 550;
						text-align: center;
						padding: 10upx 0upx;

						// background-color: pink;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;

						.time,
						.look {
							width: 25%;
							height: 100%;
							// background-color: orange;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;

							text {
								width: 50%;
								height: 30upx;
								line-height: 30upx;
							}
						}

						.time {

							image {
								width: 20upx;
								height: 20upx;
								line-height: 20upx;
								// background: red;
							}
						}

						.look {
							image {
								width: 30upx;
								height: 18upx;
								line-height: 18upx;
							}

						}

						.line {
							width: 1upx;
							height: 10upx;
							background: #CCCCCC;
						}
					}
				}
			}

			.list_content {
				width: 100%;
				// background: orange;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				// background: red;

				.item {
					width: 100%;
					height: 100%;
					// background: pink;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					margin-top: 0upx;
					padding: 20upx 0upx;

					&:nth-child(n+2) {
						border-top: 1px solid rgb(237, 240, 243);
					}

					.left {
						// width: 10%;
						width: 200upx;
						height: 140upx;

						// background: blue;
						image {
							width: 100%;
							height: 100%;
							will-change: transform;
						}
					}

					.right {
						// width: 50%;
						flex: 3;
						height: 100%;
						// background: orange;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: space-between;
						text-align: left;
						font-size: 22upx;
						color: rgb(140, 150, 160);
						padding-left: 20upx;
						font-weight: 550;

						.item_title {
							width: 100%;
							height: 100%;
							font-size: 25upx;
							font-weight: 550;
							text-align: left;
							padding: 10upx 0upx;
						}

						.item_time_look {
							width: 100%;
							height: 100%;
							font-size: 20upx;
							font-weight: 550;
							text-align: center;
							padding: 10upx 0upx;

							// background-color: pink;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;

							.item_time,
							.item_look {
								width: 30%;
								height: 100%;
								// background-color: orange;
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								align-items: center;

								text {
									width: 50%;
									height: 30upx;
									line-height: 30upx;
								}
							}

							.item_time {
								image {
									width: 20upx;
									height: 20upx;
									line-height: 20upx;
									// background: red;
								}
							}

							.item_look {
								image {
									width: 30upx;
									height: 18upx;
									line-height: 18upx;
								}

							}

							.item_line {
								width: 1upx;
								height: 10upx;
								background: #CCCCCC;
							}
						}

					}
				}

			}

			.topics {

				width: 100%;
				height: 100%;
				height: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.topics_navigate {
					width: 100%;
					height: 100%;
					height: auto;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					// background-color: red;
					padding: 20upx 0upx;
					border-top: 1upx solid #ccc;
					border-bottom: 1upx solid #ccc;

					text {
						flex: 3;
						font-size: 25upx;
						// background: orange;
						text-align: center;
						padding: 0upx 10upx;
					}

					image {
						width: 20upx;
						height: 25upx;
						// background: pink;
						padding: 0upx 10upx;
					}
				}

				.topic_content {
					width: 100%;
					height: 100%;
					// text-align:justify;
					// text-justify: inter-word;
					// display: flex;
					// flex-direction: row;
					// justify-content: flex-start;
					// align-items: center;
					// flex-wrap: ;

					// background-color: #0FAEFF;
					white-space: nowrap;
					overflow: auto;
					// overflow-y: scroll;

					.topic_content_item {
						width: 40%;
						height: 100%;
						line-height: 100%;
						// background-color: red;
						position: relative;
						// margin: auto;
						display: inline-block;

						&:nth-child(n+1) {
							margin-left: 10upx;
						}

						// background: url(/static/img/max+/cat.jpg) no-repeat;
						// background-size: 100% 100%;

						.item_img {
							width: 100%;
							height: 190upx;
							line-height: 190upx;

							// background-color: orange;
							image {
								width: 100%;
								height: 100%;
								will-change: transform;
							}
						}

						.item_content {
							width: 100%;
							height: auto;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							position: absolute;
							bottom: 40upx;
							// z-index: 999;
							// background: blue;
							font-size: 25upx;
							color: #FFFFFF;


							.item_content_title {
								width: 100%;
								height: 100%;
								font-size: 20upx;
								font-weight: 550;
								text-align: center;
								padding: 10upx 0upx;
							}

							.item_content_time_look {
								width: 100%;
								height: 100%;
								font-size: 18upx;
								font-weight: 550;
								text-align: center;
								padding: 10upx 0upx;

								// background-color: pink;
								display: flex;
								flex-direction: row;
								justify-content: center;
								align-items: center;

								.item_content_time,
								.item_content_look {
									width: 50%;
									height: 100%;
									// background-color: orange;
									display: flex;
									flex-direction: row;
									justify-content: center;
									align-items: center;

									text {
										// background: red;
										width: 100%;
										height: 20upx;
										line-height: 20upx;
									}
								}

								.item_content_time {
									image {
										width: 20upx;
										height: 20upx;
										line-height: 20upx;
										// background: red;
									}
								}

								.item_content_look {
									image {
										width: 30upx;
										height: 18upx;
										line-height: 18upx;
									}

								}

								.item_content_line {
									width: 1upx;
									height: 10upx;
									background: #CCCCCC;
								}
							}

						}

					}

					.item_end {
						width: 20%;
						height: 190upx;
						line-height: 190upx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						position: relative;
						// background-size: 100% 100%;
						display: inline-block;

						.item_img_end {
							width: 100%;
							height: 190upx;
							line-height: 190upx;
							background-color: orange;

							image {
								width: 100%;
								height: 100%;
								// will-change: transform;
								overflow: auto;
							}
						}

						.item_content_end {
							width: 100%;
							height: 100%;

							position: absolute;
							bottom: 0upx;
							z-index: 999;

							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							// background: red;

							.img_end {
								width: 100%;
								height: 30upx;
								line-height: 30upx;
								// background: #16AB60;
								text-align: center;

								image {
									width: 30upx;
									height: 30upx;
									line-height: 30upx;
									// background: orange;
								}
							}

							.title_end {
								width: 100%;
								height: 50upx;
								line-height: 50upx;
								// background: blue;
								text-align: center;

								text {
									font-size: 20upx;
									color: #FFFFFF;
								}
							}

						}
					}
				}

			}

			.zz {
				.topic_content{
					.topic_content_item{
						width: 20%;
						.item_img{
							overflow: hidden;
							image{
								filter: blur(8upx);
							}
						}
						
						.item_content{
							bottom: 35upx;
							.item_content_avatar{
								width: 70upx;
								height: 70upx;
								border: 1upx solid #C0C0C0;
								border-radius: 70upx;
								image{
									width: 100%;
									height: 100%;
									border-radius: 70upx;
									will-change: transform;
								}
							}
							.item_content_title{
								padding-top: 10upx;
							}
							.item_content_time_look{
								padding: 0upx;
							}
						}
					}
				}
				
			}

		}

		.prglist{
			
		}
		
		.online{
			width: 100%;
			height: auto;
			background-color: #CCCCCC;
			.main_video{
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				background: #FFFFFF;
				// background-color: pink;
				margin-top: 5upx;
				padding: 0upx 0upx;
				
				.main_video_avatar{
					width: 100%;
					height: 100%;
					// background-color: red;
					text-align: center;
					position: relative;
					image{
						width: 100%;
						height: 400upx;
						will-change: transform;
					}
					text{
						// width: 100%;
						height: 50upx;
						// background: red;	
						position: absolute;
						top:  70%;
						left: 40%;
						font-size: 30upx;
						color: yellow;
						z-index: 9;
						text-align: center;
						color: #FFFFFF;
					}
				}
				.main_video_info{
					width: auto;
					height: auto;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					font-size: 30upx;
					margin-bottom: 10upx;
					padding: 5upx 15upx;
					// background: yellow;
					.main_user{
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						// background: blue;
						
						.user_avatar{
							width: 70upx;
							height: 70upx;
							background: red;
							border-radius: 70upx;
							border: 1upx solid #ccc;
							
							image{
								width: 100%;
								height: 100%;
								will-change: transform;
								border-radius: 70upx;
							}
						}
						.user_name{
							margin-left: 20upx;
							text{
								// background: blue;
								text-align: left;
								color: #000000;
								font-weight: 550;
							}
						}
					}
					.main_user_looker{
						// background: yellow;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
						margin-left: 20upx;
						
						text{
							// background: blue;
							text-align: left;
							color: #000000;
							margin-top: 5upx;
							color: #C0C0C0;
							font-size: 25upx;
						}
					}
				}
			}
			
			.list_video{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				
				.video_item{
					width: 49.8%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					background: #FFFFFF;
					// background-color: pink;
					margin-top: 5upx;
					padding: 5upx 0upx;
					
					.video_avatar{
						width: 100%;
						height: 100%;
						// background-color: red;
						text-align: center;
						position: relative;
						image{
							width: 100%;
							height: 250upx;
							will-change: transform;
						}
						text{
							// width: 100%;
							height: 50upx;
							// background: red;	
							position: absolute;
							top:  70%;
							left: 25%;
							font-size: 30upx;
							color: yellow;
							z-index: 9;
							text-align: center;
							color: #FFFFFF;
						}
					}
					.video_info{
						width: auto;
						height: auto;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						font-size: 30upx;
						margin-top: 10upx;
						padding-left: 15upx;
						// background: yellow;
						.user_avatar{
							width: 70upx;
							height: 70upx;
							background: red;
							border-radius: 70upx;
							border: 1upx solid #ccc;
							
							image{
								width: 100%;
								height: 100%;
								will-change: transform;
								border-radius: 70upx;
							}
						}
						.user_name_looker{
							// background: yellow;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-start;
							margin-left: 20upx;
							
							text{
								// background: blue;
								text-align: left;
								color: #000000;
								&:nth-child(2){
									margin-top: 5upx;
									color: #C0C0C0;
									font-size: 25upx;
								}
							}
						}
					}
				}
			}
		}

	}
</style>
