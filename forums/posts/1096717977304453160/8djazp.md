---
title: "Translate custom function"
description: "Function that will translate something."
authors:
  name: "@devlordduck2"
  title: Member - 1096717977304453160
  userid: "1096717977304453160"
  url: https://discord.com/users/1096717977304453160
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

**Usage:** 

`$translate[from(auto = autodetect);to;text to translate]`

**Example:**

`$translate[auto;en;Привет]` -> `Hello`

**The code:** 
```
bot.functionManager.createFunction({
    name: "$translate",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [from = "auto", to = "en", text = "Text"] = data.inside.splits;

        async function translate() {
            let request = await fetch(`https://ild.vercel.app/api/translate?from=${from}&to=${to}&text=${text}`);

            let result = await request.json()
            return result.output;
        }

        data.result = await translate();

        return {
            code: d.util.setCode(data)
        };
    }
});
```