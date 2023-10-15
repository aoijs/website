---
title: $map
description: $map will execute awaited commands for given elements.
id: map
---

`$map` will execute awaited commands for given elements.

## Usage

```php
$map[text;split;awaitedCmds;sep?]
```

## Parameters

| Field       | Type                                                                                              | Description                  | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------- | :------: |
| text        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text.                        |   true   |
| split       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |                              |   true   |
| awaitedCmds | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute. |   true   |
| sep?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator.                   |  false   |
