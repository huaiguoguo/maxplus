<template>
	<tui-drawer mode="left" :visible="leftNavStatus" @close="closeDrawer">
		<view class="d-container">
			<view class="container_body">
				<view class="userNav">
					<view class="userContent">
						<view class="userAvatar">
							<image src="/static/img/max+/rb_me.png" mode="aspectFit"></image>
						</view>
						<view class="userInfo">
							<view class="username">
								<view class="name">
									匿名玩家
								</view>
								<view class="level">
									LV.2
								</view>
							</view>
							<view class="userId">
								Max ID:10832261
							</view>
						</view>
					</view>
					<view @click="redirect('/pages/dota/base/ucenter/ucenter')" class="arrowright">
						<image src="/static/img/max+/bet_arrow.png" mode="aspectFit"></image>
					</view>
				</view>

				<view class="menu">
					<view class="uni-list uni-common-mt">
						<view @click="redirect('/pages/base/wallet/wallet')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_my_wallet.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">我的钱包</view>
							<view class="balanceInfo">
								<text class="balance">100</text>
								<image src="/static/img/max+/mcoin_big.png" mode="aspectFit"></image>
							</view>
						</view>
						<view @click="redirect('/pages/dota/base/task/task')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_quest_center.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">我的任务</view>
						</view>
						<view @click="redirect('/pages/dota/base/favorite/favorite')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_favour.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">我的收藏</view>
						</view>
						<view @click="redirect('/pages/dota/base/message/message')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_msg.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">我的消息</view>
						</view>

						<view @click="redirect('/pages/dota/base/mall/mall')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_mall.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">M币商城</view>
						</view>
						<view @click="redirect('/pages/dota/base/vipcenter/vipcenter')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_vip_center.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">会员中心</view>
						</view>


						<view @click="redirect('/pages/base/share/share')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_recommend.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">推荐给好友</view>
						</view>
						<view @click="redirect('/pages/dota/base/setting/setting')" class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="icon">
								<image src="/static/img/max+/drawer_setting.png" mode="aspectFit"></image>
							</view>
							<view class="uni-list-cell-navigate uni-navigate-right">设置</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 
					点击底部的任一个按钮  有以下步骤和动作
					1，菜单图标重叠
					2，点击的那个图片高亮换图标
					3，三个图标重叠，并且点击的那个图标放在最上面
				 -->

			<view class="footer_menu">
				<view class="fmenu">
					<view class="item dota" @click="enter(1)">
						<image src="/static/img/max+/ic_game_logo_dota2_normal.png" mode="aspectFit"></image>
					</view>
					<view class="item cs" @click="enter(2)">
						<image src="/static/img/max+/ic_game_logo_csgo_normal.png" mode="aspectFit"></image>
					</view>
					<view class="item ow" @click="enter(3)">
						<image src="/static/img/max+/ic_game_logo_ow_normal.png" mode="aspectFit"></image>
					</view>
					<view class="item download" @click="enter(4)">
						<image src="/static/img/max+/ic_game_logo_dac_normal.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="copyright">
					<image src="/static/img/max+/bottom_logo_in_drawer.png" mode="aspectFit"></image>
					<!-- <text class="company">MAX+</text> -->
				</view>
			</view>

			<!-- <button class="btn-primary" hover-class="btn-hover" @tap="closeDrawer">dota关闭抽屉</button> -->

		</view>
	</tui-drawer>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import tuiDrawer from '@/components/ThorUI/drawer/drawer.vue'
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	export default {
		components: {
			tuiDrawer,
			uniDrawer
		},
		data() {
			return {}
		},
		computed: {
			...mapState(['leftNavStatus', 'userName'])
		},
		methods: {
			closeDrawer(e) {
				this.$store.commit('setLeftNavStatus', false)
			},
			enter(type) {
				console.log(type);
			},
			redirect(url){
				uni.navigateTo({
					url: url
				});
				this.$store.commit('setLeftNavStatus', false)
			}
		},
	}
</script>

<style lang="less">
	* {
		padding: 0;
		margin: 0;
	}

	.tui-drawer-container {
		background: rgb(33, 41, 48);
	}

	.d-container {
		width: 550upx;
		height: 100%;
		background: rgb(33, 41, 48);
		// padding-right: 180upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;

		.container_body {
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			// background-color: blue;

			.userNav {
				width: 100%;
				// height: 100upx;
				// background: yellow;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				font-size: 35upx;
				color: #FFFFFF;
				// margin-top: 100upx;

				.userContent {
					width: auto;
					// height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;

					.userAvatar {
						width: auto;
						// height: 100%;
						// background: orange;

						image {
							width: 100upx;
							height: 100upx;
							will-change: transform;
						}
					}

					.userInfo {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
						// background: yellow;
						margin-left: 30upx;

						.username {
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;

							.name {
								width: 100%;
								height: 100%;
								// background-color: pink;
								text-align: center;
								font-weight: 550;
							}

							.level {
								width: 50upx;
								height: 30upx;
								line-height: 30upx;
								background: #0FAEFF;
								font-size: 15upx;
								border-radius: 5upx;
								margin-left: 10upx;
								text-align: center;
							}
						}

						.userId {
							width: 100%;
							// height: 100%;
							font-size: 25upx;
							font-weight: 550;
							color: #C0C0C0;
							margin-top: 10upx;
							// background: pink;
						}
					}
				}

				.arrowright {
					image {
						width: 30upx;
						height: 20upx;
						will-change: transform;
					}
				}
			}


			.menu {
				width: 100%;
				// height: 100%;
				// margin-top: 30upx;
				// background-color: red;

				.uni-list {
					width: 100%;
					height: 100%;
					margin-top: 5upx;
					padding: 10upx 0upx;
					// background: blue;
					font-size: 30upx;

					.uni-list-cell {
						// background-color: red;
						margin-top: 10upx;
						padding: 10upx 0upx;

						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;

						.icon {
							// background: pink;
							margin-left: 50upx;

							image {
								width: 45upx;
								height: 45upx;
								will-change: transform;
							}
						}

						.uni-list-cell-navigate {
							width: 100%;
							height: 50upx;
							line-height: 50upx;
							// background: orange;
							margin-left: 30upx;
							font-size: 27upx;
							color: #BCBCBC;
						}

						.balanceInfo {
							width: 100%;
							height: 100%;
							line-height: 100%;
							// background-color: red;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;

							.balance {
								font-size: 25upx;
								color: orange;
								// font-weight: 550;
							}

							image {
								// background: yellow;
								margin-left: 5upx;
								width: 50upx;
								height: 50upx;
								will-change: transform;
							}
						}
					}
				}
			}


		}

		.footer_menu {
			width: 100%;
			// height: 100%;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			// margin-top: 20%;
			// background: rgb(33, 41, 48);
			// background: rgb(20, 25, 30);

			align-self: flex-end;

			.fmenu {
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				// background: yellow;
				// margin-bottom: 30upx;

				.item {
					width: 100upx;
					height: 100upx;
					line-height: 100upx;
					position: relative;
					z-index: 9;

					&:nth-child(3) {
						animation: foldItem 2s infinite forwards;
					}

					image {
						width: 100upx;
						height: 100upx;
						will-change: transform;
					}
				}
			}

			.copyright {
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				margin-top: 30upx;
				// background-color: red;

				image {
					width: 100upx;
					height: 50upx;
					will-change: transform;
				}

				.company {
					font-size: 20upx;
					color: #FFFFFF;
				}
			}
		}

	}

	@keyframes foldItem {
		0% {
			// opacity: 1;
			// background: yellow;
			right: 0upx;
			z-index: 999;
		}

		100% {
			// opacity: 0;
			// background: red;
			right: 270upx;
			z-index: 999;
		}
	}
</style>
