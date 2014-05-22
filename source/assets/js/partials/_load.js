/**
 * Loading function
 */

g.load = function() {
	var self = g.load;

	// Setting up the jQuery address plugin

	self.address = {
		flag: null,
		setup: function() {
			// $('[data-js="load-page"]').address(function() {
			// 	return $(this).attr('href').replace(g.url.baseURL, '').replace(/^#/, '');
			// });
			$(document).on('click', '[data-js="load-page"]', function(e) {
				var t = $(this);

				$.address.loadType(t.attr('data-js-type'));
				$.address.value(t.attr('href'));

				e.preventDefault();

			});
		},
		init: function(e) {
			return e;
		},
		change: function(e) {
			if(this.flag !== null) {
				self.requestPage(e.value);
			}
			this.flag = true;
		}
	};

	self.address.setup();

	$.address.init(function(e) {
		self.address.init(e);
	});

	$.address.change(function(e) {
		self.address.change(e);
	});


	self.requestPage = function(url) {

		$('html').addClass('show-loading');
		$('.loading__element').afterTransition(function() {

			$('.main').load(url + ' .main > *', function(data) {

				var meta = self.getTitleAndClasses(data);
				document.title = meta.title;
				$('body').attr('class', meta.classes);

				$('html').addClass('hide-loading');

				$('.loading__element').afterTransition(function() {

					$('html').removeClass('hide-loading show-loading');
				});
			});
		});

	};

	self.getTitleAndClasses = function getTitleAndClasses(data) {
		var o = {}
		o['title'] = data.match("<title>(.*?)</title>")[1];
		o['classes'] = /body([^>]*)class=(["']+)([^"']*)(["']+)/gi.exec(data.substring(data.indexOf("<body"), data.indexOf("</body>") + 7))[3];
		return o;
	};

	return g;
};