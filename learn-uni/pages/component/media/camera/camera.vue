<template>
	<view class="p_l_r_30 mb_50">
		<camera device-position="back" flash="off" @error="error" style="width: 100%;height: 300rpx;"></camera>
		<button type="primary" @click="takePhoto">拍照</button>
		<image :src="src" mode="widthFix"></image>
			<button type="primary" @click="choosePhoto">选择照片</button>
		<image :src="src_choose" mode="widthFix"></image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:"",
				src_choose:""
			};
		},
		methods:{
			takePhoto(){
				 const ctx = uni.createCameraContext();
				 ctx.takePhoto({
				 	 quality: 'high',
					success:(res) => {
						console.log(res)
						this.src = res.tempImagePath
					}
				 })
			},
			choosePhoto(){
				uni.chooseImage({
					success:(e) => {
						console.log(e.tempFilePaths)
						this.src_choose = e.tempFilePaths[0]
					}
				})
			}
		}
	}
</script>

<style>

</style>
