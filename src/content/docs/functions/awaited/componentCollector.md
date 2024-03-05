---
title: $componentCollector
description: $componentCollector will create a collector for the given components.
id: componentCollector
---

`$componentCollector` will create a collector for the given components.

## Usage

```php
$componentCollector[messageID;userFilter;time;customIDs;commands;errorMsg?;endcommand?;awaitData?]
```

## Parameters

| Field       | Type                                                                                              | Description                                                                                     | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | :------: |
| messageID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The message ID.                                                                                 |   true   |
| userFilter  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | To what the bot will reply. <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |   true   |
| time        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | When the command ends/expires.                                                                  |   true   |
| customID    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The component ID.                                                                               |   true   |
| commands    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Commands that will be executed, you can separate multiple emojis with a comma ( `` ).          |   true   |
| errorMsg?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error message when command expires.                                                             |  false   |
| endcommand? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | End command which will be executed when previous commands were executed.                        |  false   |
| awaitData?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Data.                                                                                   |  false   |
