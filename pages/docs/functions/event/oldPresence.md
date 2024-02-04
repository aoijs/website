---
title: $oldPresence
description: $oldPresence holds old data of the user's presence, used in update presence event, or else any data will be empty
id: oldPresence
---

`$oldPresence` holds old data of the user's presence, used in update presence event, or else any data will be empty

## Usage

```php
$oldPresence[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

## Options

| Option | Type | Description |
| ----- | ----- | ----- |
| activities | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The activities of this presencem |
| webStatus | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The status of this presence on webm |
| desktopStatus | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The status of this presence on desktop. |
| mobileStatus | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The status of this presence on mobile. |
| guildId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of this presence. |
| authorId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The author ID of this presence. |
