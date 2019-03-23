<template>
	<view class="p_l_r_30">
		<form @submit="formSubmit" @reset="formReset">
			<view class="section section_gap mt_10">
				<view class="section__title">switch</view>
				<switch name="switch" />
			</view>
			<view class="section section_gap mt_10">
				<view class="section__title">slider</view>
				<slider name="slider" show-value></slider>
			</view>
			<view class="section mt_10">
				<view class="section__title">input</view>
				<input name="input" placeholder="please input here" />
			</view>
			<view class="section section_gap mt_10">
				<view class="section__title">radio</view>
				<radio-group name="radio-group">
				<label>
					<radio value="radio1" />radio1</label>
				<label>
					<radio value="radio2" />radio2</label>
				</radio-group>
			</view>
			<view class="section section_gap mt_10">
				<view class="section__title">checkbox</view>
				<checkbox-group name="checkbox">
					<label>
						<checkbox value="checkbox1" />checkbox1</label>
					<label>
						<checkbox value="checkbox2" />checkbox2</label>
				</checkbox-group>
			</view>
			<view class="btn-area mt_20">
				<button formType="submit">Submit</button>
				<button class="mt_10" formType="reset ">Reset</button>
			</view>
		</form>
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
