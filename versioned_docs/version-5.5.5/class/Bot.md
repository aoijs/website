# Bot 

 ```js
 Bot Class Connects The Bot User To Discord And Makes It "Online".
 ```

## Basic Example

```javascript
const aoijs = require('aoi.js')

const bot = new aoijs.Bot({
      prefix: "Your Prefix", //Your Bot Prefix
      token: "Your Bot Token Here", //Your Bot Token
      intents: "all" //Intents Your Bot Requires 
      })

bot.onMessage()
```