# Extemp Auto Filing

Dependencies
```shell
npm install express ejs path # for webserver
npm install puppeteer puppeteer-core # saving url as pdf
```

## What is this???

A free way to automatically file the most recent news straight into your teams google drive with just the touch of a button. Or to customize and run locally for specific cases!

## How does this work???

First we use the `newsapi` to get the most recent news. Then it is webscraped with `puppeteer` and converted into a pdf which is then converted into a text file which is then fed into a LLM (think ChatGPT) to extract the most important information and then assemble back into PDF then upload to google drive via the google APIS.