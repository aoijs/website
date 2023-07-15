---
title: $arrayForEach
description: $arrayForEach will execute an awaited command for each item in the array.
id: arrayForEach
---

`$arrayForEach` will execute an awaited command for each item in the array.

## Usage

```php
$arrayForEach[name;awaitedCommand;awaitData?]
```

## Parameters

| Field          | Type   | Description                  | Required |
| -------------- | ------ | ---------------------------- | :------: |
| name           | string | Array name.                  |   true   |
| awaitedCommand | string | Awaited command to executed. |   true   |
| awaitData?     | string | Awaited Data.                |  false   |