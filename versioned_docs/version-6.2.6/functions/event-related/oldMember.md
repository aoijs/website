---
title: $oldMember
description: $oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)
id: oldMember
---

`$oldMember` holds data for the member before it was updated, this is from discord cache and might be empty depending on
whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)

## Usage

```php
$oldMember[option]
```

## Parameters

| Field  | Type   | Description         | Required |
| ------ | ------ | ------------------- | :------: |
| option | string | Option to retrieve. |   true   |