#!/bin/bash
source ./env.sh
docker build -t $GAME_OF_LIFE_IMAGE -f $GAME_OF_LIFE_DOCKERFILE $FRONT_END_DIR
docker run -p $GAME_OF_LIFE_PORT $GAME_OF_LIFE_IMAGE
