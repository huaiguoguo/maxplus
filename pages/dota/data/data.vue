<template>
	<view class="container">
		<view class="game">
			<view class="game_navigation">
				<view class="img">
					<image class="icon" src="/static/img/max+/band_icon_max.png" mode="scaleToFill"></image>
				</view>
				<view class="title">游戏资料</view>
			</view>
			<view class="game_content">
				<view @click="redirect(item.url)" v-for="(item, index) in games" :key="index" class="item">
					<view class="img">
						<image class="icon" :src="item.icon" mode=""></image>
					</view>
					<view class="name">{{item.name}}</view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="list_navigation">
				<view class="left">
					<view class="img">
						<image class="icon" src="/static/img/max+/band_icon_match.png" mode=""></image>
					</view>
					<view class="title">
						职业联赛
					</view>
				</view>
				<view class="right">
					<text class="select">巡回赛</text>
					<text class="select active">近期</text>
					<text class="select">全部</text>
				</view>
			</view>
			<view class="list_content">
				<view v-for="(item, index) in list" :key="index" class="item">
					<view class="left">
						<image :src="item.icon" mode=""></image>
					</view>
					<view class="right">
						<view class="title">
							{{item.name}}
						</view>
						<view class="rate">
							<text>$3000,000 660积分</text>
						</view>
						<view class="date">
							<view class="front">
								<text class="field">最近比赛</text>
								<text class="time">23小时前</text>
							</view>
							<view class="back">
								<text class="from">乌克兰:Minor</text>
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
				games: [{
						icon: '/static/img/max+/ic_data_hero_dota2.png',
						name: '英雄物品',
						url: '/pages/dota/data/HeroicObjects/HeroicObjects'
					},
					{
						icon: '/static/img/max+/ic_data_hero_ranking_dota2.png',
						name: '英雄榜',
						url: '/pages/dota/data/herolist/herolist'
					},
					{
						icon: '/static/img/max+/ic_data_offcial_rank.png',
						name: '官方榜单',
						url: '/pages/dota/data/officiallist/officiallist'
					},
					{
						icon: '/static/img/max+/ic_data_ladder_dota2.png',
						name: '天梯',
						url: '/pages/dota/data/highladder/highladder'
					},
					{
						icon: '/static/img/max+/ic_data_professional_team_dota2.png',
						name: '职业战队',
						url: '/pages/dota/data/professionalteam/professionalteam'
					},
					{
						icon: '/static/img/max+/ic_data_ladder_dota2.png',
						name: '知名玩家',
						url: '/pages/dota/data/famousplayer/famousplayer'
					},
					{
						icon: '/static/img/max+/ic_data_activity_dota2.png',
						name: '我的专题',
						url: '/pages/dota/data/datatopics/datatopics'
					},
					{
						icon: '/static/img/max+/ic_data_live_dota2.png',
						name: '数据直播',
						url: '/pages/dota/data/livedata/livedata'
					}
				],
				list: [{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},
					{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},
					{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},
					{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},
					{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},
					{
						icon: '/static/img/max+/skill_default_ow.png',
						name: '新加坡世界职业邀请赛'
					},
				]
			}
		},
		methods: {
			redirect(url){
				uni.navigateTo({ url: url })
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
		justify-content: center;
		align-items: center;

		.game {
			width: 100%;
			height: 100%;
			// background: #CCCCCC;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 0upx;

			.game_navigation {
				width: 100%;
				height: 60upx;
				line-height: 60upx;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				text-align: left;

				padding-left: 50upx;
				background: rgb(225, 230, 235);
				padding: 15upx 0upx;

				.img {
					width: 40upx;
					height: 40upx;
					line-height: 40upx;
					margin-left: 20upx;

					// background: pink;
					image {
						width: 100%;
						height: 100%;
						will-change: transform;
					}
				}

				.title {
					// background: orange;
					// line-height: 100%;
					color: rgb(61, 71, 80);
					font-size: 25upx;
				}

			}

			.game_content {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				align-content: center;

				.item {
					width: 22%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-top: 20upx;

					// background-color: red;
					.img {
						width: 76upx;
						height: 76upx;

						// background: yellow;
						image {
							width: 76upx;
							height: 76upx;
							will-change: transform;
						}
					}

					.name {
						font-size: 23upx;
						color: black;
						// background: #2C405A;
					}

					&:nth-child(n+5) {
						margin-top: 20upx;
					}
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
			margin-top: 30upx;

			.list_navigation {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background-color: rgb(225, 230, 235);
				padding: 15upx 0upx;

				.left {
					width: 30%;
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
					width: 45%;
					height: auto;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					// background: blue;
					.select {
						width: 100upx;
						height: 50upx;
						line-height: 50upx;
						font-size: 20upx;
						color: rgb(140, 150, 160);
						border-radius: 30upx;
						border: 1px solid #ccc;
						text-align: center;

					}

					.active {
						background-color: #FFFFFF;
						color: #000000;
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
					&:nth-child(n+2){
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

						.title {
							font-size: 25upx;
							color: rgb(61, 71, 80);
							font-weight: 550;
						}

						.date {
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							.front{
								width: 35%;
								display: flex;
								flex-direction: row;
								justify-content: space-between;
								align-items: center;
								// background: red;
								.field{
									// background: blue;
								}
								.time{
									// background-color: pink;
								}
							}
							.back{
								width: 50%;
								padding-right: 20upx;
								text-align: right;
								// background: red;
							}
						}
					}
				}

			}
		}



	}
</style>
