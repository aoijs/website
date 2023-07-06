---
title: "File Names Custom Function"
description: "Is a comprehensive resource dedicated to providing information and documentation on a custom function for obtaining file names. "
authors:
  name: "@jollyjolli"
  title: Member - 166181471369953280
  userid: "166181471369953280"
  url: https://discord.com/users/166181471369953280
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png
tags: ["v6","aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
bot.functionManager.createFunction({
  name: "$fileNames",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [category, separator = ", "] = data.inside.splits;
    
    const fs = require('fs');
    const path = require('path');
    const folderPath = path.join(__dirname, 'commands', category);
    
    let files = [];
    let output = '';
    
    try {
      files = fs.readdirSync(folderPath);
      output = files
        .filter((file) => file !== '$alwaysExecute.js')
        .map((file) => path.parse(file).name)
        .join(separator);
    } catch (err) {
      output = `Error reading folder ${folderPath}: ${err}`;
    }
    
    data.result = output;
    
    return { code: d.util.setCode(data) };
  }
});
```

## NOTE: If your commands are in /commands/ no change nothing, but if the file name has other name, change line 10.

# HOW TO USE IT

```js
$fileNames[misc;separator (optional)]
```

**Example:**

Code:

```js
$fileNames[utility; | ]
```

Return:

```js
file1 | file2 | file3
```