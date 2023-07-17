---
title: $oldGuild
description: '$oldGuild enthält Daten für die Gilde, bevor sie aktualisiert wurde, dies ist aus Discord Cache und könnte leer sein, je nachdem, ob es gecached wird, Verwenden Sie also eine partielle Option, bevor Sie versuchen, auf eine Immobilie zuzugreifen. (guildUpdate-Ereignis)'
id: oldGuild
---

`$oldGuild` enthält Daten für die Gilde, bevor sie aktualisiert wurde, dies ist aus Discord Cache und ist möglicherweise leer, abhängig von , ob es zwischengespeichert wird. Verwenden Sie daher eine partielle Option, bevor Sie versuchen, auf eine Eigenschaft zuzugreifen. (guildUpdate-Ereignis)

## Verwendung

```php
$oldGuild[option]
```

## Verwendung

| Feld      | Typ    | Beschreibung        | Erforderlich |
| --------- | ------ | ------------------- |:------------:|
| variieren | string | Option zum Abrufen. |     wahr     |