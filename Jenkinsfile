
pipeline {
    agent any 

    environment {
        IMAGE_NAME = "nextgen-it-wiki"
        CONTAINER_NAME = "nextgen_container"
        PORT = "3000"  
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Pulling code from GitHub..."
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building the Docker image..."
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Deploy Container') {
            steps {
                echo "Deploying the Docker container..."
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                   docker run -d -p ${PORT}:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}
                """
            }
        }
    }
}
