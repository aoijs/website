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

| Field       | Type   | Description                  | Required |
| ----------- | ------ | ---------------------------- | :------: |
| text        | string | Text.                        |   true   |
| split       | string |                              |   true   |
| awaitedCmds | string | Awaited Commands to execute. |   true   |
| sep?        | string | Separator.                   |  false   |
