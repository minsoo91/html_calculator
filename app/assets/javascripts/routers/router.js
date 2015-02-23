CalcWebservice.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	routes: {
		'': 'index'
	},
	index: function () {
		var indexView = new CalcWebservice.Views.indexView();
		this._swapView(indexView);
	},
	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
})