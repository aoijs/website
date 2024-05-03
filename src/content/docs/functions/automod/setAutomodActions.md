---
title: $setAutomodActions
description: $setAutomodActions will set the taken action for the provided automod rule.
id: setAutomodActions
---

`$setAutomodActions` will set the taken action for the provided automod rule.

## Usage

```php
$setAutomodActions[type;channel;durationSeconds;customMessage?]
```

## Parameters

| Field            | Type                                                                                              | Description                             | Required |
| ---------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- | :------: |
| type             | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The action type.                        |   true   |
| channel          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The log channel.                        |   true   |
| durationSeconds? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The duration of the timeout in seconds. |   true   |
| customMessage?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The custom message to display.          |   true   |

### Automod Actions

| Type             | Id  |
| :--------------- | :-- |
| BlockMessage     | 1   |
| SendAlertMessage | 2   |
| Timeout          | 3   |

## Example(s)

This will create a new automod rule with the BlockMessage action.

```javascript
client.command({
    name: "setAutomodActions",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
});
```
