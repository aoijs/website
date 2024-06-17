---
title: $queue
description: $queue will return the current song queue.
id: queue
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$queue` will return the current song queue.

## Usage

```aoi
$queue[page?;limit?;format?,separator?]
```

## Parameters

| Field      | Type                                                                                              | Description                                   | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------- | :------: |
| page?      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | queue page                                    |  false   |
| limit?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | maximum of songs to display                   |  false   |
| format?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | format to display information about the songs |  false   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator of queue, default = ”, “        |  false   |

<details>
  <summary>Types</summary>

| Property                                    |                                                                    |                                              Returns                                              | Supports                                     |
| ------------------------------------------- | ------------------------------------------------------------------ | :-----------------------------------------------------------------------------------------------: | -------------------------------------------- |
| `{title}`                                   | Returns the video/song title                                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{channelId}`                               | Returns the channel id                                             | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube                                      |
| `{artist}`                                  | Returns the Artist                                                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud                 |
| `{artistURL}`                               | Returns the Artist URL                                             | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, SoundCloud                          |
| `{artistAvatar}`                            | Returns the Artist Avatar                                          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | SoundCloud                                   |
| `{duration}`                                | Returns the track/video duration in ms                             | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{identifier}`                              | soundcloud, youtube, localfile, url, spotify                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{views}`                                   | Returns the amount of Views/Plays of the video/song                | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{likes}`                                   | Returns the amount of likes of the video/song                      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Spotify, SoundCloud, Url, LocalFile          |
| `{thumbnail}`                               | Returns the song/video thumbnail                                   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | YouTube, Spotify, SoundCloud                 |
| `{id}`                                      | Returns the song/video ID                                          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{description}`                             | Returns the video/song description                                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud                 |
| `{createdAt}`                               | Returns the Creation Date of the video/song                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud                 |
| `{platformType}`                            | Returns the platform Type                                          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{rawData}`                                 | Returns song information as object                                 | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{formattedPlatforms}`                      | SoundCloud, YouTube, Localfile, Url, Spotify                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{requester}`                               | Returns the Song Requester (user object, .user.id, .user.name etc) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{position}`                                | Returns the Song Position in the current Queue                     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | YouTube, Spotify, SoundCloud, Url, LocalFile |

</details>

## Example(s)

This will return the current queue in the `{position}) {title} - {requester.user.name}` format:

```javascript
client.command({
    name: "queue",
    code: `
    $queue[1;10;{position}) {title} - {requester.user.name}]
  `
});
```
