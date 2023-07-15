---
title: $findMembers
description: $findMembers will return all members with similar username.
id: findMembers
---

`$findMembers` will return all members with similar username.

## Usage

```php
$findMembers[userResolver;limit?;type?;force?;format?]
```

## Parameters

| Field        | Type    | Description                                                    | Required |
| ------------ | ------- | -------------------------------------------------------------- | :------: |
| userResolver | string  | Query of the username the bot will search for.                 |   true   |
| limit?       | number  | The amount of results the bot will return.                     |  false   |
| type?        | string  | Type of the search query.                                      |  false   |
| force?       | boolean | 1. **true** <br /> 2. **false** (default)                      |  false   |
| format?      | string  | The format the bot will return the found users (listed below). |  false   |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the user ID
* {username} -> returns the username
* {nick} -> returns the nickname
* {tag} -> returns the user discriminator

## Example(s)

This will return twenty members with `Leref` in their username:

```javascript
bot.command({
    name: 'findMembers',
    code: `
  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]
  `
});
```
