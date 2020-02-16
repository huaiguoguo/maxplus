<template>
	<view class="container">
		<view class="navigate">
			<view @click="active = 1" class="left_nav">
				<text>饰品竞猜</text>
				<view class="up">
					<image v-show="active==1" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
			<view @click="active = 2" class="right_nav">
				<text>M币竞猜</text>
				<view class="up">
					<image v-show="active==2" src="/static/img/max+/hero_list_up.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="min_navigate">
				<view class="kucun min_item">
					<view class="min_item_icon">
						<image src="/static/img/max+/my_repository.png" mode="scaleToFill"></image>
					</view>
					<view class="min_item_title">
						<text>我的库存</text>
					</view>
				</view>
				<view class="line"></view>
				<view class="paiming min_item">
					<view class="min_item_icon">
						<image src="/static/img/max+/bet_famous.png" mode="scaleToFill"></image>
					</view>
					<view @click="redirect('rank')" class="min_item_title">
						<text>我的排名</text>
					</view>
				</view>
				<view class="line"></view>
				<view class="jingcai min_item">
					<view class="min_item_icon">
						<image src="/static/img/max+/my_bet.png" mode="scaleToFill"></image>
					</view>
					<view  @click="redirect('jingcai')" class="min_item_title">
						<text>我的竞猜</text>
					</view>
				</view>
			</view>
			<view class="match_info">
				<text>可用库存: 0.00</text>
				<text>竞猜: 0.00</text>
			</view>
			<view class="list">
				<view v-for="(item, index) in list" :key="index" class="item">
					<view @click="changeShow(index)" class="main_item">
						<view class="left">
							<view class="list_icon l_icon">
								<image :src="item.icon" mode="scaleToFill"></image>
							</view>
							<view class="list_title l_title">
								<text>{{item.name}}</text>
							</view>
						</view>
						<view class="center">
							<view class="status">
								<text>竞猜中</text>
							</view>
							<view class="time_notice">
								<text>{{item.time_notice}}分钟后</text>
							</view>
							<view class="info">
								<text>{{item.info}}</text>
							</view>
						</view>
						<view class="right">
							<view class="list_icon r_icon">
								<image :src="item.icon" mode="scaleToFill"></image>
							</view>
							<view class="list_title r_title">
								<text>{{item.name}}</text>
							</view>
						</view>
					</view>
					
					<view v-show="main_active.index == index && main_active.show == true" class="sub_list">
						<view v-for="(sub_item, sub_index) in sub_list" :key="sub_index" class="sub_item">
							<view class="sub_item_left">
								<view class="sub_item_title sub_item_left_l_icon">
									<text>0.42</text>
								</view>
								<view class="sub_item_title sub_item_left_l_title">
									<text>赔率</text>
								</view>
							</view>
							<view class="sub_item_center">
								<view class="sub_item_center_status">
									<text>猜胜负</text>
								</view>
								<view class="sub_item_center_time_notice">
									<text>00:00</text>
								</view>
							</view>
							<view class="sub_item_right">
								<view class="sub_item_right_content">
									<view class="sub_item_title sub_item_right_r_title">
										<text>2.15</text>
									</view>
									<view class="sub_item_title sub_item_right_r_title">
										<text>赔率</text>
									</view>
								</view>
								<view class="sub_item_right_icon sub_item_right_r_icon">
									<image src="/static/img/max+/right_arrow.png" mode="scaleToFill"></image>
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
	import uniNavBar from "@/components/uni/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				main_active: {
					index: null,
					show: false
				},
				active: 1,
				list: [{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					},
					{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					},
					{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					},
					{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					},
					{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					}
				],
				sub_list: [{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					},
					{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					},
					{
						icon: '/static/img/max+/111474.png',
						name: 'Ambush',
						status: 1,
						time_notice: '8分钟后',
						info: '[CSGO]EGB Siberian Frost BO3'
					}
				]
			};
		},
		methods:{
			changeShow(index){
				this.main_active.index =index;
				this.main_active.show = !this.main_active.show;
			},
			redirect(type){
				if(type == 'rank'){
					uni.navigateTo({
						url: '/pages/dota/match/rank/rank'
					})
				}
				if(type == 'jingcai'){
					uni.navigateTo({
						url: '/pages/dota/match/myjingcai/myjingcai'
					})
				}
			}
		}
		
	}
</script>

<style lang="less">
	* {
		padding: 0;
		margin: 0;
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.navigate {
			width: 100%;
			height: 100%;
			background-color: rgb(20, 25, 30);
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size: 25upx;
			padding: 0upx 0upx;
			color: #C0C0C0;

			.left_nav {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				// background: red;
				text-align: center;

			}

			.right_nav {
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

		.content {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.min_navigate {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				background: #FFFFFF;
				margin-top: 30upx;

				.min_item {
					width: 20%;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 30upx 0upx;

					// background: blue;
					.min_item_icon {
						width: 35upx;
						height: 35upx;
						line-height: 35upx;

						// background: red;
						image {
							width: 100%;
							height: 100%;
							will-change: transform;
						}
					}

					.min_item_title {
						// background: yellow;
						height: 35upx;
						line-height: 35upx;
						margin-left: 10upx;
						font-size: 23upx;
					}

					// &:nth-child(1),&:nth-child(2){
					// 	border-right: 1upx solid #ccc;
					// }
				}

				.line {
					width: 1upx;
					height: 35upx;
					background: #ccc;
				}
			}

			.match_info {
				width: 100%;
				height: 50upx;
				line-height: 50upx;
				text-align: left;
				font-size: 25upx;
				// background-color: red;
				margin: 15upx 0upx;

				// align-self: flex-start;
				text {
					margin-left: 30upx;
				}

				color: rgb(89, 91, 93);
			}

			.list {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #FFFFFF;

				.item {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.main_item {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						font-size: 25upx;
						margin-top: 0upx;
						padding: 20upx 0upx;

						// background: orange;
						&:nth-child(n+2) {
							border-top: 1upx solid #ccc;
						}

						image {
							width: 150upx;
							height: 80upx;
							will-change: transform;
						}

						.list_icon {}

						.list_title {
							// font-size: 25upx;
							font-weight: 550;
							// padding: 5upx 0upx;
						}

						.left {
							width: 25%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							// background: yellow;

						}

						.center {
							width: 50%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							text-align: center;
							font-size: 25upx;
							// background: red;
							padding: 0upx 10upx;

							.status {
								width: 150upx;
								height: 50upx;
								line-height: 50upx;
								border-radius: 50upx;
								background: rgb(61, 144, 39);
								text-align: center;
								font-size: 23upx;
								color: #FFFFFF;
							}

							.time_notice {
								width: 100%;
								height: 70upx;
								line-height: 70upx;
								// border-radius: 50upx;
								// background: green;
								text-align: center;
								font-size: 22upx;
								font-weight: 520;
								color: black;
							}

							.info {
								width: 100%;
								height: 100%;
								color: #CCCCCC;
								font-size: 15upx;
							}
						}

						.right {
							width: 25%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							// background: yellow;
						}

					}
				
					
					.sub_list {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background: rgb(241, 242,243);
					
						.sub_item {
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							font-size: 25upx;
							margin-top: 0upx;
							padding: 20upx 0upx;
					
							// background: orange;
							&:nth-child(n+2) {
								border-top: 1upx solid #ccc;
							}

							.sub_item_title {
								// font-size: 25upx;
								// font-weight: 550;
								// padding: 5upx 0upx;
								&:nth-child(odd){
									color: rgb(131, 112, 76);
								}
							}
					
							.sub_item_left {
								width: 25%;
								height: 100%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								// background: yellow;
					
							}
					
							.sub_item_center {
								width: 50%;
								height: 100%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								text-align: center;
								font-size: 25upx;
								// background: red;
								padding: 0upx 10upx;
					
								.sub_item_center_status {
									width: 150upx;
									height: 50upx;
									line-height: 50upx;
									border-radius: 50upx;
									background: rgb(61, 144, 39);
									text-align: center;
									font-size: 23upx;
									color: #FFFFFF;
								}
					
								.sub_item_center_time_notice {
									width: 100%;
									height: 70upx;
									line-height: 70upx;
									// border-radius: 50upx;
									// background: green;
									text-align: center;
									font-size: 22upx;
									font-weight: 520;
									color: black;
								}
					
								.sub_item_center_info {
									width: 100%;
									height: 100%;
									color: #CCCCCC;
									font-size: 15upx;
								}
							}
						}
						
						
						.sub_item_right {
							width: 25%;
							height: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							// background-color: orange;
							.sub_item_content{
								width: 50%;
								height: 100%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								// background: yellow;
							}
							.sub_item_right_icon{
								width: 15upx;
								height: 20upx;
								// background-color: red;
								margin-right: 20upx;
								image {
									width: 100%;
									height: 100%;
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
