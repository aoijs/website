---
title: $findRoles
description: $findRoles will return all matching roles depending on the given query.
id: findRoles
---

`$findRoles` will return all matching roles depending on the given query.

## Usage

```php
$findRoles[roleResolver;limit?;type?;format?]
```

## Parameters

| Field        | Type                                                                                              | Description                                      | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| roleResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Query to match.                                  |   true   |
| limit?       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The maximum amount of roles the bot will return. |  false   |
| type?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Type of the search query.                        |  false   |
| format?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Formatting for the output.                       |  false   |

### Parameters for the `format` argument

- \{position\} -> returns the position
- \{id\} -> returns the role ID
- \{username\} -> returns the role name

## Example(s)

This will return all roles which are named `Owner`:

```javascript
client.command({
  name: "findRoles",
  code: `
  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]
  `
});
```
