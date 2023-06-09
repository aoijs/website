---
title: Hyperlinks
description: This page is covering all about hyperlinks.
id: hyperlinks
---

**This page is about hyperlinks, what they do and how to use them.**

Hyperlinks are useful to hide long links in text, this has limitation as it only works in Interactions (application
commands) and embeds.

---

### Embedding Links

First of all you require a link you want to embed, let's take `https://aoi.js.org` for example.

Then do the following;

1. Surround the link with brackets, looking like this;

```php
(https://aoi.js.org)
```

2. Choose the text you want to be clickable and put that one in-front of the link looking like this;

```php
[Awesome Hyperlink!](https://aoi.js.org)
```

![img](https://cdn.discordapp.com/attachments/1082168708866244648/1084893609385533481/wNX6ebB93qrPgAAAABJRU5ErkJggg.png)

That works the same way for embeds as for application commands.

If you want to customize the "hovertag", then do the following;

```php
[Awesome Hyperlink!](https://aoi.js.org "Hover Text")
```

![img](https://cdn.discordapp.com/attachments/1082168708866244648/1084896685303529482/1eVj5z3u6UAAAAAElFTkSuQmCC.png)