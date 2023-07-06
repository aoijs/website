---
title: "Unicode character unescape"
description: "This custom function allows you to unescape unicode characters. For example, if you had this string (which is escaped): `\u0048\u0065\u0079\u0020\u0074\u0068\u0065\u0072\u0065\u002C\u0020\u0077\u0061\u0073\u0073\u0075\u0070\u003F`, then by using this function, you would get `Hey there, wassup?`."
authors:
  name: "@artemcurious"
  title: Member - 591690683509768223
  userid: "591690683509768223"
  url: https://discord.com/users/591690683509768223
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/591690683509768223.png
tags: [ "v6","aoi.js" ]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

Hey there! This custom function allows you to unescape unicode characters. For example, if you had this string (which is
escaped): `\u0048\u0065\u0079\u0020\u0074\u0068\u0065\u0072\u0065\u002C\u0020\u0077\u0061\u0073\u0073\u0075\u0070\u003F`,
then by using this function, you would get `Hey there, wassup?`.

### Example

![Example image](https://cdn.discordapp.com/attachments/1097056108440457356/1121460979453132851/image.png)
Fairly simple usage, code, and meaning.

Paste the following code into your main file, common to be named `index.js`:

```js
bot.functionManager.createFunction({
    name: `$unicodeUnescape`,
    type: `djs`,
    code: async d => {
        const data = d.util.aoiFunc(d);

        function unicodeDecode(str) {
            return str.replace(/\\u([\dA-Fa-f]{4})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)));
        }

        const [text] = data.inside.splits;

        const unescapedString = unicodeDecode(text);
        data.result = unescapedString;

        return {
            code: d.util.setCode(data)
        };
    }
});
```

That's it, have fun. Bye!