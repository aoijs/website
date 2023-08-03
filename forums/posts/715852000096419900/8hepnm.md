---
    title: 'create timestamp'
    description: 'A js custom function to create unix timestamp.'
    authors:
      name: '@ahoemi'
      title: Member - 715852000096419900
      userid: '715852000096419900'
      url: https://discord.com/users/715852000096419900
      image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png
    tags: ["v6","aoi.js","Other"]
    hide_table_of_contents: true
    enableComments: true
    pagination_prev: null
    pagination_next: null
    ---
    
    # Code
```js
bot.functionManager.createFunction({
  name: "$createTimestamp",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [time, type = "R", a = "+"] = data.inside.splits;

    async function exc(func) {
      let p = await d.interpreter(d.client, {}, [], { code: func }, d.client.db, true);
      return p.code;
    }

    const b = Math.floor(Date.now() / 1000);
    const e = Math.floor(await exc(`$parseTime[${time}]`) / 1000);

    async function exp(a) {
      switch (a) {
        case "+":
          return b + e;
          break;
        case "-":
          return b - e;
          break;
      }
    }

    const [shorttime, longtime, shortdate, longdate, shortdatetime, longdatetime, relative] = ['t', 'T', 'd', 'D', 'f', 'F', 'R'];
    data.result = `<t:${await exp(a)}:${eval(type.toLowerCase())}>`;

    return { code: d.util.setCode(data) };
  },
});

```
# Paramater

| Field | Type | Description |  
| ------ | --- | ---------------- |  
| Time | 30 | Human Time |  
| Type | 25 | Unix timestamp type |  
| A Idk | Operator | A thing to do expression |  

# Type Option

| S.N | Name            |  
| --- | --------------- |  
| 1   | shorttime       |  
| 2   | longtime        |  
| 3   | shortdate       |  
| 4   | longdate        |  
| 5   | shorttimedate   |  
| 6   | longtimedate    |  
| 7   | relative        |  
# Example
```js
bot.command({
  name: "createTimestamp",
  code: `
    $deleteIn[1hr]
    This message will delete in $createTimestamp[1h;relative;+].
  `
})
```
### Arigatou 🥰