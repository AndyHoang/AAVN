 FROM jboss/wildfly
 COPY wildfly-config/standalone.xml /opt/jboss/wildfly/standalone/configuration/
 RUN /opt/jboss/wildfly/bin/add-user.sh admin admin --silent
 CMD ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0"]
