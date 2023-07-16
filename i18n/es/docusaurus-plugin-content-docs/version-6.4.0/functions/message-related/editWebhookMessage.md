---
title: '$editWebhookMessage'
description: '$editWebhookMessage editará un mensaje dado.'
id: editWebhookMessage
---

`$editWebhookMessage` editará un mensaje dado.

## Uso

```php
$editWebhookMessage[webhookID;webhookToken;mensajeID;contenido]
```

## Parámetros

| Campo            | Tipo     | Parámetros                   | Requerido |
| ---------------- | -------- | ---------------------------- |:---------:|
| webhookID        | entero   | ID del webhook.              | verdadero |
| Token de webhook | consulta | Token del webhook.           | verdadero |
| ID de mensaje    | entero   | El ID del mensaje a editar.  | verdadero |
| contenido        | string   | Nuevo contenido del mensaje. | verdadera |