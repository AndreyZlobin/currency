# Donation service
 ## Make with 
    * typescript
    * express
    * react
    * mongodb
    * swagger
    * openapi-typescript-codegen

# Commands
    * frontend:dev       -   frontend dev server
    * frontend:build     -   frontend build
    * frontend:lint      -   frontend lint
    * frontend:lint-fix  -   frontend lint fix
    * api-gen            -   frontend api generate

    ************************************************

    * server:dev         -   server dev server
    * server:start       -   server prod server
    * server:build       -   server build prod  
    * server:lint        -   server lint
    * server:lint-fix    -   server lint fix
    * server:seed        -   server seeders

# Run
* npm install

* Для запуска сервера ** обязательно** добавить переменные из "apps/server/.env.local" -> "apps/server/.env"

* Для запуска клиента **обязательно** добавить переменные из "apps/frontend/.env.local" -> "apps/frontend/.env

Из корня выполнить команду "npm run server:seed", далее ---> 
``` 
npm run server:seed
npm run server:dev
npm run frontend:dev
```

## Swagger
swagger - http://localhost:5000/api/v1/docs

swagger schema - http://localhost:5000/api/v1/docs/schema.json

