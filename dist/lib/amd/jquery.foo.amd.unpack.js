define("jQuery.fn.foo", ["jQuery"], function(jQuery){
(function($){
  $.fn.foo = function(){
    alert('foo!');
  }
})(jQuery);

;return jQuery.fn.foo;
});