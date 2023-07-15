---
title: '$findMembers'
description: '$findMembers will return all members with similar username.'
id: findMembers
---

`$findMembers` will return all members with similar username.

## Використання

```php
$findMembers[userResolver;limit?;type?;force?;format?]
```

## Параметри

| Поле         | Тип     | Опис                                                           | Обов'язковий |
| ------------ | ------- | -------------------------------------------------------------- |:------------:|
| userResolver | рядок   | Query of the username the bot will search for.                 |     так      |
| limit?       | number  | The amount of results the bot will return.                     |      ні      |
| тип?         | рядок   | Type of the search query.                                      |      ні      |
| force?       | boolean | 1. **true** <br /> 2. **false** (default)                |      ні      |
| format?      | рядок   | The format the bot will return the found users (listed below). |      ні      |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the user ID
* {username} -> returns the username
* {nick} -> returns the nickname
* {tag} -> returns the user discriminator

## Приклад(и)

This will return twenty members with `Leref` in their username:

```javascript
bot.command({
    name: 'findMembers',
    code: `
  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]
  `
});
```
