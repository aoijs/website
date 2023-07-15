---
title: '$findRoles'
description: '$findRoles will return all matching roles depending on the given query.'
id: findRoles
---

`$findRoles` will return all matching roles depending on the given query.

## Usage

```php
$findRoles[roleResolver;limit?;type?;format?]
```

## Parameters

| Field        | Type   | Description                                      | Required |
| ------------ | ------ | ------------------------------------------------ |:--------:|
| roleResolver | string | Query to match.                                  |   true   |
| limit?       | number | The maximum amount of roles the bot will return. |  false   |
| type?        | string | Type of the search query.                        |  false   |
| format?      | string | Formatting for the output.                       |  false   |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the role ID
* {username} -> returns the role name

## Example(s)

This will return all roles which are named `Owner`:

```javascript
bot.command({
    name: 'findRoles',
    code: `
  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]
  `
});
```
