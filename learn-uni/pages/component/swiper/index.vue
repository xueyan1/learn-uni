<template>
	<view>
		<swiper
			:indicator-dots="indicatorDots"
			:autoplay="autoplay"
			:interval="interval"
			:duration="duration"
		>
			<swiper-item><view class="swiper-item red"></view></swiper-item>
			<swiper-item><view class="swiper-item green"></view></swiper-item>
			<swiper-item><view class="swiper-item blue"></view></swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	}
};
</script>

<style>
.swiper-item {
	height: 300upx;
}
</style>
