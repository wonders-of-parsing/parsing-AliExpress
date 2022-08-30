# parsing-AliExpress
Parser after scraping AliExpress. 

Use a scraping tool, like eCommerce Scraping API from Smartproxy, to gather data of a product category on AliExpress.

Once you receive the raw HTML result, follow these steps:

Download node js, and install it on your system. Restart your computer for changes to take effect.

Download the parser pack and extract it.

Open the parser.js file with a text editor to begin parsing.

Find the line that says const text = `data`; – your scraped information has to replace data, but the info has to be tidied up first.

Tidy up the scraped information by deleting everything before <!DOCTYPE and everything after n<\/html>\n. Use CTRL+F (Windows) or CMD+F (macOS) to find these spots.

Once you paste the tidied-up information, save the file.

Now you’ll need to open Command Prompt or Terminal in the folder where you extracted the pack. Use a search engine to find resources on how to do that on your operating system.

In the Command Prompt or Terminal, type npm install and hit Enter.

Then, type node parser.js and hit Enter.

If you receive a web link as a response, go to it in your browser and check your Command Prompt or Terminal again.

Your data is now parsed! It gives you 1) the title of the item, 2) the name of the store that offers the item, 3) the number of sold items, and 4) the price.
