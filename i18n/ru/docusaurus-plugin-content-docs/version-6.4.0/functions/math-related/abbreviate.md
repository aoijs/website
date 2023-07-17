---
title: '$abbreviate'
description: '$abbreviate позволит вам сократить большие числа.'
id: abbreviate
---

`$abbreviate` позволит сократить большие числа.

## Использование

```php
$abbreviate[num;dec?]
```

## Параметры

| Название | Nbg   | Описание                            | Нужно |
| -------- | ----- | ----------------------------------- |:-----:|
| num      | целое | Сократить число.                    |  да   |
| dec?     | целое | Десятичная дробь между сокращением. | ложь  |

## Пример(ы)

Возвращается: `20k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000]
  `
});
```

Возвращается: `20.0k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000;1]
  `
});
```
