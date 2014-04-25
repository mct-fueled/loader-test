/**
 * URL HElper
 */

g.url = function() {
	var
		/**
		 * Cached this variable, for use in setTimeout...etc
		 * @memberOf	Url
		 * @private
		 * @type		object
		 */
		self = g.url;
	self.pathCache = [];
	self.domain = function(url) {
		var d = ((url) ? url.replace(/^https*:\/\/|(:|\/).*$/g, '') : location.hostname).split('.'),
			dl = d.length;
			return d.slice(dl - 2, dl).join('.');
	},
	self.section = function() {
		return ((location.pathname.split('/')[1] || '').match(/^[^\.]*$/) || [''])[0];
	},
	self.isSecure = function() {
		return location.protocol === 'https:';
	},
	self.params = function(param, query, regex) {
		var result = CN.utils.parseStr((query || location.search), (regex || 'query'));
		return (param) ? result[param] || '' : result;
	},
	self.path = function() {
		//if (self.pathCache.length === 0) {
		self.pathCache = location.pathname.match(/([^\/]+)/g) || ['']; // remove leading and trailing slash.
		//}
		return self.pathCache;
	},
	self.getFragment = function() {
		return location.hash.substring(1) || false;
	},
	self.setFragment = function(value) {
		location.hash = value || "";
		return self;
	},
	self.baseUrl = function() {
		var w = window.location;
		return w.protocol + "//" + w.host;
	};
	self.completeUrl = function() {
		var u = self.baseUrl() + '/' + self.path().join('/') + '/';
		var lastTwo = u.substr(u.length - 2);
		if(lastTwo === '//') {
			u = u.substring(0, u.length - 1);
		}
		return u;
	}
}