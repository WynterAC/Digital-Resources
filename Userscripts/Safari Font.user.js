// ==/UserScript==

var style = document.createElement("style");
style.type = "text/css";
var head = document.head;
head.appendChild(style);

style.sheet.insertRule("* { font-family: 'HelveticaNeue-Light', cursive !important; }");

completion(true);
