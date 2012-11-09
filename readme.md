##Websense Redirect Chrome Extension

At my (current) workplace we have a webfiltering mechanism powered by WebSense. Websense's classification is often [stupid](http://sathyabh.at/2011/02/04/websense-redirect-my-first-chrome-extension/) and I got fed up with it.

I found that fetching the mobile(aka text-only) versions of webpages using [instapaper](http://instapaper.com/m)/[google web transcoder](http://www.google.com/gwt/n)/[viewtext.org](http://viewtext.org/) would result in me being able to read the content – which was a very nice alternative because majority of the time, I’d be reading up on posts which are text heavy in nature. It was getting irritating to open to a webpage, encounter a blocked page, open another tab & copy-paste the URL to instapaper to grab the text version. 

So I created a simple extension which checks for websense blocking pattern and if so – redirects it to [viewtext](http://viewtext.org/) which then fetches the text-only version. While this extension is not really the best-thing-since-sliced-bread, it’s of immense use to me. 

There are certain bugs(like if the block pattern is present in the mobile page, then the extension goes into an infinite redirect loop) but I can live with those for the moment. 

Simply clone the repo, and pack the extension by heading over to chrome://extensions, Pack extension & point to where you cloned the repo. For the lazy, download the crx & drag & drop it to chrome://extensions