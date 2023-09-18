---
title: $queue
description: $queue will return the current song queue.
id: queue
---

`$queue` will return the current song queue.

## Usage

```php
$queue[page?;limit?;format?]
```

## Parameters

| Field   | Type   | Description                                   | Required |
| ------- | ------ | --------------------------------------------- | :------: |
| page?   | number | queue page                                    |  false   |
| limit?  | number | maximum of songs to display                   |  false   |
| format? | string | format to display information about the songs |  false   |

<details>
  <summary><h3> Types </h3></summary>

| Property              |                                                                    | Returns | Supports                                     |
| --------------------- | ------------------------------------------------------------------ | :-----: | -------------------------------------------- |
| `{title}`             | Returns the video/song title                                       | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{channelId}`         | Returns the channel id                                             | string  | YouTube                                      |
| `{artist}`            | Returns the Artist                                                 | string  | YouTube, Spotify, SoundCloud                 |
| `{artistURL}`         | Returns the Artist URL                                             | string  | YouTube, SoundCloud                          |
| `{artistAvatar}`      | Returns the Artist Avatar                                          | string  | SoundCloud                                   |
| `{duration}`          | Returns the track/video duration in ms                             | number  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{identifier}`        | soundcloud, youtube, localfile, url, spotify                       | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{views}`             | Returns the amount of Views/Plays of the video/song                | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{likes}`             | Returns the amount of likes of the video/song                      | number  | Spotify, SoundCloud, Url, LocalFile          |
| `{thumbnail}`         | Returns the song/video thumbnail                                   | number  | YouTube, Spotify, SoundCloud                 |
| `{id}`                | Returns the song/video ID                                          | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{description}`       | Returns the video/song description                                 | string  | YouTube, Spotify, SoundCloud                 |
| `{createdAt}`         | Returns the Creation Date of the video/song                        | string  | YouTube, Spotify, SoundCloud                 |
| `{platformType}`      | Returns the platform Type                                          | number  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{rawData}`           | Returns song information as object                                 | object  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{formatedPlatforms}` | SoundCloud, YouTube, Localfile, Url, Spotify                       | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{requester}`         | Returns the Song Requester (user object, .user.id, .user.name etc) | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| `{position}`          | Returns the Song Position in the current Queue                     | number  | YouTube, Spotify, SoundCloud, Url, LocalFile |

</details>

## Example(s)

This will return the current queue in the `{position}) {title} - {requester.user.name}` format:

```javascript
bot.command({
  name: "queue",
  code: `
    $queue[1;10;{position}) {title} - {requester.user.name}]
  `,
});
```
