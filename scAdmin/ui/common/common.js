define([], function() {
    $ui.sr = {
        ajax: function(options) {
        	options = $.extend({
        		type: 'post',
        	},options);
            $ui.ajax(options);
        }
    }
});
