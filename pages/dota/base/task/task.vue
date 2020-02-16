<template>
	<view class="container">
		<view class="header">
			<view class="avatar">
				<image src="/static/img/max+/rb_me_click.png" mode="scaleToFill"></image>
			</view>
			<view class="user_level">
				<view class="username">
					匿名玩家
				</view>
				<view class="level_info">
					<view class="level"> Lv3 </view>
					<view class="progress"></view>
					<view class="task_rate"> 0/120 </view>
				</view>
			</view>
		</view>
		<view class="body">
			<view class="user_info">
				<view class="user_wallet">
					<view class="wallet_left">
						<text>可用M币:<text>0</text></text>
						<image src="/static/img/max+/mcoin_big.png" mode="scaleToFill"></image>
					</view>
					<view class="wallet_right">
						<image src="/static/img/max+/market_orange.png" mode="scaleToFill"></image>
						<text>去兑换</text>
						<text class="right_arrow">>></text>
					</view>
				</view>
				<view class="user_progress">
					<view class="user_progress_notice">
						<text>今日可领取M币</text>
					</view>
					<view class="user_progress_content">
						<view class="progress_top">
							<text>220</text>
							<image src="/static/img/max+/mcoin_big.png" mode="scaleToFill"></image>
						</view>
						<view class="progress_middle">
							<view class="jindu">
								
							</view>
						</view>
						<view class="progress_bottom">
							<text>20</text>
							<image src="/static/img/max+/mcoin_big.png" mode="scaleToFill"></image>
						</view>
					</view>
				</view>
			</view>

			<view class="task">
				<view class="task_content daily">
					<view class="task_title">
						<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
						<text>每日任务</text>
					</view>
					<view class="sign_in task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_icon">
									<image src="/static/img/max+/ic_t_csgo.png" mode="scaleToFill"></image>
								</view>
								<view class="item_content">
									<text>签到<text class="notice">(连续7天以上奖励翻倍哟)</text></text>
									<text>+10经验值, +10M币</text>
								</view>
							</view>
							<view class="item_right">
								<text>已连续签到</text>
								<text>2天</text>
							</view>
						</view>
					</view>
				</view>

				<view class="task_content supplementary_sign">
					<view class="task_title">
						<text>我要补签</text>
						<image src="/static/img/max+/bet_arrow_down.png" mode="scaleToFill"></image>
					</view>
					<view v-for="(item, index) in daily_tasks" :key="'daily_'+index" class="task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_icon">
									<image src="/static/img/max+/ic_t_csgo.png" mode="scaleToFill"></image>
								</view>
								<view class="item_content">
									<text>分享新闻或帖子到社交平台</text>
									<text>+10经验值</text>
								</view>
							</view>
							<view class="item_right">
								<button>去完成</button>
							</view>
						</view>
					</view>
				</view>


				<view class="task_content invitation_tasks">
					<view class="task_title ">
						<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
						<text>邀请任务</text>
					</view>
					<view v-for="(item, index) in invitation_tasks" :key="'invitation_'+index" class="task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_icon">
									<image src="/static/img/max+/ic_t_csgo.png" mode="scaleToFill"></image>
								</view>
								<view class="item_content">
									<text>邀请好友(邀请码:10832260)</text>
									<text>+10经验值</text>
								</view>
							</view>
							<view class="item_right">
								<view class="block">
									<button>马上邀请</button>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="task_content answer_task">
					<view class="task_title">
						<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
						<text>答题任务</text>
					</view>
					<view v-for="(item, index) in answer_tasks" :key="'answer_'+index" class="task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_icon">
									<image src="/static/img/max+/ic_t_csgo.png" mode="scaleToFill"></image>
								</view>
								<view class="item_content">
									<text>完成社区礼仪考试</text>
									<text>+10经验值</text>
								</view>
							</view>
							<view class="item_right">
								<view class="block">
									<button>马上答题</button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="footer">
				<view class="task_rule">
					<text>查看任务规则</text>
				</view>
				<view class="line">
					
				</view>
				<view class="experience_rul">
					<text>查看经验规则</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				daily_tasks: [
					{
						icon: '',
						name: 'abc'
					},
					{
						icon: '',
						name: 'abc'
					},
					{
						icon: '',
						name: 'abc'
					},
					{
						icon: '',
						name: 'abc'
					}
				],
				invitation_tasks: [
					{
						icon: '',
						name: 'abc'
					}
				],
				answer_tasks: [
					{
						icon: '',
						name: 'abc'
					},
					{
						icon: '',
						name: 'abc'
					}
				]
			};
		}
	}
</script>

<style lang="less">
	.container {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.header {
			width: 100%;
			height: 40%;
			background: rgb(20, 25, 30);
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 20upx 0upx;
			
			font-size: 25upx;
			color: #FFFFFF;
			.avatar{
				width: 20%;
				image{
					width: 100upx;
					height: 100upx;
					margin-left: 20upx;
					will-change: transform;
					// background: red;
				}
			}
			.user_level{
				width: 100%;
				// background: red;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				.username{
					font-size: 25upx;
					font-weight: 550;
				}
				.level_info{
					width: 100%;
					margin-top: 10upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					font-size: 23upx;
					.level{
						// background: pink;
						color: rgb(100, 123, 147);
					}
					.progress{
						width: 75%;
						height: 5upx;
						background: #CCCCCC;
						border-radius: 10upx;
					}
					.task_rate{
						// background: blue;
						margin-right: 10upx;
					}
				}
			}
		}

		.body {
			width: 100%;
			height: 80%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			// background: red;

			.user_info {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				.user_wallet {
					width: 100%;
					height: 100%;
					padding: 20upx 0upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					
					background: orange;
					
					font-size: 25upx;
					color: #FFFFFF;
					
					.wallet_left{
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						text{
							margin-left: 20upx;
							font-size: 20upx;
							text{
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
					.wallet_right{
						padding: 10upx 20upx;
						margin-right: 20upx;
						background: #FFFFFF;
						color: orange;
						border-radius: 20upx;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						font-size: 23upx;
						image{
							width: 20upx;
							height: 20upx;
							will-change: transform;
						}
						
						text{
							&:nth-child(2){
								margin:0upx 10upx;
								// background: red;
							}
						}
						
						.right_arrow{
							font-size: 20upx;
						}
						
					}
				}

				.user_progress {
					width: 100%;
					height: 100%;
					margin: 20upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.user_progress_notice{
						font-size: 25upx;
						color: #CCCCCC;
						margin-top: 20upx;
					}
					.user_progress_content{
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						font-size: 22upx;
						// background: red;
						margin-top: -10upx;
						
						.progress_top{
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: flex-end;
							align-items: center;
							text-align: right;
							// background: red;
							color: #CCCCCC;
							font-size: 22upx;
							image{
								margin-right: 20upx;
							}
							
						}
						.progress_middle{
							width: 100%;
							height: 100%;
							background: #CCCCCC;
							.jindu{
								width: 20%;
								height: 20upx;
								background: orange;
							}
						}
						.progress_bottom{
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							text-align: right;
							
							text-align: left;
							color: orange;
							font-size: 22upx;
							font-weight: 550;
							
							text{
								margin-left: 30upx;
							}
						}
					}

					image{
						width: 25upx;
						height: 25upx;
						will-change: transform;
					}
				}
			}

			.task {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.task_content {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.task_title {
						width: 100%;
						height: 70upx;
						background: rgb(225, 230, 235);
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						font-size: 23upx;
						color: #000000;
						
						image {
							margin-left: 20upx;
							width: 30upx;
							height: 30upx;
							will-change: transform;
						}
					}

					.task_list {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						
						font-size: 30upx;
						
						&:nth-child(n+3){
							.task_item{
								border-top: 1upx solid rgb(240, 242, 245);
							}
						}
						
						
						.task_item {

							width: 90%;
							height: 146upx;
							background-color: #FFFFFF;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							padding: 0upx 15upx;
							
							.item_left{
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								align-items: center;
								.item_icon {
									width: auto;
									height: 100%;
									image {
										width: 50upx;
										height: 50upx;
										will-change: transform;
									}
								}
								
								.item_content {
									height: 100%;
									display: flex;
									flex-direction: column;
									justify-content: center;
									align-items: flex-start;
									// background: red;
									padding-left: 20upx;
									
									text{
										font-size: 23upx;
										// font-weight: ;
										.notice{
											color: #BCBCBC;
										}
										&:nth-child(2){
											margin-top: 15upx;
											color: orange;
										}
									}
								}
							}

							.item_right {
								button{
									font-size: 25upx;
									color: orange;
									background: #FFFFFF;
									&::after{
										border: 4upx solid orange;
									}
								}
							}

						}
					}
				}
			
				.supplementary_sign{
					.task_title{
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						color: #FFFFFF;
						padding-left: 0upx;
						background: linear-gradient(to right, rgb(255, 153, 39), rgb(255, 198, 39));
						text{
							font-size: 25upx;
						}
						image{
							margin-left: 10upx;
							width: 20upx;
							height: 10upx;
							will-change: transform;
						}
					}
				}
			}
			.sign_in{
				.item_right{
					width: 180upx;
					height: 120upx;
					color: rgb(140, 150, 160);
					background: rgb(240, 242, 245);
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					border-radius: 10upx;
					text{
						font-size: 28upx;
						&:nth-child(2){
							font-size: 40upx;
							margin-top: 10upx;
						}
					}
				}
			}
			
			.footer{
				width: 100%;
				height: 150upx;
				line-height: 150upx;
				// margin-top: 40upx 0upx;
				background: rgb(225, 230, 235);
				text-align: center;
				
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				
				.task_rule, .experience_rul{
					color: rgb(140, 150, 160);
					font-size: 25upx;
				}
				.line{
					width: 2upx;
					height: 20upx;
					background: rgb(140, 150, 160);
					margin: 0 10upx;
				}
				
				.experience_rul{}
				
				text{
					
					
					&:nth-child(1), &:nth-child(3){
						// padding: 0upx 15upx;
					}
					&:nth-child(2){
						
					}
				}
			}
		}
	}
</style>
