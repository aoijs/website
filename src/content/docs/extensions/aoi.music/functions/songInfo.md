---
title: $songInfo
description: $songInfo will return given song's information.
id: songInfo
---

`$songInfo` will return given song's information.

## Usage

```php
$songInfo[type?;position?]
```

## Parameters

| Field     | Type   | Description             | Required |
|-----------|--------|-------------------------|:--------:|
| type?     | string | information to retrieve |  false   |
| position? | number | track position          |  false   |

<details>
  <summary><h3> Types </h3></summary>

| Property          |                                                                    | Returns | Supports                                     |
|-------------------|--------------------------------------------------------------------| :-----: |----------------------------------------------|
| title             | Returns the video/song title                                       | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| channelId         | Returns the channel id                                             | string  | YouTube                                      |
| artist            | Returns the Artist                                                 | string  | YouTube, Spotify, SoundCloud                 |
| artistURL         | Returns the Artist URL                                             | string  | YouTube, SoundCloud                          |
| artistAvatar      | Returns the Artist Avatar                                          | string  | SoundCloud                                   |
| duration          | Returns the track/video duration in ms                             | number  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| identifier        | soundcloud, youtube, localfile, url, spotify                       | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| views             | Returns the amount of Views/Plays of the video/song                | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| likes             | Returns the amount of likes of the video/song                      | number  | Spotify, SoundCloud, Url, LocalFile          |
| thumbnail         | Returns the song/video thumbnail                                   | number  | YouTube, Spotify, SoundCloud                 |
| id                | Returns the song/video ID                                          | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| description       | Returns the video/song description                                 | string  | YouTube, Spotify, SoundCloud                 |
| createdAt         | Returns the Creation Date of the video/song                        | string  | YouTube, Spotify, SoundCloud                 |
| platformType      | Returns the platform Type                                          | number  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| rawData           | Returns song information as object                                 | object  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| formatedPlatforms | SoundCloud, YouTube, Localfile, Url, Spotify                       | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| requester         | Returns the Song Requester (user object, .user.id, .user.name etc) | string  | YouTube, Spotify, SoundCloud, Url, LocalFile |
| position          | Returns the Song Position in the current Queue                     | number  | YouTube, Spotify, SoundCloud, Url, LocalFile |

</details>

## Example(s)

This will return the current track name:

```javascript
bot.command({
    name: 'songInfo',
    code: `
    $songInfo[title]
  `
});
```
