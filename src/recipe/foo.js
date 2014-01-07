recipe({
  libraries: [
    "jQuery",
    "jQuery.fn.foo"
  ],
  scripts: [
    // write script URL
  ],
  amd: true
}).then(function(variables){
  var $ = variables.jQuery;
  
  $(function(){
    alert($.fn.foo && "Passed jQuery has foo method");
    alert(!window.$.fn.foo && "Global jQuery doesnt have foo method");

    alert($.fn.jquery === "2.0.3" && "Passed jQuery version is 2.0.3");
    alert(window.$.fn.jquery === "1.10.2" && "Global jQuery version is 1.10.2");
  });

});