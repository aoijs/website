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
| activites | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The activities of this presencem |
| webStatus | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The status of this presence on webm |
| desktopStatus | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The status of this presence on desktop. |
| mobileStatus | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The status of this presence on mobile. |
| guildId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of this presence. |
| authorId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The author ID of this presence. |
