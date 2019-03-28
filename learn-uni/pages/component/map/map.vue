<template>
	<view class="p_l_r_30 mb_50">
		<map
			style="width: 100%; height: 300px;"
			:latitude="latitude"
			:longitude="longitude"
			:markers="covers"
		></map>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [
				{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/activity.png'
				},
				{
					latitude: 39.9,
					longitude: 116.39,
					iconPath: '../../../static/activity.png'
				}
			]
		};
	}
};
</script>

<style></style>
