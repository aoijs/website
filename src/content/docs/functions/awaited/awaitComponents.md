---
title: $awaitComponents
description: $awaitComponents awaits components for given amount of uses.
id: awaitComponents
---

`$awaitComponents` awaits components for given amount of uses.

## Usage

```php
$awaitComponents[channelID;messageID;userFilter;customIDs;commands;awaitedCmd;uses?;time]
```

## Parameters

| Field       | Type                                                                                              | Description                                                                                                                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | :------: |
| channelID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of the message where it will be awaited.                                                                            |   true   |
| messageID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the message that will be awaited.                                                                                    |   true   |
| userFilter  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Users who can use the interaction. <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID.                        |   true   |
| customID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Custom IDs that will be awaited, use `,` for multiple custom IDs.                                                              |   true   |
| commands    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new interaction names to be used in interaction commands for the awaited customIDs, use `,` for multiple awaited commands. |   true   |
| awaitedCmd  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited command to execute if time ran out.                                                                                    |   true   |
| uses?       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The times the awaited interactions can be used (default `1`).                                                                  |  false   |
| time        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The duration for which the interaction can be used.                                                                            |   true   |

## Example(s)

This will send a message with a button. It will wait for 30 seconds for the button to be clicked, `examplebuttonresults` will be executed if the button has been clicked before the time runs out, otherwise `errormessage` will be executed:

```js
client.command({
  name: "awaitComponents",
  code: `$awaitComponents[$channelID;$get[messageID];$authorID;examplebutton;examplebuttonresults;errormessage;1;30s]
  $let[messageID;$sendMessage[Please click on the button.{actionRow:{button:Random Button:2:examplebutton:false}};true]]`
});

client.interactionCommand({
  name: "examplebuttonresults",
  prototype: "button",
  code: `$interactionReply[You clicked the button!]`
});

client.awaitedCommand({
  name: "errormessage",
  code: `$editMessage[$get[messageID];Too late! Time has ran out!{actionRow:{button:Random Button:2:examplebutton:true}};$channelID]`
})
```