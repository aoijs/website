---
title: $search
description: $search will search for tracks.
id: search
extension: true
---

`$search` will search for tracks.

## Usage

```php
$search[query;type?;format?;list?;separator?]
```

| Field      | Type                                                                                              | Description                                                                                                           | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | :------: |
| query      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The query to search for.                                                                                              |   true   |
| type?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The platform type. <br /> 1. **youtube** (default) <br /> 2. **spotify** (__requires auth__) <br /> 3. **soundcloud** |  false   |
| format?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The format in which the songs are returned (read below).                                                              |  false   |
| list?      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The maximum amount of songs that will be returned.                                                                    |  false   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator to separate returned songs.                                                                             |  false   |

### Formatting

|     Option      | Returns          |                                                                         |
| :-------------: | ---------------- | ----------------------------------------------------------------------- |
|     {title}     | Video/Song Title |                                                                         |
|    {artist}     | Artist           | *May return invalid data with SoundCloud*                               |
|   {duration}    | Duration         | *Returned in ms*                                                        |
| {digitalFormat} | Duration         | *Returned in digital format, may be invalid for: Soundcloud, Spotify*   |
|      {id}       | Video/Song ID    | *Returned in digital format, may be invalid for: Soundcloud, Spotify*   |
|      {url}      | Video/Song URL   | *Returns for YouTube with `youtube.com/watch?v=` instead of `youtu.be`* |


## Example(s)

This will search for video/song titles with the name of "aoi.js":

```javascript
client.command({
  name: "search",
  code: `
    $search[aoi.js;youtube;{title} by {artist};5]
  `,
});
```