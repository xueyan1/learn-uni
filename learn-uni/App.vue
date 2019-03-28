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
/*  背景色 */
.red {
	background-color: red;
}
.blue {
	background-color: blue;
}
.green {
	background-color: green;
}
/*  背景 */
.bg_f8f8f8{
background-color: #f8f8f8;	
}


/* 字体 */
.fontsize_20{
	font-size: 20upx;
}
.fontsize_22{
	font-size: 22upx;
}
.fontsize_24{
	font-size: 24upx;
}
.fontsize_26{
	font-size: 26upx;
}
.fontsize_28{
	font-size: 28upx;
}
/* 边距 */
.mt_20 {
	margin-top: 20upx;
}
.mt_10 {
	margin-top: 10upx;
}
.p_l_r_30 {
	padding: 0 30upx;
}
.mb_50{
	margin-bottom: 50upx;
}
/* 字重 */
.fw_700 {
	font-weight: 700;
}
.ff_Medium {
	font-family: PingFangSC-Medium;
}

/* 下边线 */
.bb_eeeeee {
  border-bottom: 1rpx #eeeeee solid;
}

.b_1_E5E5E5_solid {
  border: 1px #e5e5e5 solid;
}
.b_1_FF3D33_solid {
border: 1px solid #FF3D33;
}


/*隐藏字段*/

.overflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*两排字  */

.overflow_scroll {
  text-align: center;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}


.paneltitle {
	height: 80upx;
	border-bottom: 1upx #eeeeee solid;
}
</style>
