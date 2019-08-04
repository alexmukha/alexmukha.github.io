window.onload = function() {
var ptitle=document.getElementsByName("location")[0].content;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
console.log(ptitle); 
gtag('js', new Date());
gtag('config', 'UA-144720985-1');
gtag('config', {
    hitType: 'pageview',
    title: ptitle,
    page: location.pathname,
    location: location.pathname
  });
};
