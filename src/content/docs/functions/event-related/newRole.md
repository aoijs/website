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
| createdAt | String | Returns created date |
| hexColor | String | Returns hex color |
| members | String | Returns members having the role |
| createdTimestamp | Number | Returns created timestamp |
| memberCount | Number | Returns number of members having the role |
| managed | Boolean | Returns if role is managed or not |
| position | Number | Returns role position |
| permissions | String | Returns permissions of role |

