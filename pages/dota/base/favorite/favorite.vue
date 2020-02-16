<template>
	<view class="container">
		<view class="nav">
			<view @click="active = 1" :class="[active==1?'item news active':'item news']"> 
				<text>新闻</text>
			</view>
			<view @click="active = 2" :class="[active==2?'item post active':'item post']">
				<text>帖子</text>
			</view>
			<view @click="active = 3" :class="[active==3?'item anchor active':'item anchor']">
				<text>主播</text>
			</view>
			<view @click="active = 4" :class="[active==4?'item author active':'item author']">
				<text>作者</text>
			</view>
			<view @click="active = 5" :class="[active==5?'item match active':'item match']">
				<text>比赛</text>
			</view>
		</view>
		<view class="content">
			<view v-show="active == 1" class="list">
				<view v-for="(item, index) in [1,2,3,4,5,6]" :key="index" class="list_item">
					<view class="list_item_left">
						<image src="/static/img/max+/diy_picker7.png" mode="scaleToFill"></image>
					</view>
					<view class="list_item_right">
						<view class="list_item_right_top">
							<text>《刀塔霸业》更新了! 狼人变孤狼的奇幻旅程</text>
							<image src="/static/img/max+/icon_dota2_right.png" mode="scaleToFill"></image>
						</view>
						<view class="list_item_right_bottom">
							<view class="date">
								<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
								<text>3个月前</text>
							</view>
							<view class="looks">
								<image src="/static/img/max+/read.png" mode="scaleToFill"></image>
								<text>372902</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view v-show="active == 2" class="post_list">
				<view v-for="(item, index) in [1,2,3,4,5]" :key="'post_'+index" class="post_list_item">
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
			
			
			<view v-show="active == 3" class="anchor_list">
				<view v-if="anchor_list.length>0" v-for="(item, index) in anchor_list" :key="'anchor_'+index" class="anchor_list_item">
					
				</view>
				<view v-if="anchor_list.length<=0" class="empty">
					<image src="/static/img/max+/def_tag_favour.png" mode="scaleToFill"></image>
					<text>暂无收藏</text>
				</view>
			</view>
			
			<view v-show="active == 4" class="author_list">
				<view v-for="(item, index) in [1,2,3,4,5]" :key="'author_'+index" class="author_list_item">
					<view class="author_list_item_left">
						<view class="pic">
							<image src="/static/img/max+/diy_picker7.png" mode="scaleToFill"></image>
						</view>
						<view class="pic_content">
							<image src="/static/img/max+/user.jpg" mode="scaleToFill"></image>
							<text>小黑盒</text>
						</view>
					</view>
					<view class="author_list_item_right">
						<view class="author_list_item_right_top">
							<text>发现游戏, 分享快乐</text>
							<text>《刀塔霸业》12月28日更新: 修复友军怒火不友善的更新</text>
							<!-- <image src="/static/img/max+/icon_dota2_right.png" mode="scaleToFill"></image> -->
						</view>
						<view class="author_list_item_right_bottom">
							<view class="date">
								<image src="/static/img/max+/time.png" mode="scaleToFill"></image>
								<text>2天前</text>
							</view>
							<view class="looks">
								<!-- <image src="/static/img/max+/read.png" mode="scaleToFill"></image> -->
								<text>524篇新闻</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<view v-show="active == 5" class="match_list">
				<view class="mine_match">
					<view @click="expland(1)" class="match_type">
						<image :src="mine_match_pic" mode="scaleToFill"></image>
						<text>我的比赛</text>
					</view>
					<view  v-show="mine_match" class="match_list_item">
						<view class="match_list_item_left">
							<image src="/static/img/max+/2108395.png" mode="scaleToFill"></image>
							<text>EmpireH</text>
						</view>
						<view class="match_list_item_middle">
							<text>13天前</text>
						</view>
						<view class="match_list_item_right">
							<text>SNG</text>
							<image src="/static/img/max+/2108395.png" mode="scaleToFill"></image>
						</view>
					</view>
				</view>
				<view class="professional_match">
					<view @click="expland(2)" class="match_type">
						<image :src="professional_match_pic" mode="scaleToFill"></image>
						<text>职业比赛</text>
					</view>
					<view v-show="professional_match" class="match_list_item">
						<view class="match_list_item_left">
							<image src="/static/img/max+/2108395.png" mode="scaleToFill"></image>
							<text>EmpireH</text>
						</view>
						<view class="match_list_item_middle">
							<text>13天前</text>
						</view>
						<view class="match_list_item_right">
							<text>SNG</text>
							<image src="/static/img/max+/2108395.png" mode="scaleToFill"></image>
						</view>
					</view>
				</view>
				<view class="other_match">
					<view @click="expland(3)" class="match_type">
						<image :src="other_match_pic" mode="scaleToFill"></image>
						<text>其他比赛</text>
					</view>
					<view  v-show="other_match" class="match_list_item">
						<view class="match_list_item_left">
							<image src="/static/img/max+/2108395.png" mode="scaleToFill"></image>
							<text>EmpireH</text>
						</view>
						<view class="match_list_item_middle">
							<text>13天前</text>
						</view>
						<view class="match_list_item_right">
							<text>SNG</text>
							<image src="/static/img/max+/2108395.png" mode="scaleToFill"></image>
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
				anchor_list: [],
				mine_match: false,
				mine_match_pic: '/static/img/max+/hero_list_down.png',
				professional_match: false,
				professional_match_pic: '/static/img/max+/hero_list_down.png',
				other_match: false,
				other_match_pic: '/static/img/max+/hero_list_down.png',
			};
		},
		methods:{
			expland(index){
				if (index == 1) {
					this.mine_match = !this.mine_match;
					if(this.mine_match){
						this.mine_match_pic = '/static/img/max+/hero_list_right.png';
					}else{
						this.mine_match_pic = '/static/img/max+/hero_list_down.png';
					}
				}
				
				if (index == 2) {
					this.professional_match = !this.professional_match;
					if(this.professional_match){
						this.professional_match_pic = '/static/img/max+/hero_list_right.png';
					}else{
						this.professional_match_pic = '/static/img/max+/hero_list_down.png';
					}
				}
				
				if (index == 3) {
					this.other_match = !this.other_match;
					if(this.other_match){
						this.other_match_pic = '/static/img/max+/hero_list_right.png';
					}else{
						this.other_match_pic = '/static/img/max+/hero_list_down.png';
					}
				}
				
			}
		}
	}
</script>

<style lang="less">
	*{
		// margin: 0upx;
		// padding: 0upx;
	}
	page{
		background: rgb(225, 230, 235);
	}
	.container{
		width: 100%;
		height: 100%;
		background: rgb(225, 230, 235);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.nav{
			width:90%;
			height: 50upx;
			background: #CCCCCC;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius: 8upx;
			margin-top: 20upx;
			border: 1upx solid #000000;

			.item{
				width: 20%;
				height: 50upx;
				box-sizing: content-box;
				font-size: 25upx;
				color: #000000;

				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				&:nth-child(n+1){
					border-right: 1upx solid #000000;
				}
				&:last-child{
					border-right: 0upx solid #000000;
				}
			}
			.active{
				background: #000000;
				// border-top-left-radius: 8upx;
				// border-bottom-left-radius: 8upx;
				color: #FFFFFF;
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
			margin-top: 0upx;
			.list{
				width: 100%;
				height: 100%;
				// background: orange;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.list_item{
					width: 100%;
					height: 140upx;
					background: #FFFFFF;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					&:nth-child(n+2){
						margin-top: 20upx;
					}
					.list_item_left{
						width: auto;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						image{
							width: 250upx;
							height: 140upx;
							will-change: transform;
							border: 0upx;
						}
					}
					.list_item_right{
						width: 80%;
						height: 100%;
						// background: blue;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						font-size: 25upx;
						color: #C0C0C0;
						.list_item_right_top{
							width: 100%;
							height: 50%;
							// padding: 15upx 0upx;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: flex-start;
							// background: pink;
							text{
								padding: 15upx 10upx;
								color: #000000;
								font-weight: 550;
								font-size: 23upx;
							}
							image{
								width: 35upx;
								height: 35upx;
								will-change: transform;
							}
						}
						.list_item_right_bottom{
							width: 100%;
							height: 50%;
							padding: 15upx 0upx;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: flex-end;
							.date,.looks{
								// background: red;
								display: flex;
								flex-direction: row;
								justify-content: center;
								align-items: center;
								image{
									width: 20upx;
									height: 20upx;
									will-change: transform;
								}
								text{
									margin-left: 10upx;
									font-size: 20upx;
								}
							}
							.date{
								margin-left: 20upx;
							}
							.looks{
								margin-right: 20upx;
								image{
									width: 25upx;
									height: 15upx;
									will-change: transform;
								}
							}
						}
					}
				}
			}
		
			.post_list{
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 20upx;
				.post_list_item{
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: flex-start;
					// margin-top: 30upx;
					border-top: 1upx solid #ccc;
					padding: 20upx 0upx;
					background: #FFFFFF;
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
									height: 30upx;
									will-change: transform;
									margin-right: 5upx;
								}
								text{
									width: 30upx;
									height: 30upx;
									line-height: 25upx;
									// background: #00B26A;
								}
								.thumbs{
									// background: red;
									display: flex;
									flex-direction: row;
									justify-content: center;
									align-items: center;
									text{
										line-height: 35upx;
									}
								}
								.comment{
									// background: blue;
									margin-left: 30upx;
									display: flex;
									flex-direction: row;
									justify-content: center;
									align-items: center;
									text{
										line-height: 25upx;
									}
								}
							}
							
						}
					}	
				}
			}
		
		
			.anchor_list{
				width: 100%;
				height: 100%;
				background: #FFFFFF;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin: auto;
				.empty{
					
					background: #FFFFFF;
					position: absolute;
					left: 0;
					top: 90upx;
					bottom: 0;
					right: 0;
					
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					image{
						width: 100upx;
						height: 100upx;
						will-change: transform;
						margin-top: -30%;
					}
					text{
						font-size: 25upx;
						color: rgb(140, 150, 160);
						margin-top: 20upx;
					}
				}
			}
		
		
			.author_list{
				width: 100%;
				height: 100%;
				// background: orange;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.author_list_item{
					width: 100%;
					height: auto;
					background: #FFFFFF;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					&:nth-child(n+2){
						margin-top: 20upx;
					}
					.author_list_item_left{
						width: auto;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						.pic{
							width: 250upx;
							height: 140upx;
							overflow: hidden;
							image{
								width: 250upx;
								height: 140upx;
								will-change: transform;
								border: 0upx;
								filter: blur(5upx);
							}
						}
						
						.pic_content{
							position: absolute;
							z-index: 99;
							// left: 0;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							image{
								width: 65upx;
								height: 65upx;
								will-change: transform;
								border-radius: 65upx;
							}
							text{
								font-size: 22upx;
								color: #FFFFFF;
								margin-top: 10upx;
							}
						}
					}
					.author_list_item_right{
						width: 80%;
						height: 100%;
						// background: blue;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						font-size: 25upx;
						color: #C0C0C0;
						.author_list_item_right_top{
							width: 100%;
							height: 50%;
							// padding: 15upx 0upx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: flex-start;
							// background: pink;
							text{
								padding: 10upx 0upx 0upx 10upx;
								color: #000000;
								font-weight: 550;
								font-size: 23upx;
							}
							image{
								width: 35upx;
								height: 35upx;
								will-change: transform;
							}
						}
						.author_list_item_right_bottom{
							width: 100%;
							height: 50%;
							padding: 15upx 0upx;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: flex-end;
							.date,.looks{
								// background: red;
								display: flex;
								flex-direction: row;
								justify-content: center;
								align-items: center;
								image{
									width: 20upx;
									height: 20upx;
									will-change: transform;
								}
								text{
									margin-left: 10upx;
									font-size: 20upx;
								}
							}
							.date{
								margin-left: 20upx;
							}
							.looks{
								margin-right: 20upx;
								image{
									width: 25upx;
									height: 15upx;
									will-change: transform;
								}
							}
						}
					}
				}
			}
		
			
			.match_list{
				width: 100%;
				height: 100%;
				
				.mine_match, .professional_match,.other_match{
					width: 100%;
					height: auto;
					// background: red;
					font-size: 25upx;
					color: rgb(140, 150, 160);
					// margin-top: 20upx;
					// padding: 15upx 5upx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-start;
					&:nth-child(n+2){
						border-top: 1upx solid #CCCCCC;
					}
				}
				.mine_match{
					
				}
				.professional_match{}
				.other_match{}
				
				
				
				.match_type{
					width: 100%;
					height: 80upx;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					background: rgb(240, 242, 245);
					
					image{
						width: 20upx;
						height: 20upx;
						will-change: transform;
						margin-left: 20upx;
					}
					text{
						font-size: 30upx;
						font-weight: 520;
						color: rgb(40, 50, 60);
						margin-left: 5px;
					}
				}
				.match_list_item{
					width: 100%;
					height: 50upx;
					background: #FFFFFF;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 20upx 0upx;
					.match_list_item_left{
						height: 100%;
						flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						// background: orange;
						image{
							width: 50upx;
							height: 50upx;
							will-change: transform;
						}
						text{}
					}
					.match_list_item_middle{
						height: 100%;
						flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						// background: blue;
						text{}
					}
					.match_list_item_right{
						height: 100%;
						flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						// background: orange;
						text{}
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
</style>
