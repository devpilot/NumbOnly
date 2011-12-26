/*
 * jQuery NumberOnly plugin 1.1
 * 
 * Copyright 2011, Pilot
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
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
            $(e.target).next('.no_tip').fadeIn().delay(500).fadeOut();
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
    
    function posTip(object, show, message){
        if(show){
            // prevent creation of duplicate no_tip div per element on resize
        object.next('.no_tip').remove();
        // getting element position and width
        var p = object.offset();
        var w = 3 + object.width();
        object.after('<div class="no_tip" style="top:'+(p.top)+'px;left:'+(p.left + w)+'px;">'+message+'</div>');
        }
    }
    
    // plugin name
    $.fn.numbOnly = function(options) {
        
        // plugin default options
        var opt = $.extend({
            'align' : 'right',
            'negative' : false,
            'decimal' : true,
            'showTip' : true,
            'message' : 'Numerics, . and - only'
        },options);
        
        // return this to maintain chainability
        return this.each(function(){
            
            // o is now the element
            var o = $(this);
            
            // create tip div if option set to true
                posTip(o,opt.showTip,opt.message);
                
            // recreate tip on browser resize
            $(window).resize(function(){
                posTip(o,opt.showTip,opt.message);
            })
            o.keyup(function(){
                value = o.val();
            }).keydown(function(e){
                num(e,opt.negative,opt.decimal);
            }).css('text-align', opt.align);
        });
    };
})( jQuery );