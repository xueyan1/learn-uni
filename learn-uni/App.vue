<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
.d_flex {
	display: flex;
}
.d_center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.d_between_center {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.d_column {
	flex-direction: column;
}
/* 边距 */
.mt_20 {
	margin-top: 40upx;
}
.p_l_r_30 {
	padding: 0 60upx;
}
/* 字重 */
.fw_700 {
	font-weight: 700;
}
.ff_Medium {
	font-family: PingFangSC-Medium;
}
</style>
