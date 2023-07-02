#!/bin/bash

git add .
# Prompt the user for input
read -p "Enter your comment: " userInput
git commit -m "$userInput"
git push
clear
