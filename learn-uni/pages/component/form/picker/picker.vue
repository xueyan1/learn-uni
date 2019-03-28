<template>
	<view class="p_l_r_30">
		<view class="mt_10">地区选择器</view>
		<picker :range="array" :value="index" @change="bindPickerChange">
			<view class="fontsize_28 mt_10">{{ array[index] }}</view>
		</picker>
		<view class="mt_20">时间选择器</view>
		<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
			<view class="fontsize_28 mt_10">{{ time }}</view>
		</picker>
		<view class="mt_20">日期选择器</view>
		<picker mode="date" :value="date" start="2018-9-1" end="2500-9-1" @change="bindDateChange">
			<view class="fontsize_28 mt_10">{{ date }}</view>
		</picker>
		<view class="mt_20">地址选择器</view>
		<picker mode="region" :value="add"  @change="bindAddChange">
			<view class="fontsize_28 mt_10">{{ add }}</view>
		</picker>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'picker',
			array: ['中国', '美国', '巴西', '日本'],
			index: 0,
			time: '12:01',
			date: '2018-9-1',
			add:"深圳"
		};
	},
	methods: {
		bindPickerChange(e) {
			this.index = e.target.value;
		},
		bindTimeChange(e) {
			this.time = e.target.value;
		},
		bindDateChange(e) {
			this.date = e.target.value;
		},
		bindAddChange(e){
			this.add = e.target.value;
		}
	}
};
</script>

<style></style>
