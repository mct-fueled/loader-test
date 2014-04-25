var g = g || {};

g.partials = ['load'];

g._init = function() {
	var self = this;
	for (var i = 0; i < this.partials.length; i++) {
		var partial = g[this.partials[i]];
		partial();
	}
};