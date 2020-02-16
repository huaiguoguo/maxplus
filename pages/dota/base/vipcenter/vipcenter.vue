<template>
	<view class="container">
		<view class="header">
			<view class="avatar">
				<image src="/static/img/max+/rb_me_click.png" mode="scaleToFill"></image>
			</view>
			<view class="user_level">
				<view class="username">
					<text>匿名玩家</text>
				</view>
				<view class="level_info">
					<text>开通会员尊享vip特权</text>
				</view>
			</view>
		</view>
		<view class="body">

			<view class="task">


				<view class="task_content invitation_tasks">
					<view class="task_title">
						<view class="task_title_left">
							<image src="/static/img/max+/band_icon_vip.png" mode="scaleToFill"></image>
							<text>会员套餐</text>
						</view>
						<view class="task_title_right">
							<text>本周会员名额剩余</text>
							<text class="right_arrow">1224</text>
							<text>名</text>
						</view>
					</view>
					<view v-for="(item, index) in vip" :key="'invitation_'+index" class="task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_content">
									<text>1个月会员</text>
									<text>￥30</text>
								</view>
								<view class="item_icon_discover">
									<image src="/static/img/max+/discount_bg.png" mode="scaleToFill"></image>
									<text>8折</text>
								</view>
							</view>
							<view class="item_right">
								<view class="block">
									<button>￥68</button>
								</view>
							</view>
						</view>
					</view>
					
					<view class="task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_content">
									<image src="/static/img/max+/vipcenter_input.png" mode="scaleToFill"></image>
									<input type="text" placeholder="输入内测激活码" value="" />
								</view>
							</view>
							<view class="item_right">
								<view class="block">
									<button>开通</button>
								</view>
							</view>
						</view>
					</view>
					
				</view>

				<view class="task_content answer_task">
					<view class="task_title">
						<view class="task_title_left">
							<image src="/static/img/max+/band_icon_svip.png" mode="scaleToFill"></image>
							<text>超级会员套餐</text>
						</view>
						<view class="task_title_right">
							<text>本周超级会员名额剩余</text>
							<text class="right_arrow">1224</text>
							<text>名</text>
						</view>
					</view>
					<view v-for="(item, index) in supper_vip" :key="'answer_'+index" class="task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_icon">
									<!-- <image src="/static/img/max+/ic_t_csgo.png" mode="scaleToFill"></image> -->
								</view>
								<view class="item_content item_content_supper_vip">
									<text>3个月超级会员</text>
									<!-- <text>+10经验值</text> -->
								</view>
							</view>
							<view class="supper_vip">
								<view class="block">
									<button>￥128</button>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				
				<view class="task_content answer_task">
					<view class="task_title">
						<view class="task_title_left">
							<image src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
							<text>会员特权</text>
						</view>
						<view class="task_title_right">
						</view>
					</view>
					<view v-for="(item, index) in vip_privilege" :key="'answer_'+index" class="task_list">
						<view class="task_item">
							<view class="item_left">
								<view class="item_icon">
									<image src="/static/img/max+/vipcenter_diamond.png" mode="scaleToFill"></image>
								</view>
								<view class="item_content">
									<text>尊贵身份</text>
									<text>vip会员尊贵标识(超级会员黑金标识)</text>
								</view>
							</view>
							<view class="item_right">
								<view class="block">
									<image src="../../../../static/img/max+/arrow_back_right_click.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- <view class="footer">
				<view class="task_rule">
					<text>查看任务规则</text>
				</view>
				<view class="line">
					
				</view>
				<view class="experience_rul">
					<text>查看经验规则</text>
				</view>
			</view> -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vip: [
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
				supper_vip: [
					{
						icon: '',
						name: 'abc'
					}
				],
				vip_privilege: [
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
			// background: rgb(20, 25, 30);
			background: #FFFFFF;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 20upx 0upx;
			
			font-size: 25upx;
			color: #000000;
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
						justify-content: space-between;
						align-items: center;
						font-size: 23upx;
						color: #000000;
						
						.task_title_left{
							// background: red;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
						}
						.task_title_right{
							// background: blue;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							color: rgb(153, 156, 160);
							text{
								&:nth-child(2){
									font-size: 25upx;
									font-weight: 550;
									color: #000000;
									// width: 80upx;
									// height: 50upx;
									padding: 0upx 10upx;
									line-height: 50upx;
									background: #FFFFFF;
									text-align: center;
									border-radius: 10upx;
									margin: 0upx 10upx;
								}
								
								&:nth-child(3){
									margin-right: 20upx;
								}
							}
						}
						
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

							width: 95%;
							height: 96upx;
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
								
								.item_content {
									height: 100%;
									display: flex;
									flex-direction: row;
									justify-content: space-between;
									align-items: center;
									// background: red;
									padding-left: 20upx;
									
									text{
										font-size: 23upx;
										// font-weight: ;
										.notice{
											color: #BCBCBC;
										}
										&:nth-child(2){
											margin-left: 15upx;
											color: #CCCCCC;
										}
									}
									
									
									image{
										width: 40upx;
										height: 40upx;
										will-change: transform;
									}
									
									input{
										font-size: 25upx;
										text-indent: 20upx;
									}
									
									
								}
								
								.item_content_supper_vip{
									color: #000000;
									font-weight: 550;
								}
								
								
								.item_icon_discover {
									width: auto;
									height: 100%;
									position: relative;
									margin-left: 15upx;
									image {
										width: 65upx;
										height: 30upx;
										will-change: transform;
									}
									text{
										width: 100%;
										height: auto;
										position: absolute;
										z-index: 999;
										top: 17%;
										left: 32%;
										font-size: 10upx;
										color: #FFFFFF;
									}
								}
								
								
								.item_icon{
									width: auto;
									height: 100%;
									image {
										width: 50upx;
										height: 50upx;
										will-change: transform;
									}
								}
								
								
							}

							.item_right {
								button{
									height: 50upx;
									line-height: 50upx;
									font-size: 25upx;
									color: #FFFFFF;
									background: orange;
									box-shadow: 0upx 0upx 10upx 1upx #CCCCCC;
									&::after{
										border: 4upx solid orange;
									}
								}
								
								image{
									width: 15upx;
									height: 25upx;
									will-change: transform;
								}
							}
							.supper_vip{
								
								button{
									height: 50upx;
									line-height: 50upx;
									font-size: 25upx;
									color: rgb(222, 179, 94);
									background: #000000;
									box-shadow: 0upx 0upx 10upx 1upx #CCCCCC;
									&::after{
										border: 0upx solid orange;
									}
								}
								
							}

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
