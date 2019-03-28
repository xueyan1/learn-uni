<template>
	<view class="p_l_r_30">
		<view class="mt_20">
			表单组件在label内
			<checkbox-group @change="checkboxChange">
				<label v-for="item in checkboxItems" :key="item.name" class="checkbox">
					<checkbox :value="item.name" :checked="item.checked" />
					<view class="">
						{{item.name}}
					</view>
				</label>
				
				
			</checkbox-group>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkboxItems: [{
                    name: 'USA',
                    value: '美国'
                },
                {
                    name: 'CHN',
                    value: '中国',
                    checked: 'true'
                }
            ],
			};
		},
		methods:{
			checkboxChange(e){
				console.log(e)
				var checked = e.target.value
				var changed = {}
				
				for(let i = 0;i<this.checkboxItems.length;i++){
					if(checked.indexOf(this.checkboxItems[i].name)!==-1){
						changed['checkboxItems['+i+'].checked'] = false
					}else{
						changed['checkboxItems['+i+'].checked'] = true
					}
				}
				
			}
		}
	}
</script>

<style>

</style>
