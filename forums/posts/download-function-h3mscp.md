---
title: "Download function"
description: "This is a custom function for downloading files accessible through https.
Example: `$download[https://cdn.discordapp.com/avatars/608358453580136499/a_1b50c8adf832525b8ca0673e1c74e6e9.gif;./lerefavatar.gif]` would download the image accessible through the link `https://cdn.discordapp.com/avatars/608358453580136499/a_1b50c8adf832525b8ca0673e1c74e6e9.gif`."
authors:
  name: "@artemcurious"
  title: Member
  url: https://discord.com/users/591690683509768223
  image_url: https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png
tags: ["aoi.js","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

Hey there! Ever needed to download an image, an audio file, or basically any type of file from the internet? Here's the command to solve your issue!

Paste the following code into your bot's main file, which is usually `index.js`:

```
const url = require('url');

bot.functionManager.createFunction({
  name: '$download',
  type: 'djs',
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    let [urlValue, destinationPath] = data.inside.splits;

    if (!destinationPath) {
      let parsedUrl = new URL(urlValue.replace(/#COLON#/g, ':'));
      let pathname = parsedUrl.pathname;
      let filename = pathname.split('/').pop();
      destinationPath = filename;
    }

    let unescapedURL = urlValue
      .replace(/#LEFT#/g, ']')
      .replace(/#SEMI#/g, ';')
      .replace(/#COLON#/g, ':')
      .replace(/#CHAR#/g, '$')
      .replace(/#RIGHT_CLICK#/g, '<')
      .replace(/#LEFT_CLICK#/g, '>')
      .replace(/#EQUAL#/g, '=')
      .replace(/#RIGHT_BRACKET#/g, '{')
      .replace(/#LEFT_BRACKET#/g, '}')
      .replace(/#COMMA#/g, ',')
      .replace(/#AND#/g, '&&');

    function download() {
      const https = require('https');
      const fs = require('fs');

      const file = fs.createWriteStream(destinationPath);

      https.get(unescapedURL, (response) => {
        response.pipe(file);
      });
    }

    if (!urlValue) return d.aoiError.fnError(d, 'custom', {}, 'The parameter "url" does not have any arguments!');

    data.result = download();
    return {
      code: d.util.setCode(data),
    };
  },
});
```

After that is done, you can call the function by doing `$download` with the URL and filepath parameters like so:
`$download[https://cdn.discordapp.com/icons/773352845738115102/a_fa8ffe5e43202d2974e8484548d4662c.gif;./aoijs.gif]`

That's it!

### How does it work?
It uses the `https` module to download the file you requested. Please note that any files accessible only through the `http` protocol can't be downloaded!

### Improvements
Recently, I made some improvements to the code, so it's different to the old $download function I made.
The changes are:
- it will now automatically unescape characters and makes it so that there is no need of using $nonEscape
- it will now auto-generate a destination path from the file's link if you didn't specify the parameter. For example, if you only specified the URL, but no destination path, like over here: `$download[https://cdn.discordapp.com/icons/773352845738115102/a_fa8ffe5e43202d2974e8484548d4662c.gif]`, then it will just download the file with the name `a_fa8ffe5e43202d2974e8484548d4662c.gif` and to the root directory of your project
- if the `url` parameter is not specified, then it will now return a proper error

Have fun coding your aoi.js bot!