---
title: "Translate"
description: "Only translate code
credits to: API5 :)
Errors? tell me in discord."
authors:
  name: "@Artz_"
  title: Member
  url: https://discord.com/users/1079517122822152272
  image_url: https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png
tags: ["v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```
module.exports = [{
name: 'translate',
code: `
:map: **$replaceText[$jsonRequest[https://api5.vercel.app/translate?from=$splitText[1]&to=$splitText[2]&text=$replaceText[$replaceText[$message;$message[1];];$message[2];];output;Uuuh, Failed to get response with API, Try again later.];%20; ]**
$removeSplitTextElement[2]
$removeSplitTextElement[1]
$onlyIf[$splitText[3]!=;:x: <@$authorID> Insert the text to translate]
$onlyIf[$splitText[2]!=;:x: <@$authorID> Insert the output language.]
$onlyIf[$splitText[1]!=;:x: <@$authorID> Insert the input language.]
$textSplit[$message; ]
`
}]
```