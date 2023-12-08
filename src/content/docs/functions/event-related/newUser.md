---
title: $newUser
description: $newUser holds data of the updated user.
id: newUser
---

`$newUser` holds data of the updated user.

## Usage

```php
$newUser[option]
```

## Parameters

| Field  | Type                                                                                              | Description                                                                                                                                                                                                                       | Required |
| ------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve | true |

## Options

| Option | Type | Description |
| ---- | ---- | ----- | 
| name | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns user name |
| tag | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns user tag |
| banner | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns user banner hash | 
| bannerURL | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns user banner URL |
| createdAt | [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Returns the time when user was created |
| createdTimestamp | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns user created timestamp |
| accentColor | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns base 10 accent color of user's banner |