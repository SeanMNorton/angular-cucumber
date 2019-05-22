pipeline {
    // agent { docker { image 'node:11-alpine' } }
    agent any
    tools {nodejs "node"}
    stages {
        stage('build') {
            steps {
                // sh 'npm --version'git
                sh 'npm config ls'
                // sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // sh "echo 'testing.....'"
                // sh 'echo "Fail!"; exit 1'
            }
        }
    }

    // post {
    //     always {
    //         echo 'This will always run'
    //     }
    //     success {
    //         echo 'This will run only if successful'
    //     }
    //     failure {
    //         echo 'This will run only if failed'
    //     }
    //     unstable {
    //         echo 'This will run only if the run was marked as unstable'
    //     }
    //     changed {
    //         echo 'This will run only if the state of the Pipeline has changed'
    //         echo 'For example, if the Pipeline was previously failing but is now successful'
    //     }
    // }
}