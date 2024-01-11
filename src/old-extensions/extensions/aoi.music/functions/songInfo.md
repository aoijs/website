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

| Field     | Type                                                                                              | Description             | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- | :------: |
| type?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | information to retrieve |  false   |
| position? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | track position          |  false   |

<div class="details">
  <details>
    <summary><h3>$songInfo Types</h3></summary>
  </details> 
  <div class="content">
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th></th>
      <th>Returns</th>
      <th>Supports</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{title}</td>
      <td>Returns the video/song title</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{channelId}</td>
      <td>Returns the channel id</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube</td>
    </tr>
    <tr>
      <td>{artist}</td>
      <td>Returns the Artist</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud</td>
    </tr>
    <tr>
      <td>{artistURL}</td>
      <td>Returns the Artist URL</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, SoundCloud</td>
    </tr>
    <tr>
      <td>{artistAvatar}</td>
      <td>Returns the Artist Avatar</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>SoundCloud</td>
    </tr>
    <tr>
      <td>{duration}</td>
      <td>Returns the track/video duration in ms</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{identifier}</td>
      <td>soundcloud, youtube, localfile, url, spotify</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{views}</td>
      <td>Returns the amount of Views/Plays of the video/song</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{likes}</td>
      <td>Returns the amount of likes of the video/song</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td>
      <td>Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{thumbnail}</td>
      <td>Returns the song/video thumbnail</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td>
      <td>YouTube, Spotify, SoundCloud</td>
    </tr>
    <tr>
      <td>{id}</td>
      <td>Returns the song/video ID</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{description}</td>
      <td>Returns the video/song description</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud</td>
    </tr>
    <tr>
      <td>{createdAt}</td>
      <td>Returns the Creation Date of the video/song</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud</td>
    </tr>
    <tr>
      <td>{platformType}</td>
      <td>Returns the platform Type</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{rawData}</td>
      <td>Returns song information as object</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">object</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{formatedPlatforms}</td>
      <td>SoundCloud, YouTube, Localfile, Url, Spotify</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{requester}</td>
      <td>Returns the Song Requester (user object, .user.id, .user.name etc)</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
    <tr>
      <td>{position}</td>
      <td>Returns the Song Position in the current Queue</td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td>
      <td>YouTube, Spotify, SoundCloud, Url, LocalFile</td>
    </tr>
  </tbody>
</table>
  </div>
</div>

## Example(s)

This will return the current track name:

```javascript
client.command({
  name: "songInfo",
  code: `
    $songInfo[title]
  `
});
```
