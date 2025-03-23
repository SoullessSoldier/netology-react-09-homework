<a name="top"></a>

# Authentication v2

[вернуться в корневой readme](../readme.md)

- [Задание](#задание)
- [Решение](#решение)

## Задание

[Вверх](#top)





## Решение

### BACKEND endpoints

- POST /auth
  200 OK
  ```json
    {
      "token": "58d67998-7535-45ad-9917-316a0e276754"
    }
  ```
- GET /private/me
  200 OK or 401 Unauthorized
   ```json
      {
        "id": "9c7d638a-da75-4b72-941d-c6e243a0b65a",
        "login": "vasya",
        "name": "Vasya",
        "avatar": "https://i.pravatar.cc/40"
      }  
    ```
- GET /private/news with token
  200 OK or 401 Unauthorized
  ```json
  [
    {
      "id": "2906c4fe-f3c7-4a4b-beb8-09aa08c3dd56",
      "title": "место широкому деятельности",
      "image": "https://placeimg.com/640/480/nature",
      "content": "Нами на задания принимаемых отношении роль богатый работы. Таким повседневная и повседневная национальный консультация. Организационной широкому базы участниками играет напрямую количественный процесс формированию нас."
    },
    ...
  ]
  ```
- GET /private/news/:id with token
  200 OK or 401 Unauthorized
  ```json
    {
      "id": "2906c4fe-f3c7-4a4b-beb8-09aa08c3dd56",
      "title": "место широкому деятельности",
      "image": "https://placeimg.com/640/480/nature",
      "content": "Нами на задания принимаемых отношении роль богатый работы. Таким повседневная и повседневная национальный консультация. Организационной широкому базы участниками играет напрямую количественный процесс формированию нас."
    }
  ```



[Вверх](#top)