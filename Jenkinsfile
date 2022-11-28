
    Pipeline{

        agent any
        tools {nodejs "node"} 

            stages{
                stage('Cypress Parallel Test Run'){
                    parallel{
                        stage('Slave_Node1') {
                            agent{
                                label "RemoteNode1"
                            }
                            steps{
                                git url: 'https://github.com/MichaelRay06/CYPRESS-BDD-CUCUMBER-FRAMEWORK.git'
                                bat 'npm install'
                                bat 'npm update'
                                bat 'npm run dashBoard'
                            }
                        }
                         
                        stage('Slave_Node2') {
                            agent{
                                label "RemoteNode2"
                            }
                            steps{
                                git url: 'https://github.com/MichaelRay06/CYPRESS-BDD-CUCUMBER-FRAMEWORK.git'
                                bat 'npm install'
                                bat 'npm update'
                                bat 'npm run dashBoardParallel'
                            }
                        }
                    }
                }

            }
        

    }
