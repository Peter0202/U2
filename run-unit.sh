#!/usr/bin/env bash

echo "Running unit tests."

dotnet test /p:AltCover=true Services/Tests/Unit