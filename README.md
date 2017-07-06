# node-inspirobot
Fetches randomly generated inspirational quotes from www.inspirobot.me.
No idea why you'd use this, but hey I dont judge if you need a new screensaver.


# Usage
```js
var InspiroBot = new (require("./index.js"))()
InspiroBbot.fetchQuote(callback)
```

Callback recieves error (if any) and an instance of the InspirationalQuote object. Currently it only contains the url for the quote.

#Credits
All credits go to www.inspirobot.me. They made the bot, not me.
