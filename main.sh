#!/usr/bin/env bash
echo "sync remote repository..."
git pull
echo "searching for g0v.json ..."
cd crawler
phantomjs main.js
lsc crawler
cd ..
cd awesome-g0v
git checkout awesome-g0v.json
cd ..
echo "sync and parse awesome-g0v..."
git submodule foreach git pull
cd awesome-g0v
lsc parse
cd ..
echo "generate registry..."
lsc main
cp registry.json viewer/
cd awesome-g0v
git checkout awesome-g0v.json
cd ..
echo "push changes back into repo..."
git add registry.json viewer/registry.json needfix.json awesome-g0v
git add crawler/search-result.json crawler/crawler-stat.json crawler/raw
git commit -m "update crawler result and registry.json"
git push
sleep 10
