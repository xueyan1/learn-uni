<template>
	<view class="p_l_r_30 mb_50">
		<view class="fontsize_24 bb_eeeeee">视频</view>
		<video
			id="myVideo"
			src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			@error="videoErrorCallback"
			:danmu-list="danmuList"
			enable-danmu
			danmu-btn
			controls
		></video>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style></style>
