---
title: $onlyIfMessageContains
description: $onlyIfMessageContains will check if the message contains the given text and if not return a error message.
id: onlyIfMessageContains
---

`$onlyIfMessageContains` will check if the message contains the given text and if not return a error message.

## Usage

```php
$onlyIfMessageContains[content;...text;error]
```

## Parameters

| Field   | Type                                                                                              | Description                                  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- | :------: |
| content | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Message which should contain the given text. |   true   |
| text    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text to check for in the message.            |   true   |
| error   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error to return.                             |   true   |

## Example(s)

This will return the error message as "aoi.js" does not appear in "Hello!":

```javascript
client.command({
  name: "onlyIfMessageContains",
  code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```
