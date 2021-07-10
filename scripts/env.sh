#!/bin/bash

ROOT_DIR="../"
DOCKER_DIR="${ROOT_DIR}/scripts/docker"
FRONT_END_DIR="${ROOT_DIR}/frontend"
BACK_END_DIR="${ROOT_DIR}/backend"

GAME_OF_LIFE_IMAGE="nx/gameoflife:latest"
GAME_OF_LIFE_DOCKERFILE="${FRONT_END_DIR}/apps/gameoflife/Dockerfile"
GAME_OF_LIFE_PORT="4200:80"
