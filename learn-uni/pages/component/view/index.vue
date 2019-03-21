<template>
	<view class="p_l_r_30">
		<view class="paneltitle ff_Medium fw_700 mt_20">View</view>
		<view class="mt_20">
			flex-direction: row
			<text>\n 横向布局</text>
		</view>
		<view class="d_flex mt_20">
			<view class="red d_center">A</view>
			<view class="blue d_center">B</view>
			<view class="green d_center">C</view>
		</view>
		<view class="mt_20">
			flex-direction: colum
			<text>\n 纵向布局</text>
		</view>
		<view class="d_flex d_column mt_20">
			<view class="red d_center ">A</view>
			<view class="blue d_center mt_20">B</view>
			<view class="green d_center mt_20">C</view>
		</view>
	</view>
</template>

<script></script>

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
</style>
