---
title: $newRole
description: $newRole holds data of a role that was created, updated, or deleted. Used in role update / delete / create events, or else it won't give any data.
id: newRole
---

`$newRole` holds data of a role that was created, updated, or deleted. Used in role update / delete / create events,
or else it won't give any data.

## Usage

```php
$newRole[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

## Options
| Field  | Type                                                                                              | Description |
| ------ | ---- | ------ |
| createdAt | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns created date |
| hexColor | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns hex color |
| members | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns members having the role |
| createdTimestamp | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns created timestamp |
| memberCount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns number of members having the role |
| managed | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns if role is managed or not |
| position | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns role position |
| permissions | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns permissions of role |

