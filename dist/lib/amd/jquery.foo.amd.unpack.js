define(["jQuery","exports"], function(jQuery,exports){
(function($){
  $.fn.foo = function(){
    alert('foo!');
  }
})(jQuery);

;exports["jQuery.fn.foo"] = jQuery.fn.foo;});