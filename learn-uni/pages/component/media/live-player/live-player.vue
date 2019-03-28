<template>
	<view>
		<live-player
			src="https://domain/pull_stream"
			autoplay
			@statechange="statechange"
			@error="error"
			style="width: 300px; height: 225px;"
		/>
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
