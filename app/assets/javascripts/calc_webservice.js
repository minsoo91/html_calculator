window.CalcWebservice = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new CalcWebservice.Routers.Router({
  		$rootEl: $('#content')
  	});
  	Backbone.history.start(); 
  }
};

$(document).ready(function(){
  CalcWebservice.initialize();
});
