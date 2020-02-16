<template>
	<view class="container">
		<view class="navigate">
			<view @click="active = 1; navIcon='/static/img/max+/band_icon_max.png'; navTitle='新闻'" class="top_nav">
				<text>新闻</text>
				<view class="up">
					<image v-show="active==1" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="active = 2; navIcon='/static/img/max+/band_icon_comment.png'; navTitle='评论'" class="top_nav">
				<text>评论</text>
				<view class="up">
					<image v-show="active==2" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="content">
			
			<view v-show="active == 1" class="news">
				<view class="news_slide">
					<image src="/static/img/max+/skill_default_ow.png" mode="scaleToFill"></image>
					<text>MDL成都Major数据统计: 7.22版本最后的灵光, 光之守卫最高登场</text>
				</view>
				<view class="news_content">
					<view class="userinfo">
						<view class="userinfo_left">
							<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							<text>留尘</text>
						</view>
						<view class="userinfo_right">
							<text>2019-11-26 10:30:00</text>
						</view>
					</view>
					<view class="detail">
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
						这是新闻这是新闻
					</view>
					<view class="shares">
						<text>分享到:</text>
						<view class="shares_item">
							<image src="/static/img/max+/share_weixin_circle_circle.png" mode="scaleToFill"></image>
							<image src="/static/img/max+/share_weixin_circle.png" mode="scaleToFill"></image>
							<image src="/static/img/max+/share_sina_circle.png" mode="scaleToFill"></image>
							<image src="/static/img/max+/share_qq_circle.png" mode="scaleToFill"></image>
							<image src="/static/img/max+/share_qzone_circle.png" mode="scaleToFill"></image>
						</view>
					</view>
					
				</view>
			</view>
			<view v-show="active == 2" class="comment">
				
				<view v-show="active == 2" class="list_navigation">
					<view class="left">
						<view class="img">
							<image class="icon" :src="navIcon" mode="scaleToFill"></image>
						</view>
						<view class="title"> {{navTitle}} </view>
					</view>
					<view class="right">
						<text>161条评论</text>
					</view>
				</view>
				
				<view v-for="(item, index) in [1,2,3,4,5,6]" :key="index" class="comment_item">
					<view class="comment_item_left">
						<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
					</view>
					<view class="comment_item_right">
						<view class="comment_item_right_top">
							<view class="comment_item_right_top_left">
								<view class="username_level">
									<text>Carry</text>
									<text>LV.10</text>
								</view>
								<view class="date">
									1个月前
								</view>
							</view>
							<view class="comment_item_right_top_right">
								<text>298</text>
								<image src="/static/img/max+/bbs_unliked.png" mode="scaleToFill"></image>
								<image src="/static/img/max+/bbs_unliked.png" mode="scaleToFill"></image>
								<image src="/static/img/max+/hot_comment.png" mode="scaleToFill"></image>
							</view>
						</view>
						<view class="comment_item_right_content">
							这是评论内容,这是评论内容,这是评论内容,这是评论内容,这是评论内容,这是评论内容,
							这是评论内容,这是评论内容,这是评论内容,这是评论内容,这是评论内容,这是评论内容
						</view>
						<view class="comment_item_right_reply">
							<view class="reply_item">
								<text>张三</text>
								<text>回复</text>
								<text>李四</text>
								<text>: 这是内容</text>
								<text>1个月前</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="comment_input">
				<textarea value="" placeholder="我也想说两句" />
				<image src="/static/img/max+/ic_edit_comment_comment.png" mode="scaleToFill"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
				navTitle: '新闻',
				navIcon: '/static/img/max+/band_icon_max.png'
			};
		}
	}
</script>

<style lang="less">
	.container{
		width: 100%;
		height: 100%;
		// position: relative;
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
			z-index: 999;
		
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

		.content{
			width: 100%;
			height: 100%;
			padding: 0upx;
			
			.news{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 65upx;
				
				.news_slide{
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					position: relative;
					image{
						width: 100%;
						height: 350upx;
						will-change: transform;
					}
					text{
						position: absolute;
						bottom: 10upx;
						z-index: 9;
						color: #FFFFFF;
					}
				}
				.news_content{
					width: 100%;
					height: 100%;
					background: #FFFFFF;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.userinfo{
						width: 100%;
						height: 80upx;
						line-height: 80upx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						.userinfo_left{
							width: 20%;
							height: 100%;
							// background: blue;
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							image{
								width: 60upx;
								height: 60upx;
								will-change: transform;
								border-radius: 40upx;
								margin-left: 15upx;
							}
							text{
								font-size: 28upx;
								color: #000000;
								margin-left: 15upx;
							}
						}
						.userinfo_right{
							width: 70%;
							height: 100%;
							// background: red;
							text-align: right;
							text{
								color: #BCBCBC;
								font-size: 25upx;
							}
						}
					}
					.detail{
						width: 100%;
						height: 100%;
						padding: 10upx 10upx;
						background: #C0C0C0;
					}
					.shares{
						width: 100%;
						height: 100upx;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						margin-top: 50upx;
						margin-left: 30upx;
						text{
							font-size: 28upx;
							color: #000000;
						}
						.shares_item{
							margin-left: 20upx;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							image{
								width: 60upx;
								height: 60upx;
								will-change: transform;
								margin-left: 20upx;
							}
						}
					}
				}
				
			}
			
			.comment{
				width: 100%;
				height: 100%;
				overflow: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				margin-top: 80upx;
				
				.list_navigation {
					width: 100%;
					height: 45upx;
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
						font-size: 25upx;
				
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
				
				
				.comment_item{
					width: 100%;
					height: 100%;
					padding: 15upx 0upx;
					background: #FFFFFF;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					
					&:nth-child(n+2){
						// margin-top: 15upx;
						border-top: 1upx solid #C0C0C0;
					}
					
					.comment_item_left{
						width: 20%;
						height: 100%;
						// background: red;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						align-self: flex-start;
						image{
							width: 70upx;
							height: 70upx;
							will-change: transform;
							border-radius: 50upx;
							margin-top: 10upx;
						}
					}
					.comment_item_right{
						width: 80%;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						align-items: flex-start;
						.comment_item_right_top{
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: flex-start;
							.comment_item_right_top_left{
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: flex-start;
								font-size: 30upx;
								color: #000000;
								margin-top: 10upx;
								.username_level{
									display: flex;
									flex-direction: row;
									justify-content: center;
									align-items: center;
									text{
										&:nth-last-child(1){
											// width: 20upx;
											// height: 15upx;
											background: orange;
											color: red;
											border-radius: 5upx;
											font-size: 15upx;
											padding: 5upx 10upx;
											margin-left: 10upx;
										}
									}
								}
								.date{
									font-size: 20upx;
									color: #C0C0C0;
									margin-top: 10upx;
								}
							}
							.comment_item_right_top_right{
								width: 30%;
								height: 100%;
								// background-color: red;
								display: flex;
								flex-direction: row;
								justify-content: flex-end;
								align-items: center;
								
								text{
									font-size: 25upx;
									color: #000000;
									margin-top: 20upx;
									margin-right: 5upx;
									font-size: 25upx;
									color: #BCBCBC;
								}
								image{
									width: 25upx;
									height: 25upx;
									will-change: transform;
									margin-left: 10upx;
									&:nth-child(2),&:nth-child(3){
										margin-top: 20upx;
									}
									
									&:nth-child(3){
										transform: rotate(180deg);
									}
									&:nth-child(4){
										width: 35upx;
										height: 35upx;
										will-change: transform;
										// margin-top: -30upx;
										align-self: flex-start;
									}
								}
							}
						}
						
						.comment_item_right_content{
							font-size: 30upx;
							margin-top: 20upx;
						}
						
						.comment_item_right_reply{
							color: #BCBCBC;
							margin-top: 30upx;
							font-size: 25upx;
						}
					}
				}
			}
			
			.comment_input{
				width: 100%;
				height: 100upx;
				
				background: rgb(251, 252, 253);
				position: fixed;
				bottom: 0;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				
				border-top: 1upx solid #C0C0C0;
				
				
				textarea{
					width: 85%;
					height: 70upx;
					line-height: 70upx;
					margin-left: 20upx;
					border: 1upx solid #C0C0C0;
					background: #FFFFFF;
					border-radius: 10upx;
					text-indent: 15upx;
				}
				
				image{
					width: 50upx;
					height: 50upx;
					will-change: transform;
					margin-right: 20upx;
				}
				
				
			}
			
		}
	}
</style>
