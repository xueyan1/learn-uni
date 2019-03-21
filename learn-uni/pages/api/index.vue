<template>
	<view>
		<view class="">
			flex-direction: row
			<text>\n 横向布局</text>
		</view>
		<view class="d_flex">
			<view class="red">A</view>
			<view class="blue">B</view>
			<view class="green">C</view>
		</view>
	</view>
</template>

<script></script>

<style>
.d_flex {
	display: flex;
	height: 200upx;
	width: 100%;
}
.red {
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: red;
}
.blue {
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: blue;
}
.green {
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: green;
}
</style>
