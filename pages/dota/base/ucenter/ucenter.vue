<template>
	<view class="container">
		<view class="top">
			<image src="/static/img/max+/defalut_user_avartar.png" mode="scaleToFill"></image>
			<view class="top_item username">
				<text>匿名玩家</text>
				<text>LV.3</text>
			</view>
			<view class="top_item userId">
				<text>Max ID:10832260</text>
			</view>
			<view class="top_item progress_bar">
				<view class="level">
					<text>Lv.3</text>
				</view>
				<view class="progress">
					<view class="jindu"></view>
				</view>
				<view class="level_val">
					<text>30/<text>120</text></text>
				</view>
			</view>
			<view class="top_item signature">
				<text>个性签名: 该用户很懒, 还没有留下个性签名</text>
			</view>
		</view>
		<view class="content">
			<view class="nav">
				<view @click="redirect(1)" class="item">
					<text>关注:0</text>
				</view>
				<view @click="redirect(2)" class="item">
					<text>粉丝:0</text>
				</view>
				<view @click="redirect(3)" class="item">
					<text>获赞:0</text>
				</view>
			</view>
			<view class="decorative"></view>
			<view class="list">
				<view class="list_nav">
					<view @click="changeBorder(1)" :class="[active==1?'item active':'item']">
						<text :style="post">发帖0</text>
					</view>
					<view @click="changeBorder(2)" :class="[active==2?'item active':'item']">
						<text :style="comment">新闻评论0</text>
					</view>
					<view @click="changeBorder(3)" :class="[active==3?'item active':'item']">
						<text :style="reply">回帖0</text>
					</view>
					<view @click="changeBorder(4)" :class="[active==4?'item active':'item']">
						<text :style="answer">回答0</text>
					</view>
					<view @click="changeBorder(5)" :class="[active==5?'item active':'item']">
						<text :style="topic">关注主题0</text>
					</view>
				</view>
				<view class="list_content">
					<view v-show="active==1" class="list_content_body post">
						<view class="list_item">
							<view v-for="(item, index) in post_list" :key="'post_list'+index" class="list_item_b">
								<view class="list_item_b_left">
									<view class="img">
										<image src="/static/img/max+/ic_game_logo_csgo_selected.png" mode="scaleToFill"></image>
									</view>
									<view class="info">
										<text>Max家</text>
										<text>综合区: 吃喝玩乐,畅所欲言</text>
									</view>
								</view>
								<view class="list_item_b_right">
									<text>帖子: 13672.5k</text>
									<image src="/static/img/max+/icon_csgo_right.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
						<view v-if="post_list.length<=0" class="no_message">
							<view class="no_message_content">
								<image src="/static/img/max+/def_tag_post.png" mode="scaleToFill"></image>
								<text>暂无发帖</text>
							</view>
						</view>
					</view>
					<view v-show="active==2" class="list_content_body news_comment">
						<view class="list_item">
							<view v-for="(item, index) in news_comment_list" :key="'news_comment_list'+index" class="list_item_b">
								<view class="list_item_b_left">
									<view class="img">
										<image src="/static/img/max+/ic_game_logo_csgo_selected.png" mode="scaleToFill"></image>
									</view>
									<view class="info">
										<text>Max家</text>
										<text>综合区: 吃喝玩乐,畅所欲言</text>
									</view>
								</view>
								<view class="list_item_b_right">
									<text>帖子: 13672.5k</text>
									<image src="/static/img/max+/icon_csgo_right.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
						<view v-if="news_comment_list.length<=0" class="no_message">
							<view class="no_message_content">
								<image src="/static/img/max+/no_message.png" mode="scaleToFill"></image>
								<text>暂无新闻评论</text>
							</view>
						</view>
					</view>
					<view v-show="active==3" class="list_content_body reply">
						<view class="list_item">
							<view v-for="(item, index) in reply_list" :key="'reply_list'+index" class="list_item_b">
								<view class="list_item_b_left">
									<view class="img">
										<image src="/static/img/max+/ic_game_logo_csgo_selected.png" mode="scaleToFill"></image>
									</view>
									<view class="info">
										<text>Max家</text>
										<text>综合区: 吃喝玩乐,畅所欲言</text>
									</view>
								</view>
								<view class="list_item_b_right">
									<text>帖子: 13672.5k</text>
									<image src="/static/img/max+/icon_csgo_right.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
						<view v-if="reply_list.length<=0" class="no_message">
							<view class="no_message_content">
								<image src="/static/img/max+/def_tag_reply.png" mode="scaleToFill"></image>
								<text>暂无回帖</text>
							</view>
						</view>
					</view>
					
					
					<view v-show="active==4" class="list_content_body answer">
						<view class="list_item">
							<view v-for="(item, index) in answer_list" :key="'answer_list'+index" class="list_item_b">
								<view class="list_item_b_left">
									<view class="img">
										<image src="/static/img/max+/ic_game_logo_csgo_selected.png" mode="scaleToFill"></image>
									</view>
									<view class="info">
										<text>Max家</text>
										<text>综合区: 吃喝玩乐,畅所欲言</text>
									</view>
								</view>
								<view class="list_item_b_right">
									<text>帖子: 13672.5k</text>
									<image src="/static/img/max+/icon_csgo_right.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
						<view v-if="answer_list.length<=0" class="no_message">
							<view class="no_message_content">
								<image src="/static/img/max+/def_tag_post.png" mode="scaleToFill"></image>
								<text>暂无回答</text>
							</view>
						</view>
					</view>
					
					
					<view v-show="active==5" class="list_content_body focus_topics">
						<view class="list_item">
							<view v-for="(item, index) in focus_topics_list" :key="'focus_topics_list'+index" class="list_item_b">
								<view class="list_item_b_left">
									<view class="img">
										<image src="/static/img/max+/ic_game_logo_csgo_selected.png" mode="scaleToFill"></image>
									</view>
									<view class="info">
										<text>Max家</text>
										<text>综合区: 吃喝玩乐,畅所欲言</text>
									</view>
								</view>
								<view class="list_item_b_right">
									<text>帖子: 13672.5k</text>
									<image src="/static/img/max+/icon_csgo_right.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
						<view v-if="focus_topics_list.length<=0" class="no_message">
							<view class="no_message_content">
								<image src="/static/img/max+/no_message.png" mode="scaleToFill"></image>
								<text>暂无关注</text>
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
				active: 1,
				post: '',
				comment: '',
				reply: '',
				answer: '',
				topic: '',
				border_one:'',
				border_two: '',
				border_three: '',
				post_list: [],
				news_comment_list: [],
				reply_list: [],
				answer_list: [],
				focus_topics_list: [{'name':''}, {'name':''}, {'name':''}]
			};
		},
		methods:{
			redirect(index){
				uni.navigateTo({
					url:'/pages/dota/base/message/follow/follow'
				})
			},
			changeBorder(index){
				if(index == 1){
					this.active = 1;
					// this.post = '';
					// this.comment = 'border-right: 2upx solid rgb(225, 230, 235);';
					// this.reply = '';
					// this.answer = '';
					// this.topic = '';
				}
				if(index == 2){
					this.active = 2;
					// this.post = '';
					// this.comment = 'border-right: 2upx solid rgb(225, 230, 235);';
					// this.reply = '';
					// this.answer = '';
					// this.topic = '';
				}
				if(index == 3){
					this.active = 3;
					// this.post = '';
					// this.comment = 'border-right: 2upx solid rgb(225, 230, 235);';
					// this.reply = '';
					// this.answer = '';
					// this.topic = '';
				}
				if(index == 4){
					this.active = 4;
					// this.post = '';
					// this.comment = 'border-right: 2upx solid rgb(225, 230, 235);';
					// this.reply = '';
					// this.answer = '';
					// this.topic = '';
				}
				if(index == 5){
					this.active = 5;
					// this.post = '';
					// this.comment = 'border-right: 2upx solid rgb(225, 230, 235);';
					// this.reply = '';
					// this.answer = '';
					// this.topic = '';
				}
			}
		}
	}
</script>

<style lang="less">
	page{
		background: #FFFFFF;
		// background: rgb(225, 230, 235);
	}
	.container{
		width: 100%;
		height: 100%;
		// background: red;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		font-size: 25upx;
		color: #CCCCCC;
		
		.top{
			width: 100%;
			height: 100%;
			background: #000000;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image{
				width: 150upx;
				height: 150upx;
				will-change: transform;
			}
			.username{
				margin-top: 10upx;
				text{
					&:nth-child(2){
						background-color: #007AFF;
						color: #FFFFFF;
						border-radius: 10upx;
						font-size: 23upx;
					}
				}
			}
			.userId{
				margin-top: 10upx;
			}
			.progress_bar{
				margin-top: 10upx;
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				
				.level, .level_val{
					padding: 0upx 10upx;
					font-size: 25upx;
					color: #a1c5ea;
				}
				
				.progress{
					width: 60%;
					height: 100%;
					background: #252a32;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					// border-top-left-radius: 5upx;
					// border-bottom-left-radius: 5upx;
					.jindu{
						width: 20%;
						height: 15upx;
						border-top-left-radius: 10upx;
						border-bottom-left-radius: 10upx;
						background: linear-gradient(to right, #637890, #8299b4);
					}
				}
				
				.level_val{
					text{
						text{
							color: #C0C0C0;
						}
					}
				}
			}
			.signature{
				margin: 15upx 0upx;
			}
		}
		.content{
			width: 100%;
			height: 100%;
			background: rgb(225, 230, 235);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0upx;
			.nav{
				background: #FFFFFF;
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				padding: 20upx 0upx;
				.item{
					width: 33%;
					// background: red;
					text-align: center;
					font-size: 28upx;
					color: #CCCCCC;
					&:nth-child(1),&:nth-child(2){
						border-right: 1upx solid #CCCCCC;
					}
				}
			}
			.decorative{
				width: 100%;
				height: 30upx;
				background: #FFFFFF;
				margin: 30upx 0upx;
			}
			.list{
				// margin-top: 20upx;
				width: 100%;
				height: 100%;
				// background: orange;
				
				.list_nav{
					background: rgb(247, 248, 249);
					width: 100%;
					height: auto;
					
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					.item{
						flex: 1;
						padding: 20upx 0upx;
						text-align: center;
						font-size: 25upx;
						color: red;
						text-align: center;
						text-align: center;
						
						text{
							width: 100%;
							height: 100%;
							display: block;
							text-align: center;
							border-right: 2upx solid #C0C0C0;
							// background-color: orange;
							color: #3C3E49;
						}
						&:nth-child(5){
							// background-color: red;
							text{
								border-right: 0upx solid #C0C0C0 !important;
							}
						}
					}
					
				}
				
				.active{
					background: #FFFFFF;
					color: #000000;
					text{
						border: 0upx !important;
					}
				}
				
				.list_content{
					width: 100%;
					height: 100%;
					
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					
					.list_content_body{
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						position: relative;
						background: #FFFFFF;
						
						.list_item{
							width: 95%;
							height: auto;
							
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							
							color: rgb(143, 153, 163);
							margin-top: 10upx;
							
							.list_item_b{
								width: 100%;
								height: 100upx;
								// background: blue;
								background: rgb(247, 248, 249);
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
								padding: 10upx 5upx;
								margin-top: 20upx;
								
								.list_item_b_left{
									width: 65%;
									height: 100%;
									display: flex;
									flex-direction: row;
									justify-content: flex-start;
									align-items: center;
									// background: orange;
									margin-left: 15upx;
									.img{
										display: flex;
										flex-direction: row;
										justify-content: center;
										align-items: center;
										image{
											width: 80upx;
											height: 80upx;
											will-change: transform;
										}
									}
									.info{
										width: 100%;
										height: auto;
										// background: pink;
										display: flex;
										flex-direction: column;
										justify-content: center;
										align-items: flex-start;
										text{
											padding: 5upx 5upx;
											margin-left: 10upx;
										}
									}
								}
								.list_item_b_right{
									width: 35%;
									height: 100%;
									display: flex;
									flex-direction: row;
									justify-content: center;
									align-items: flex-start;
									// background: pink;
									image{
										width: 50upx;
										height: 50upx;
										will-change: transform;
									}
									text{
										font-size: 25upx;
										margin-top: 15upx;
									}
								}
							}
						}
						.no_message{
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: flex-start;
							align-items: center;
							
							// background: pink;
							position: fixed;
							top: 41%;
							bottom: 0;
							left: 0upx;
							right: 0upx;
							
							.no_message_content{
								margin-top: 300upx;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								image{
									width: 100upx;
									height: 100upx;
									will-change: transform;
								}
								text{
									margin-top: 20upx;
									font-size: 26upx;
									color: rgb(157, 166, 174);
								}
							}
							
						}
					}
				}
			}
		}
	}
</style>
