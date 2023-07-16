---
title: $getAttachment
description: '$getAttachment wird die Eigenschaften eines Anhangs zurückgeben.'
id: getAttachment
---

`$getAttachment` gibt die Eigenschaften eines Anhangs zurück.

## Verwendung

```php
$getAttachment[channelID;messageID;index?;option?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                   | Erforderlich |
| ------------- | ---------- | ---------------------------------------------- |:------------:|
| channelID     | ganze Zahl | Der Kanal, in dem die Nachricht vorhanden ist. |     wahr     |
| nachrichtenID | ganze Zahl | Die Nachrichten-ID.                            |     wahr     |
| index?        | anzahl     | Anhang-Index.                                  |    falsch    |
| option?       | string     | Die Option, um abzurufen.                      |    falsch    |