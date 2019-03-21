<template>
	<view>
		<movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChange">	
				点我
			</movable-view>
			
			
			
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x:0,
				y:0,
				old:{
					x:0,
					y:0
				}
			};
		},
		methods:{
			onChange(e){
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			}
		}
	}
</script>

<style>
	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150upx;
		width: 150upx;
		background-color: #007AFF;
		color: #fff;
	}

	movable-area {
		height: 300upx;
		width: 100%;
		background-color: #D8D8D8;
		overflow: hidden;
	}

</style>
