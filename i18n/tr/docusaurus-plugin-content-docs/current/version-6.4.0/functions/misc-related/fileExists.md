---
title: '$fileExists'
description: '$fileExists will check if a given file exists.'
id: fileExists
---

`$fileExists` will check if a given file exists.

## Usage

```php
$fileExists[path]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- |:--------:|
| path  | string | File path.  |   true   |

## Example(s)

This will check if a file called `index.js` exists in your directory:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```