var InspiroBot = new (require("./index.js"))()


function handleQuote(error, qoute)
{
  if (error)
  {
    console.err(error)
  }
  else {
    console.log(qoute.url)
    setTimeout(getQuote, 1000);
  }
}


function getQuote()
{
  InspiroBot.fetchQuote(handleQuote)
}

InspiroBot.fetchQuote(handleQuote)
