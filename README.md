# Running fliegen-it-solutions-task with Docker

This guide will walk you through the steps to run the task tracker application within a Docker container.

## Prerequisites

- Docker installed on your system. You can download and install Docker from [here](https://www.docker.com/get-started).

## Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/idrees04/fliegen-it-solutions-task.git
    ```

2. Navigate to the project directory:

    ```bash
    cd fliegen-it-solutions-task
    ```

3. Build the Docker image:

    ```bash
    docker build -t fliegen-it-solutions-task .
    ```

4. Run the Docker container:

    ```bash
    docker run -p 8080:80 fliegen-it-solutions-task
    ```

   This command will start the Docker container and map port 80 of the container to port 8080 of your host machine. You can now access the application by navigating to `http://localhost:8080` in your web browser.

   **Note**: If port 8080 is already in use on your system, you can specify a different port number in the command. For example:

   ```bash
   docker run -p 8888:80 fliegen-it-solutions-task
