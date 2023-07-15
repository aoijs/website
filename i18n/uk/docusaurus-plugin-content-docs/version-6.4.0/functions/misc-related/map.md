---
title: '$map'
description: '$map will execute awaited commands for given elements.'
id: map
---

`$map` will execute awaited commands for given elements.

## Використання

```php
$map[text;split;awaitedCmds;sep?]
```

## Параметри

| Поле        | Тип   | Опис                         | Обов'язковий |
| ----------- | ----- | ---------------------------- |:------------:|
| text        | рядок | Text.                        |     так      |
| split       | рядок |                              |     так      |
| awaitedCmds | рядок | Awaited Commands to execute. |     так      |
| sep?        | рядок | Розділювач.                  |      ні      |