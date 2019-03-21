<template>
	<view class="p_l_r_30">
		<view class="paneltitle ff_Medium fw_700 mt_20">Scroll-view</view>
		<view class="mt_20">
			<scroll-view
				scroll-y="true"
				:scroll-top="scrollTop"
				class="scroll-y"
				@scrolltoupper="upper"
				@scrolltolower="lower"
				@scroll="scroll"
			>
				<view id="a1" class="scroll-item red">A</view>
				<view id="a2" class="scroll-item blue">B</view>
				<view id="a3" class="scroll-item green">C</view>
				<view id="a4" class="scroll-item yellow">D</view>
			</scroll-view>
		</view>
		<view @tap="goTop" class="mt_20 ">点击回到顶部</view>
		<view class="mt_20 ">横向滚动</view>
		<view class="">
			<scroll-view scroll-x="true" class="scroll-x" @scroll="scroll" scroll-left="120">
				<view id="a1" class="scroll-x-item red">A</view>
				<view id="a2" class="scroll-x-item blue">B</view>
				<view id="a3" class="scroll-x-item green">C</view>
				<view id="a4" class="scroll-x-item yellow">D</view>
			</scroll-view>
		</view>
		
		<view class="mt_20">
			注意点：:scrollTop前面的: 不能忘记！
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0,
			old: {
				scrollTop: 0
			}
		};
	},
	methods: {
		upper(e) {
			console.log(e);
		},
		lower(e) {
			console.log(e);
		},
		scroll(e) {
			this.old.scrollTop = e.detail.scrollTop;
		},
		goTop() {
			this.scrollTop = this.old.scrollTop;
			this.$nextTick(function() {
				this.scrollTop = 0;
			});
			uni.showToast({
				icon: 'none',
				title: '纵向滚动 scrollTop 值已被修改为 0'
			});
		}
	}
};
</script>

<style>
.red,
.blue,
.green {
	flex: 1;
	height: 200rpx;
}
.red {
	background-color: red;
}
.blue {
	background-color: blue;
}
.green {
	background-color: green;
}
.yellow {
	background-color: yellow;
}

.scroll-y {
	height: 300upx;
}
.scroll-view-item {
	height: 300upx;
	line-height: 300upx;
	text-align: center;
	font-size: 36upx;
}
.scroll-x {
	white-space: nowrap;
	width: 100%;
}
.scroll-x-item {
	display: inline-block;
	width: 100%;
	height: 300upx;
	line-height: 300upx;
	text-align: center;
	font-size: 36upx;
}
</style>
