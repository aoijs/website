---
title: $awaitComponentsUntil
description: $awaitComponentsUntil awaits message components.
id: awaitComponentsUntil
---

`$awaitComponentsUntil` awaits message components.

## Usage

```php
$awaitComponentsUntil[channelID;messageID;userFilter;time;customIDs;commands;errorMsg?;awaitData?]
```

## Parameters

| Field      | Type                                                                                                                                                                                                 | Description                                                                                    | Required |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | :------: |
| channelID  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Channel ID.                                                                                    |   true   |
| messageID  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Message ID.                                                                                    |   true   |
| userFilter | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer)                                                                                                  | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |   true   |
| time       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Expire time.                                                                                   |   true   |
| customID   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Custom ID of the component.                                                                    |   true   |
| commands   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )          |   true   |
| errorMsg?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Error message when command expires.                                                            |  false   |
| awaitData? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Awaited Data.                                                                                  |  false   |
