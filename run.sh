#Create the War
#mvn compile war:exploded




#Start the web server
startup.sh

#Packege the war file and deploys it
mvn tomcat7:deploy
