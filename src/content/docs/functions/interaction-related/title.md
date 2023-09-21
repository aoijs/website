---
title: $title
description: $title add a title to an embed.
id: title
---

`$title` add a title to an embed.

## Usage

```php
$title[index?;title;URL?]
```

## Parameters

| Field  | Type   | Description                      | Required |
| ------ | ------ | -------------------------------- | :------: |
| index? | number | The index of the embed.          |  false   |
| title  | string | The content of the embed title.  |   true   |
| URL?   | string | URL which will be the hyperlink. |  false   |

## Example(s)

This will create an embed with a title:

```javascript
client.command({
  name: "title",
  code: `
   $title[Hello!;https://aoi.js.org]
   $description[The title contains a hyperlink..]`,
});
```
