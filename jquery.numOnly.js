/*
 * jQuery NumberOnly plugin 1.0
 * 
 * Copyright 2011, Pilot
 * 
 * Dual licensed under the MIT and GPL Version 2licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html TODO fix license link
 */

(function( $ ){
    
    // variable declaration
    var value;
    
    // allowed keycodes
    function num(e,negatieve,decimal){
        if(!((e.keyCode >= 96 && e.keyCode <= 105)                                  // numbers on keypad
            || (e.keyCode >= 48 && e.keyCode <= 57)                                 // numbers on keyboard
            || (e.keyCode == 109 && negatieve && checkDash(value))                  // minus(-)
            || (e.keyCode == 110 || e.keyCode == 190 && decimal && checkDot(value)) // dot(.)
            || e.keyCode == 9                                                       // tab
            || e.keyCode == 8                                                       // backspace
            || e.keyCode == 46                                                      // delete
            || (e.keyCode >= 35 && e.keyCode <= 40)                                 // arrow keys/home/end
            )
        ) {
            // TODO tip goes here
            e.preventDefault();
        }
    }
    
    function checkDash(val){
        var rx = /-/;
        return !rx.test(val);
    }
    
    function checkDot(val){
        var rx = /\./;
        return !rx.test(val);
    }
    
    // plugin name
    $.fn.numbOnly = function(options) {
        
        // plugin default options
        var opt = $.extend({
            'align' : 'right',
            'negative' : false,
            'decimal' : true
        },options);
        
        // return this to maintain chainability
        return this.each(function(){
            
            // o is now the element
            var o = $(this);
            o.keyup(function(){
                value = o.val();
            }).keydown(function(e){
                num(e,opt.negative,opt.decimal);
            }).css('text-align', opt.align);
        });
    };
})( jQuery );