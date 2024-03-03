---
title: $awaitComponents
description: $awaitComponents awaits components for given amount of uses.
id: awaitComponents
---

`$awaitComponents` awaits components for given amount of uses.

## Usage

```php
$awaitComponents[messageID;userFilter;customID;commands;errorMsg?;uses?;awaitData?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                     | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | :------: |
| messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Message ID.                                                                                     |   true   |
| userFilter | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID. |   true   |
| customID   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Custom ID.                                                                                      |   true   |
| commands   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | commands that will be executed, you can separate multiple commands with a comma ( `` )         |   true   |
| errorMsg?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | error message when command expires                                                              |  false   |
| uses?      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | how many uses until component stops working                                                     |  false   |
| awaitData? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | awaited data                                                                                    |  false   |
