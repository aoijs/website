---
title: '$oldUser'
description: '$oldUser holds data of the old user, used in update user event, or else any data will be empty.'
id: oldUser
---

`$oldUser` holds data of the old user, used in update user event, or else any data will be empty.

## प्रोयोग

```php
$oldUser[option]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                                                                                                                                                                                                                                                                            | चाहिए |
| ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|
| option | स्ट्रिंग | Option to retrieve <br /> 1. **name** <br /> 2. **tag** <br /> 3. **banner** <br /> 4. **bannerURL** <br /> 5. **createdAt** <br /> 6. **avatarURL** <br /> 7. **accentColor** <br /> 8. **flags** <br /> 9. **createdTimestamp** | true  |