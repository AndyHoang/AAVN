
docker build -t wildfly-custom .

docker run -d --name wildfly -p 8080:8080 -p 9990:9990 -v $PWD/target/demo.war:/opt/jboss/wildfly/standalone/deployments/demo.war wildfly-custom

docker stop wildfly && docker rm wildfly

docker run -it --rm  --volumes-from maven-repo --name maven -v $PWD:/usr/src/ -w /usr/src/ maven mvn clean package

#why /root/.m2 ?
docker create -v /root/.m2 --name maven-repo busybox /bin/true
docker run -it --volumes-from maven-repo maven mvn archetype:generate


