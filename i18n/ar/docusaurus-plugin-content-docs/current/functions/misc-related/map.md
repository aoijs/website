---
title: '$map'
description: '$map will execute awaited commands for given elements.'
id: map
---

`$map` will execute awaited commands for given elements.

## الاستخدام

```php
$map[text;split;awaitedCmds;sep?]
```

## البارامترات

| Field       | النوع  | الديسكبربشين                 | مطلوب |
| ----------- | ------ | ---------------------------- |:-----:|
| text        | string | Text.                        | true  |
| split       | string |                              | true  |
| awaitedCmds | string | Awaited Commands to execute. | true  |
| sep?        | string | Separator.                   | false |