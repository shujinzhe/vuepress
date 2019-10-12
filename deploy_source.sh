#!/usr/bin/env sh

# 终止一个错误
set -e

git init
git add -A
git commit -m 'deploy_source'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push git@github.com:shujinzhe/vuepress.git master

cd -