#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm run build

# 进入生成的构建文件夹
cd c:/vuepress_deploy/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

# 将构建后的文件推送到gh-pages分支
git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:shujinzhe/vuepress.git master:gh-pages

cd -

#将源码推送到master分支
git init
git add -A
git commit -m 'deploy_source'

git push git@github.com:shujinzhe/vuepress.git master