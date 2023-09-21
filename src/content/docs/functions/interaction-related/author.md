---
title: $author
description: $author will add an author field to an embed.
id: author
---

`$author` will add an author field to an embed.

## Usage

```php
$author[index?;name;iconURL?]
```

## Parameters

| Field    | Type    | Description                                                | Required |
| -------- | ------- | ---------------------------------------------------------- | :------: |
| index?   | integer | Embed index.                                               |  false   |
| name     | string  | Author title that will be displayed.                       |   true   |
| iconURL? | string  | Icon URL which will be displayed next to the author title. |  false   |

## Example(s)

This will create an embed with description and author title:

```javascript
client.command({
  name: "author",
  code: `
  $author[Hello!;$userAvatar[$authorID]]
  $description[Embed with author!]
  `,
});
```
