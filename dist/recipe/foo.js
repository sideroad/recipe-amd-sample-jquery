recipe({libraries:["jQuery","jQuery.fn.foo"],scripts:[],amd:!0}).then(function(a){var b=a.jQuery;b(function(){alert(b.fn.foo&&"Passed jQuery has foo method"),alert(!window.$.fn.foo&&"Global jQuery doesnt have foo method"),alert("2.0.3"===b.fn.jquery&&"Passed jQuery version is 2.0.3"),alert("1.10.2"===window.$.fn.jquery&&"Global jQuery version is 1.10.2")})}).fail(function(a){throw a});