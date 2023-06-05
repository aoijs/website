---
title: $addFilter
description: Adds filter(s) to playing track(s).
id: addfilter
---

`$addFilter` adds the given filter(s) to track, removes the settled filters.

> Requires `@akarui/aoi.music` package.

## Usage 

```php
$addFilter[filters]

```
## Fields

| Field | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| filters | The filters will be added to track | string | yes |

## Notice

To know other filters as well, please check [FFmpeg filters](https://ffmpeg.org/ffmpeg-filters.html).

## Examples

We already made a `nightcore` filter for you, so you can use it like this.

```javascript
bot.command({
  name: "filter-nightcore",
  code: `
  $let[filter;$addFilter[{"nightcore": 1.10}]]
  `
});
```

## Custom Filter

For a custom filter from ffmpeg.

This will make the track like 8D.

```javascript
bot.command({
  name: "filter-custom",
  code: `
  8D audio: on!
  $let[filter;$addFilter[{"aecho": "1.0:0.8:50:0.5"}]]
  `
});
```

## Information

We used `$let` function on there, due to `$addFilter` function returns as a message of the song.

`$let` function can be used as a trick in those circumstances.

