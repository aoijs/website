---
title: $indexOf
description: $indexOf will return the index of the given character.
id: indexOf
---

`$indexOf` will return the index of the given character.

## Usage

```php
$indexOf[string;char]
```

## Parameters

| Field  | Type   | Description                                     | Required |
| ------ | ------ | ----------------------------------------------- | :------: |
| string | string | The text the bot will be checking the index of. |   true   |
| char   | string | The characters the bot will be checking for.    |   true   |

## Example(s)

This will return `8` as it's the first occurring position of the character `w`:

```javascript
client.command({
  name: "indexOf",
  code: `
  $indexOf[Hello, what is wrong with you?;w]
  `,
});
```
