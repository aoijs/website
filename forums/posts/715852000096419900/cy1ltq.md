---
title: "anti swear command"
description: "A djs code to check if any message contains swear words or not."
authors:
  name: "@ahoemi"
  title: Member - 715852000096419900
  userid: "715852000096419900"
  url: https://discord.com/users/715852000096419900
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png
tags: ["v6","Other","aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = {
name: "$alwaysExecute",
code: `
$deleteCommand
<@$authorID> Please refrain from swearing!

$onlyIf[$djsEval[const BadWordsNext = require('bad-words-next')
const en = require('bad-words-next/data/en.json')
const badwords = new BadWordsNext({ data: en })
badwords.check(\`$message\`);true]==true]

$onlyIf[$checkCondition[$message!=||$isBot[$authorID]==false]==true;]

$suppressErrors
`
}
```

### Error?

probably modules not found

- go to shell/terminal and type `npm i bad-words-next`

### Good Luck 