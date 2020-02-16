<template>
	<view class="content">
		<uni-drawer :visible="false">
			<view style="padding:30rpx;">
				<view class="uni-title">抽屉式导航</view>
				<view class="uni-list uni-common-mt">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">Item1</view>
					</view>
					<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">Item2</view>
					</view>
				</view>
			</view>
		</uni-drawer>
		<view class="btn-box ">
			<button class="btn-primary" hover-class="btn-hover" @tap="lDrawer">从左边弹出</button>
		</view>
		<tui-drawer mode="left" :visible="leftDrawer" @close="closeDrawer">
			<view class="d-container">
				<button class="btn-primary" hover-class="btn-hover" @tap="closeDrawer">关闭抽屉</button>
			</view>
		</tui-drawer>

		<view v-if="hasLogin" class="hello">
			<view class="title">
				您好 {{userName}}，您已成功登录。
			</view>
			<view class="ul">
				<view>这是 uni-app 带登录模板的示例App首页。</view>
				<view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
			</view>
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好 游客。
			</view>
			<view class="ul">
				<view>这是 uni-app 带登录模板的示例App首页。</view>
				<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import tuiDrawer from '@/components/ThorUI/drawer/drawer.vue'

	export default {
		components: {
			uniDrawer,
			tuiDrawer
		},
		data() {
			return {
				leftDrawer: false,
				rightDrawer: false
			}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			this.sendRequest();
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		},
		methods: {
			sendRequest: function() {
				this.loading = true
				this.$api.goods({
					noncestr: Date.now()
				}).then((res) => {
					this.loading = false;
					console.log('request success', res)
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true
					});
					this.res = '请求结果 : ' + JSON.stringify(res);
				}).catch((err) => {
					this.loading = false;
					console.log('request fail', err);
				})
			},
			closeDrawer(e) {
				this.leftDrawer = false
				this.rightDrawer = false
			},
			rDrawer() {
				this.rightDrawer = true
			},
			lDrawer() {
				this.leftDrawer = true
			}
		},
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}
</style>
