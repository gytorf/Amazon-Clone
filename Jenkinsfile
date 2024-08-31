#!groovy
//  groovy Jenkinsfile
pipeline  {
    agent any;
    stages {
        
         stage("Backup files")
         {
             steps{
                sh """
                #!/bin/bash
                hostname
                """
             }
         }
        stage("Change IP in appsettings.json")
         {
             steps{
                sh "find BackEnd/Amazon-clone/ -type f -exec sed  -i 's#http://localhost:81#https://20.172.67.23/#g' {} +"
             }
         }
        stage("Change IP in axios.js")
         {
             steps{
                sh "find FrontEnd/my-app/ -type f -exec sed  -i 's#http://localhost:5034#https://20.172.67.23/api#g' {} +"
             }
         }
       stage("Change Database IP in appsettings.json")
         {
             steps{
                sh "find BackEnd/Amazon-clone/ -type f -exec sed  -i 's#Server=20.240.61.200#Server=20.172.67.23#g' {} +"
             }
         }
    }
}
