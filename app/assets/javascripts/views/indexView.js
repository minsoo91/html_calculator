CalcWebservice.Views.indexView = Backbone.View.extend({
	className: "calculatorContainer",
	template: JST['calculator/index'],
	events: { "mouseenter .button": "highlightButton",
			  "mouseleave .button": "unhighlightButton",
			  "click .button": "addToExpression"},
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	highlightButton: function (e) {
		var $button = $(e.target);
		$button.css('opacity', 0.5);
	},
	unhighlightButton: function (e) {
		var $button = $(e.target);
		$button.css('opacity', 0);
	},
	addToExpression: function(e) {
		var $button = $(e.target);
		alert($button.data("value"));
	}

})