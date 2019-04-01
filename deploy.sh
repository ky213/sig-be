#!/bin/bash
a=$(docker inspect -f {{.State.Running}} $client)
if [ $? -eq 1 ]; then
  echo ""
else
  if [ "$a" == "true" ]; then
    echo "Stoping and removing App container"
    docker stop "$client"
  else
    echo "Removing App container"
    docker rm "$client"
  fi
fi

db=$(docker inspect -f {{.State.Running}} mongo)
if [ $? -eq 1 ]; then
  echo ""
else
  if [ "$db" == "true" ]; then
    echo "Stoping and removing mongo container"
    docker stop mongo
  else
    echo "Removing mongo container"
    docker rm mongo
  fi
fi

echo "Lunching mongo container.... "
docker run  --name mongo --rm -p 27017:27017 --rm -d mongo
echo "Building backend alpha docker images .... "
docker build -t ci/backend:alpha . && docker run --name $"client" -p 3000:3000 -d --rm --link mongo:db ci/backend:alpha
