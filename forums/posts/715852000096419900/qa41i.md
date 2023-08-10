---
    title: 'isLink'
    description: 'Checks if the provided text is link or not 
'
    authors:
      name: '@ahoemi'
      title: Member - 715852000096419900
      userid: '715852000096419900'
      url: https://discord.com/users/715852000096419900
      image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png
    tags: ["v6","aoi.js"]
    hide_table_of_contents: true
    enableComments: true
    pagination_prev: null
    pagination_next: null
    ---
    
    ```js {3} copy
bot.functionManager.createFunction({
name: "$isLink",
type: "djs",
code: async (d) => {
const data = d.util.aoiFunc(d);
const [b] = data.inside.splits;

if ( /^(https?:\/\/|www\.)/.test(b)) {
data.result = "true"; }
else { data.result = "false" }

return {
      code: d.util.setCode(data),
    };

}})

```
# Example
```js {3} copy
bot.command({
   name: "isLink",
   code: `
       $isLink[$message] //checks if the message is link or not
`})

# usage
`{prefix}isLink https://discord.com`