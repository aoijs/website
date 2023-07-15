---
title: '$checkCondition'
description: '$checkCondition checks if a condition is either true or false.'
id: checkCondition
---

`$checkCondition` checks if a condition is either true or false.

## الاستخدام

```php
$checkCondition[condition]
```

## البارامترات

| Field     | النوع  | الديسكبربشين                 | مطلوب |
| --------- | ------ | ---------------------------- |:-----:|
| condition | string | Condition you want to check. | true  |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | equal to                 |
| !=       | not equal to             |
| <=       | less than or equal to    |
| \>=     | greater than or equal to |
| \>      | greater than             |
| <        | less than                |
| \       | \|     | logical OR     |
| &&       | logical conjunction      |

## مثال

This will return `false` as `50` is greater than `25`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25]
  `
});
```

### Advanced Example

#### Logical conjunction

This will return `true` as `50` is greater than `25` and `120` is less than `280`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25&&120<280]
  `
});
```

#### Logical OR

This will return `true` as one of the two arguments (`50>25`) are `true`:

```javascript
bot.command({
    name: 'checkCondition',
    code: `
  $checkCondition[50>25||true==false]
  `
});
```
