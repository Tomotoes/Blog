"use strict";var dynamicLoading={css:function(e){var t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",document.head.appendChild(t)},js:function(e){var t=document.createElement("script");t.src=e,t.type="text/javascript",document.head.appendChild(t)}};function loadLive2D(){dynamicLoading.css("https://cdn.jsdelivr.net/gh/Tomotoes/css/live2d-bbbffc1040.css"),dynamicLoading.js("https://cdn.jsdelivr.net/gh/Tomotoes/js/live2d-35e56518a0.js"),dynamicLoading.js("https://cdn.jsdelivr.net/gh/Tomotoes/js/live-dd4d893922.js")}isPhone||loadLive2D();