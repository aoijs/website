---
title: "Chatbot with chatGPT"
description: "Wiki on how to create a chatbot command."
authors: fafa
tags: ["Wiki"]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
enableComments: true
---

```js
module.exports = [{
  name: "ask-gpt",
  code: `
$get[response]
$disableMentionType[everyone]
$let[response;$djsEval[const axios = require("axios");
(async () => { 
  try {
    const response = await axios.post('https://api.pawan.krd/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      max_tokens: 250,
      messages: [
        { role: 'system', content: '$get[prompt]' },
        { role: 'user', content: '$message' }
      ]
    }, {
      headers: {
        'Authorization': 'Bearer $get[apiKey]',
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].message.content
  } catch (err) {
    console.log(err)
    return "Something went horribly wrong, please try later again."
  }
})();true]

$suppressErrors[Something went wrong.]
$let[prompt;You are a helpful assistant.]
$let[apiKey;pk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]`
}]
```