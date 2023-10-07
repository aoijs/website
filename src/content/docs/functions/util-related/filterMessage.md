---
title: $filterMessage
description: $filterMessage will filter certain characters out of given text.
id: filterMessage
---

`$filterMessage` will filter certain characters out of given text.

## Usage

```php
$filterMessage[text;...letters]
```

## Parameters

| Field   | Type   | Description                                   | Required |
| ------- | ------ | --------------------------------------------- | :------: |
| text    | string | Text input which will be filtered.            |   true   |
| letters | string | Content you want to filter out of the `text`. |   true   |

## Example(s)

This will remove the `N` of `Never` and return `ever`:

```javascript
client.command({
  name: "filterMessage",
  code: `
  $filterMessage[Never;N]
  `
});
```
