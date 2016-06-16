# A maven JSF example

## Purpose
* To minify css/javascript file
* To gzip resources by web server's config
* Prove how to improve loading page speed
* Using a java web application framework
* Tasks will be triggered by maven

## Prerequisite
* Java 7
* Maven > 3
* Wildfly > 9

## HOW TO
* Compile to WAR file and deploy to web server
  * `mvn package`
  * deploy `war` file to wildfly
  * open `localhost:8080/demo`

## USING DOCKER
> look at [docker.sh.sample](docker.sample.sh)
* No need to install java
* No need to install maven
* No need to config wildfly

## Explanation


