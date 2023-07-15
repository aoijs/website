---
title: '$onlyIfMessageContains'
description: '$onlyIfMessageContains will check if the message contains the given text and if not return a error message.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` will check if the message contains the given text and if not return a error message.

## Usage

```php
$onlyIfMessageContains[content;...text;error]
```

## Parameters

| Field   | Type   | Description                                  | Required |
| ------- | ------ | -------------------------------------------- |:--------:|
| content | string | Message which should contain the given text. |   true   |
| text    | string | Text to check for in the message.            |   true   |
| error   | string | Error to return.                             |   true   |

## Example(s)

This will return the error message as "aoi.js" does not appear in "Hello!":

```javascript
bot.command({
    name: "onlyIfMessageContains",
    code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```