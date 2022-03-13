# Директория реализации для запросов по сети

Для корректной работы необходимо реализовать файл в camelCase нотации ``*Request``, где * отвечает за логическое
отображение сущности файла, например ``userRequest``

Далее все сущности экспортируются в index.ts - корневой файл, чтобы в при вызове не было лишнего в путях

## Пример реализации файла запроса

```typescript
import {AppClient} from '@api/client';

const client = new AppClient();

const SOME_ARGS = [];

export async function exempleGetRequest(): Promise<Pet[]> {
  return client.pet.findPetsByStatus(SOME_ARGS);
};

```
