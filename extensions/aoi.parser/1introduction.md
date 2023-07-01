---
title: Introduction
description: Setting up aoi.parser with ease.
id: aoiparser-introduction
pagination_next: null
pagination_prev: null
---

![logo](https://github.com/AkaruiDevelopment/aoi.parser/blob/main/.github/assets/logo.gif?raw=true)

:::info Documentation

In-depth documentation can be found **[here](https://aoi-parser.vercel.app/)**.

:::

### Table of Content

- **[Installation](#installation)**
- **[Setup](#example-usage)**
- **[Parsers](#events)**
    - **[Adding Events](#adding-events)**
    - **[List of Events](#list-of-events)**
    - **[Using Events](#using-events)**

---

### Installation

<Tabs groupId="pref-install">
  <TabItem value="i-npm" label="npm">

  **node.js 17.0.0 or newer is required.**
  ```bash
  npm install @akarui/aoi.parser
  ```
  
  </TabItem>
  <TabItem value="i-yarn" label="yarn">

  **node.js 17.0.0 or newer is required.**
  ```bash
  yarn add @akarui/aoi.parser
  ```

</TabItem>
</Tabs>

---

```js
const { Util } = require("aoi.js");
const { setup } = require("@akarui/aoi.parser");
 
/*
This will update All the parsers in aoi.js
*/
setup(Util);
```

## Example Usage
```js
//  example on sending a embed with 1 button
$sendMessage[
    {newEmbed:
        {title:Hello World}
        {description:This is an example}
        {color:Random}
        {footer:This is a footer}
    }
    {actionRow:
        {button:
            Label:
            1:
            customid:
            no:
            💀
        }
    }
]
```