modules.define(
	'preloader',
	[ 'i-bem__dom', 'jquery' ],
	function(provide, BEMDOM, $) {
		provide(BEMDOM.decl(this.name, {
			onSetMod: {
				js: {
					inited: function() {
						var _this = this;
						
						this.show();
						$(document).ready(function() {
							_this.domElem.animate({ opacity: 0 }, 500, _this.hide);
						});
					}
				}
			},
			show: function() {
				this.domElem.css('display', 'block');
			},
			hide: function() {
				$(this).css('display', 'none');
			}
		}));
	}
)