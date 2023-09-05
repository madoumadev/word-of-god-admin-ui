#!/bin/zsh
docker build -t madouma2/word-of-god:latest .
docker-compose up -d --force-recreate