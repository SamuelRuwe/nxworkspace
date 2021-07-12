FROM adoptopenjdk:11-jre-hotspot as builder
COPY target/store-0.0.1-SNAPSHOT.jar store-0.0.1.jar
ENTRYPOINT ["java", "-jar", "/store-0.0.1.jar"]
