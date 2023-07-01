---
title: The Panel Class
description: All about aoi.panel's Panel class.
id: aoipanel-panel-class
pagination_next: null
---

# The Panel Class

```javascript
const { Panel } = require("@akarui/aoi.panel")

const panel = new Panel({
    username: string, array;
    password: string, array;
    secret: string;
    port: number;
    bot: string;
    mainFile: pathLike;
    commands: pathLike;
    interaction: pathLike;
    version: string;
    type: string;
    theme: string;
    codetheme: string;
});
```

## Parameters

| Name          | Description                                                | Type          | Required                   | Example                                          |
| ------------- | ---------------------------------------------------------- | ------------- | -------------------------- | ------------------------------------------------ |
| `username`    | user name for logging into the panel (can be an Array).    | String, Array | `true`                     | `["Leref","Blurr","Ayaka"]` or `"Blurr1447"`     |
| `password`    | password for logging into the panel (can be an Array).     | String, Array | `true`                     | `["HelloHell123","abcd","123"]` or `"HelloHell"` |
| `secret`      | Session Secret For Express.                                | String        | `true`                     | `"SomeRandomSessionSecret"`                      |
| `port`        | Port on which the panel is hosted.                         | Integer       | `false`. Default: `3000`   | `8000`                                           |
| `bot`         | Your aoi.js or discord.js client.                          | Object        | `true`                     | `bot`                                            |
| `mainFile`    | Name of the main file where the code is running.           | String        | `true`                     | `"index.js"`                                     |
| `commands`    | Commands Folder Where all message commands are handled.    | String        | `false`                    | `"./commands/"`                                  |
| `interaction` | Interactitons Folder Where all slash commands are handled. | String        | `false`                    | `"./interactions/"`                              |
| `version`     | Your version of aoi.js: `v5` or `v6`                       | String        | `false`; Default:`v6`      | `"v6"` or `"v5"`                                 |
| `type`        | Type of panel, aoi.js or discord.js                        | String        | `false`; Default: `aoi.js` | `"djs"` or `"aoi"`                               |
| `theme`       | The colour theme of the panel                              | String        | `false`; Default: `indigo` | All colour themes are listed below.              |
| `codetheme`   | The code highlighting Scheme of the panel                  | String        | `false`; Default: `night`  | All code themes are listed below.                |

### Colour Themes

`red`, `pink`, `purple`, `deep-purple`, `indigo` __[default]__, `blue`, `light-blue`, `cyan`, `teal`, `green`, `light-green`, `lime`, `khaki`, `yellow`, `amber`, `orange`, `deep-orange`, `blue-grey`, `brown`, `grey`, `dark-grey` & `black`.

### Code Themes

The panel uses Codemirror for the code editor. The list of themes Code

Mirror supports are listed [here](https://codemirror.net/5/demo/theme.html#default).