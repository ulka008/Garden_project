This is my garden project, which includes some information on the herb garden we started with my children during a lockdown.
It includes the most common herbs, their pictures, latin names and germination days.

index.html: contains jQuery, Popper.js and Bootstrap for my tabs and modal picture box for plants and images. I also used flex-container for the list on the supplies page.

img folder: contains images used on my site. Images were downloaded from unsplash.com and are free for personal use.

media.css, countdown.css and form.css: contain style for my pages, including sticky footer and media queries.

countdown.js: contains countdown clock to our harvest.

form.js: contains regex for my contact form.

directory.js: contains arrays, a formula to extract information on my plants and display it on my site via zoom-in and a fetch request. 

plants.json: contains a table that displays herbs.

server.js: contains API.

gardening tips.txt is just an outline for myself with the info on my site.

IMPORTANT: please use http://localhost:8080 in order to fetch API and see plants and information pertaining to them under the Herbs tab. You would also need to have node.js installed on your computer.

You would ned to run node server.js to retrieve API in plants.json.

New features added: regex in contact form, API in plants.json and server.js,  API fetch request in directory.js and harvest countdown clock.

The following requirements were met:

* Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
* Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
* Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
* Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)


