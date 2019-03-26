<template>
	<view class="p_l_r_30">
		<view class="mt_10">
			可自动聚焦的
			<input type="text" focus value="" placeholder="自动获得聚焦" />
		</view>
		<view class="mt_20">
			键盘右下角按钮显示为搜索
			<input type="text" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" />
		</view>
		<view class="mt_20">
			最大输入长度为10
			<input
				type="text"
				confirm-type="search"
				maxlength="10"
				placeholder="最大输入长度为10"
			/>
		</view>
		<view class="mt_20">
			实时获取输入值：{{ inputValue }}
			<input type="text" value="" @input="onKeyInput" placeholder="输入同步到view中" />
		</view>
		<view class="mt_20">
			控制输入的input：{{ inputValue }}
			<input
			
				type="text"
				@input="replaceInput"
				v-model="changeValue"
				placeholder="连续的两个1"
			/>
		</view>
		
		<view class="mt_20">
			控制键盘input
			<input type="text" ref="input1" @input="hideKeyboard" placeholder="输入123自动收起键盘"  />
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			inputValue: '',
			changeValue:''
		};
	},
	methods: {
		onKeyInput(e) {
			this.inputValue = e.target.value;
		},
		replaceInput(e){
			let value = e.target.value
			if(value == '11'){
				this.changeValue = '2'
			}
		},
		//输入123隐藏键盘
		hideKeyboard(e){
			let value= e.target.value
			if(value === '123'){
				un.hideKeyboard()
			}
		}
	}
};
</script>

<style></style>
