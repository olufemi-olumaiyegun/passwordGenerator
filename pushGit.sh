#!/bin/bash
git add $1
git branch -M $3
/bin/bash pushGit1.sh $2
git push origin HEAD:$3


