#!/bin/bash
# Prebuild the project
npx expo prebuild --platform android
cd ./android

# Clear the gradle cache
./gradlew clean

# Build the release APK
./gradlew assembleRelease