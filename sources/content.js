var pattern=/\bBlocked/; //replace it with your pattern that is shown for a blocked page
var viewtext_base_url = "http://viewtext.org/article?url="; // viewtext is the best of the transcoders, you can replace it with whatever you like
var newurl;
if (pattern.test(window.document.title)) // if it matches pattern defined above
{
  newurl = viewtext_base_url + encodeURIComponent(window.location.href);
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect

}