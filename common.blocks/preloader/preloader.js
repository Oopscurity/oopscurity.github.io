modules.define(
	'preloader',
	[ 'i-bem__dom', 'jquery' ],
	function(provide, BEMDOM, $) {
		provide(BEMDOM.decl(this.name, {
			onSetMod: {
				js: {
					inited: function() {
						var _this = this;
						$(document).ready(function() {
							_this.domElem.animate({ opacity: 0 }, 500, function() {
								_this.hide();
							})
						});
					}
				},
				visible: {
					'': function() {
						BEMDOM.destruct(this.domElem, false);
					}
				}
			},
			hide: function() {
				this.delMod('visible');
			}
		}));
	}
)