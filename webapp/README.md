# Dockerlab Web Application

This is a sample web application for the Dockerlab assignment of the Machine Learning Operations course. The application is containerized using Docker and Docker Compose and interacts with a MySQL database.

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Optional for local testing (without Docker): [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/)

## Running the application with Docker

1. **Build and start the application:**

   Make sure you are in the `dockerlab/webapp` directory. Use Docker Compose to build the images and start the services (webapp and MySQL database).

   ```
   docker compose -f docker-compose.yml up --build -d
   ```

2. **Access the application:**

    Once the services are up and running, the application will be accessible at:
    - http://localhost:3000

    The application connects to the MySQL database automatically using the environment variables defined in the docker-compose.yml file.

3. View logs:

    ```
    You can check the logs for the webapp service to see its status:
    ```
    
    ```
    docker compose logs webapp
    ```

## Running the tests

1. Run tests using Docker Compose:

    Run the tests inside the webapp container:

    ```
    docker compose exec webapp yarn test
    ```

    You can also follow the logs while the tests are running:
    ```
    docker compose logs -f test
    ```

## Cleaning up

To stop the running services and remove containers and volumes:
```
docker compose down -v
```

To remove all Docker images:

```
docker rmi $(docker images -q) -f
```

## Local development

If you prefer to run the application without Docker (for development or debugging purposes), you can run it locally by following these steps:

1. Install dependencies:

```
yarn install
```
2. Run the application:
```
yarn start
```
3. Run the tests locally:
```
yarn test
```