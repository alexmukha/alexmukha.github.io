window.onload = function() {
var ptitle=document.getElementsByName("location")[0].content;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
console.log(ptitle); 
gtag("js", new Date());
gtag("config", "UA-144720985-1");
gtag("send", '"pageview", location.pathname, "title", "page", "Location");
};
