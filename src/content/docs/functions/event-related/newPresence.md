---
title: $newPresence
description: $newPresence holds data of the updated presence.
id: newPresence
---

`$newPresence` holds data of the updated presence.

## Usage

```php
$newPresence[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

## Options

| Option | Type | Description |
| ----- | ----- | ----- |
| activites | [string]() | The activities of this presencem |
| webStatus | [string]() | The status of this presence on webm |
| desktopStatus | [string]() | The status of this presence on desktop. |
| mobileStatus | [string]() | The status of this presence on mobile. |
| guildId | [number]() | The guild ID of this presence. |
| authorId | [number]() | The author ID of this presence. |
