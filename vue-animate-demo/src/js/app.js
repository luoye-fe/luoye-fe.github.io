import Vue from 'vue';

import Dialog from './dialog.vue';

const App = new Vue({
	el: '#app',
	data: {
		dialog: {
			show: false,
			transition: ''
		},
		effects: [
			'bounce',
			'bounceDown',
			'bounceLeft',
			'bounceRight',
			'bounceUp',
			'fade',
			'fadeDown',
			'fadeDownBig',
			'fadeLeft',
			'fadeLeftBig',
			'fadeRight',
			'fadeRightBig',
			'fadeUp',
			'fadeUpBig',
			'rotate',
			'rotateDownLeft',
			'rotateDownRight',
			'rotateUpLeft',
			'rotateUpRight',
			'slideDown',
			'slideLeft',
			'slideRight',
			'slideUp',
			'zoom',
			'zoomDown',
			'zoomLeft',
			'zoomRight',
			'zoomUp',
		]
	},
	components: {
		'm-dialog': Dialog
	},
	methods: {
		showDialog(item) {
			this.dialog = {
				show: true,
				transition: item
			}
		}
	}
})