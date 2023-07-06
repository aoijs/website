---
title: Custom Functions
description: This guide is covering custom functions, their usage and some useful examples.
id: customfunctions
---

**This Guide covers everything you need to know about Custom Functions.**

### Table of Contents

- **[Getting Started](#basics--how-to-create-custom-functions)**
    - **[Aoi.js Custom Functions](#aoijs-custom-functions)**
    - **[Discord.js Custom Functions](#discordjs-custom-functions)**
- **[Custom Functions Examples](#custom-functions-examples)**
    - **[Aoi.js Custom Functions Example](#aoijs-custom-functions-examples)**
    - **[Discord.js Custom Functions Example](#discordjs-custom-functions-examples)**

---

## Basics / How to create custom functions

> **Warning**
> Please note that this is most likely only useful for advanced aoi.js users.

To begin with, there are two types of custom functions.

`aoi.js` custom functions and `djs` custom functions.

As you may can tell by the name `aoi.js` custom functions include aoi.js functions, on the other side `djs` refers to `discord.js` which means it will create a discord.js custom function using discord.js functions/syntax.

### Aoi.js Custom Functions
```js
bot.functionManager.createFunction({
    name: "$function", // custom function name, can be anything.
    params: [ "parameter", ... ], // function parameters, $function[parameter;parameter]
    type: "aoi.js", // custom function type
    code: "..." // the code that will be executed
});
```

Pretty simple example, and usage.
* To return any parameter of `params: [...]` you can use `{name}` (name stands for the parameter name).

### Discord.js Custom Functions

```js
bot.functionManager.createFunction({
    name: "$function", // custom function name, can be anything.
    type: "djs", // custom function type
    code: ... // the code that will be executed
});
```

```js
bot.functionManager.createFunction({
  name: "$function",
  type: "djs",
  code: async d => { // fetching data
    const data = d.util.aoiFunc(d);
    const [parameter, ...] = data.inside.splits; // command parameters

    ...

    data.result = ... // needed for the function to properly work, will set the "output" of the function
    return {
      code: d.util.setCode(data) // will return the output from data.result
    };
  }
});
```

You can create error messages like the following;

```js
aoiError.fnError(d, type, data, message)
```

| TYPE    | RETURNS                            |
| ------- | ---------------------------------- |
| member  | Invalid Member ID Provided In ...  |
| message | Invalid Message ID Provided In ... |
| channel | Invalid Channel ID Provided In ... |
| user    | Invalid User ID Provided In ...    |
| role    | Invalid Role ID Provided In ...    |
| guild   | Invalid Guild ID Provided In ...   |
| emoji   | Invalid Emoji ID Provided In ...   |
| option  | Invalid Option ID Provided In ...  |
| custom  | Given Custom Error Message         |

```js
aoiError.consoleError(name, e)
```

```js
if (!parameter) return d.aoiError.fnError(d, 'custom', {}, 'Custom Error Message');
// will return a error message when the parameter "parameter" doesn't have any arguments.
```

## Custom Functions Examples

Advanced Custom Functions Examples can be found here, some are useful others are more likely miscellaneous.

### Aoi.js Custom Functions Examples

```ts
$say[userID?;message]
```

Packages required: `none`  
Difficulty: Beginner

```js
bot.functionManager.createFunction({
  name: "$say", 
  params: ["userID", "message"],
  type: "aoi.js", 
  code: ` 
    **$userTag[$replaceText[$replaceText[$checkCondition[{userID}==||{userID}==undefined];true;$authorID];false;{userID}]]** says: **{message}**
    $disableMentionType[everyone]
  ` 
})
```

### Discord.js Custom Functions Examples

```ts
$sendImage[URL]
```

Packages required: `none`  
Difficulty: Beginner

```js
bot.functionManager.createFunction({
  name: "$sendImage",
  type: "djs",
  code: async d => {
    const data = d.util.aoiFunc(d);
    const [URL] = data.inside.splits;

    let image = URL;
    const a = await d.message.channel.send({
      files: [{ 
        attachment: image // set the given URL as attachment.
        }]
    });

    data.result = a;
     return { 
        code: d.util.setCode(data) 
        }
    }   
});
```

---

```ts
$imagine[prompt]
```

Packages required: `openai`  
Difficulty: Advanced

```javascript
bot.functionManager.createFunction({
  name: '$imagine',
  type: 'djs',
  code: async d => {
  const { Configuration, OpenAIApi } = require("openai");
  const data = d.util.aoiFunc(d);
  const [description] = data.inside.splits;
  if(!description) return d.aoiError.fnError(d, 'custom', {}, 'Missing description to generate a image!');

  const config = new Configuration({
    apiKey: "openAI API key" // required to interact with the API
  });
  const openai = new OpenAIApi(config);

  try {
    const response = await openai.createImage({
      prompt: description, // get the description from the input $imagine[INPUT]
      n: 1, // generate one variation.
      size: "1024x1024",
    });
    data.result = response.data.data[0].URL;
    return {
      code: d.util.setCode(data) 
    };
  } catch (e) {
    console.error(e);
    return d.aoiError.fnError(d, 'custom', {}, 'Couldnt generate image');
  }
}
});
```
