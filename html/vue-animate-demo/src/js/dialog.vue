<template>
	<div class="dialog" v-show="dialog.show" :transition="dialog.transition">
		<div class="head">Title</div>
		<div class="middle">
			something
		</div>
		<div class="bottom">
			<a href="javascript:void(0)" @click="hide()">cancel</a>
			<a href="javascript:void(0)" @click="hide()">apply</a>
		</div>
	</div>
</template>


<style>

.dialog_bg{
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: transparent;
}
	
.dialog{
	background-color: #333;
	color: #fff;
	width: 400px;
	height: 280px;
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	margin-left: -200px;
	margin-top: -140px;
}
.head{
	color: #fff;
	background-color: rgba(69,155,234,1);
	line-height: 32px;
	font-size: 14px;
	padding: 0 8px;
	box-sizing: border-box;
}
.middle{
	flex: 1;
	padding: 10px 8px;
	box-sizing: border-box;
}
.bottom{
	text-align: right;
	padding: 0 8px;
	box-sizing: border-box;
	font-size: 0;
}
.bottom a{
	margin: 0 10px;
	color: #fff;
	font-size: 12px;
	line-height: 32px;
	text-decoration: none;
	display: inline-block;
	vertical-align: middle;

}

</style>

<script>

export default {
	name: 'Dialog',
	props: ['dialog'],
	methods: {
		hide() {
			this.dialog.show = false;
		}
	}
}


</script>