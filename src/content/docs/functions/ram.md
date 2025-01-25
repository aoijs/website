---
title: $ram
description: $ram will return the RAM usage of your bot.
id: ram
---

`$ram` will return the RAM usage of your bot.

## Usage

```aoi
$ram[type?]
```
## Parameters
| Field     | Type                                                                                              | Description              | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| type      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | type of memory to return |  false   |
#### Available types:
* rss
* heapTotal
* heapUsed 
<details closed>
  <summary>Available Types</summary>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>rss</td>
          <td>Resident Set Size, is the amount of space occupied in the main memory device (that is a subset of the total allocated memory) for the process, including all C++ and JavaScript objects and code</td>
        </tr>
        <tr>
          <td>heapTotal</td>
          <td>With simple words, total space allocated in memory for objects, string and closures for example</td>
        </tr>
        <tr>
          <td>heapUsed</td>
          <td>Amount of used heap</td>
        </tr>
        <tr>
          <td>arrayBuffers</td>
          <td>Ammount of allocated memory for ArrayBuffers and SharedArrayBuffers, including all Node.js Buffers</td>
        </tr>
        <tr>
          <td>external</td>
          <td>Memory usage of C++ objects bound to JavaScript objects managed by V8 </td>
        </tr>
      </tbody>
    </table>
</details>

For better understanding of types, refer to [Node.js Documentation](https://nodejs.org/api/process.html#processmemoryusage)

## Example(s)

This will return the RAM usage and the available amount of RAM:

```javascript
client.command({
    name: "ram",
    code: `
  I'm currently using \`$ramMB\` out of \`$maxRamMB\`!
  `
});
```
