(function( $ ){
    $.fn.numbOnly = function(options) {
        // plugin default settings
        var settings = $.extend({
            'fontSize' : 10,
            'fontColor' : 'yellow'
        },options);
        // return this to maintain chainability
        return this.each(function(){
            var $this = $(this);
        // codes will go here
        });
    };
})( jQuery );