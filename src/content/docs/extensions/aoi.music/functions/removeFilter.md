---
title: $removeFilter
description: $removeFilter will remove given filters.
id: removeFilter
---

`$removeFilter` will remove given filters.

## Usage

```php
$removeFilter[filter]
```

## Parameters

| Field  | Type                                                                                              | Description | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| filter | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | JSON format |   true   |

| Filter       | Contains                                   | JSON Format                 |
| ------------ | ------------------------------------------ | --------------------------- |
| NIGHT_CORE   | aresample, asetrate                        | `{"NIGHT_CORE": "value"}`   |
| BASS_BOOST   | bass                                       | `{"BASS_BOOST": "value"}`   |
| 8_D          | extrastereo, aecho, apulsator, stereowiden | `{"8_D": "value"}`          |
| PITCH        | asetrate, atempo, aresample                | `{"PITCH": "value"}`        |
| KAROAKE      | stereotools                                | `{"KAROAKE": "value"}`      |
| SLOWED       | asetrate, aresample                        | `{"SLOWED": "value"}`       |
| DEEP         | asetrate, atempo, aresample                | `{"DEEP": "value"}`         |
| TREBLE_BOOST | treble                                     | `{"TREBLE_BOOST": "value"}` |
| GATE         | agate                                      | `{"GATE": "value"}`         |
| VIBRATO      | vibrato                                    | `{"VIBRATO": "value"}`      |
| FLANGER      | flanger                                    | `{"FLANGER": "value"}`      |
| PHASER       | aphaser                                    | `{"PHASER": "value"}`       |

## Example(s)

This will remove the `NIGHT_CORE` and `BASS_BOOST` filters:

```javascript
client.command({
  name: "removeFilter",
  code: `
    $removeFilter[{"NIGHT_CORE", "BASS_BOOST"}]
  `,
});
```
