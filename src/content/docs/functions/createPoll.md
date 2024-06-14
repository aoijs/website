---
title: $createPoll
description: $createPoll will create a poll on the channel.
id: createPoll
---

`$createPoll` will create a poll on the channel.

## Usage

```aoi
$createPoll[channelID?;question;duration;allowMultiselect?;...answers]
```

## Parameters

| Field             | Type                                                                                                | Description                                                                                     | Required |
| ----------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | :------: |
| channelID?        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The channel ID where the poll will be created.                                                  |  false   |
| question          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The poll question.                                                                              |   true   |
| duration          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The duration of the poll. This must be not less than **1 hour** and not longer than **7 days**. |  false   |
| allowMultiselect? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether users are allowed to choose more than one answer. (Default: **false**)                  |  false   |
| ...answers        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The emoji and answer for each options.                                                          |   true   |

## Example(s)

This will create a one-hour poll with the question "Is aoi.js great?" with two options, only one answer can be chosen:

```js
client.command({
  name: "createPoll",
  code: `$createPoll[$channelID;Is aoi.js great?;1h;false;Yes:✅;No:❌]`
});
```

You can also remove the emojis:

```js
client.command({
  name: "createPoll",
  code: `$createPoll[$channelID;Is aoi.js great?;1h;false;Yes;No]`
});
```
