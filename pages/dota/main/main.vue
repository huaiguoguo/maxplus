<template>
	<view class="content">
		<drawer />

		<view class="logo">
			<image src="/static/img/max+/dota2_logo.png" mode="scaleToFill"></image>
		</view>

		<view class="input">
			<input type="text" value="" placeholder="输入游戏角色名称" />
		</view>

		<view class="btn-box btn-bind">
			<button type="btn-primary">搜索并绑定账号</button>
		</view>

		<view class="line">
			<view class="left"></view>
			<text>OR</text>
			<view class="right"></view>
		</view>

		<view class="btn-box btn-renzheng">
			<button type="primary" @tap="ShowDrawer">通过Steam认证</button>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import drawer from '@/components/custom/drawer.vue'

	export default {
		components: {
			drawer
		},
		data() {
			return {}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName', 'leftNavStatus']),
		onLoad() {
			// this.sendRequest();
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
			ShowDrawer(e) {
				this.$store.commit('setLeftNavStatus', true)
			},
			closeDrawer(e) {
				this.$store.commit('setLeftNavStatus', false)
			}
		},
	}
</script>

<style lang="less">
	.content {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		background-image: url(/static/img/max+/ow_data_input_bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;

		.logo {
			text-align: center;
			width: auto;
			height: auto;
			margin-bottom: 50upx;
			image {
				width: 300upx;
				height: 180upx;
			}
		}

		.input {
			width: 80%;
			input{
				width: 100%;
				height: 80upx;
				text-align: center;
				background: #fff;
				border-radius: 10upx;
				color: #CCCCCC;
				
			}
			input[placeholder]{
				background: red;
			}
		}

		.btn-box {
			width: 80%;
			height: auto;
			// background-color: yellow;
			border: 0upx;
			font-family: "YaHei";
			button{
				width: 100%;
				height: 80upx;
				background: rgb(198, 57, 57);
				color: #FFFFFF;
				font-size: 30upx;
				border: 0upx;
			}
		}
		
		.btn-bind{
			margin-top: 50upx;
		}
		
		.btn-renzheng{
			margin-top: 30upx;
		}

		.line {
			width: 100%;
			height: auto;
			margin-top: 30upx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			
			text{
				margin: 0upx 10upx;
				color: #C0C0C0;
				font-size: 30upx;
			}
			
			.left, .right{
				width: 80upx;
				height: 3upx;
				background: #ccc;
			}
			.right{
				background: #ccc;
			}
		}

		.btn-renzheng {}
	}
</style>
