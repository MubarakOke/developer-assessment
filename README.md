# Lifestore Assessment


After pulling this repo, run the following to build the docker image
```
docker compose -f docker-compose.yml build
```

Run this command to start the production server
```
docker compose -f docker-compose.yml up --detach
```

Run this command to seed data to database
```
docker exec lifestore_backend python manage.py loaddata product
```

Access the running server at
```
http://127.0.0.1
```
