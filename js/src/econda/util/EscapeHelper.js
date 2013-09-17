if(typeof window.econda == 'undefined') {
	window.econda = {};
	var econda = window.econda;
}
if(typeof window.econda.util == 'undefined') {
	econda.util = {};
}

/**
 * Helper functions for string escaping.
 * @class econda.util.EscapeHelper
 * @singleton
 */
econda.util.EscapeHelper = {
	/**
	 * Defines characters to encode if we want to output text in html
     * @private
	 */
    entityMap: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    },
    
    /**
     * Escape html special chars
     * @param {String} text
     * @return {String} encoded string
     */
    html: function(text)
    {
    	return String(text).replace(/[&<>"'\/]/g, function (s) {
	        return util.EscapeHelper.entityMap[s];
	    });
	}
};
