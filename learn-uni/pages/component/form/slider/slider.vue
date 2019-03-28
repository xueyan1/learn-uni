<template>
	<view class="p_l_r_30 mb_50">
		<view class="mt_10">
			设置step
		</view>
		<slider backgroundColor='red' block-size='20' block-color='gree'  @change="bindChange" step="5" value="5" max="200" show-value/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
