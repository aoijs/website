---
title: $awaitExecute
description: $awaitExecute executes an awaited command.
id: awaitExecute
---

`$awaitExecute` executes an awaited command.

## Usage

```php
$awaitExecute[awaitedCommand]
```

## Parameters

| Field          | Type                                                                                              | Description                     | Required |
| -------------- | ------------------------------------------------------------------------------------------------- | ------------------------------- | :------: |
| awaitedCommand | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The awaited command to execute. |   true   |

## Example(s)

This will execute an awaited command:

```js
client.command({
  name: "awaitExecute",
  code: `
$awaitExecute[awaited]
$let[variable;Hello!]
`
});
```

```js
client.awaitedCommand({
  name: "awaited",
  code: `
$get[variable] // Returns "Hello!"
`
});
```