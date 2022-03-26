# reco-calligraphy

使用vuepress-theme-reco构建的博客。

[xushufa]( https://xushufa.cn ) &ensp; [scott180.github.io]( https://scott180.github.io/reco-calligraphy ) &ensp; [reco-calligraphy]( https://github.com/scott180/reco-calligraphy )

 

## 安装

参考 [vuepress]( https://vuepress.vuejs.org/zh/ )  &ensp; [vuepress-theme-reco]( https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html )  &ensp; [vuepress-reco]( https://github.com/vuepress-reco/vuepress-theme-reco-1.x )  &ensp; [vuepress-theme-reco 主题优化]( https://blog.csdn.net/qq_42937522/article/details/122676915 ) &ensp; [vuepress-calligraphy]( https://github.com/scott180/vuepress-calligraphy )

```
# init
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# install
cd my-blog
npm install

# run
npm run dev

# build
npm run build

```


```
中文路径无效，需要安装插件

npm install -D  vuepress-plugin-permalink-pinyin

module.exports = {
  plugins: [
      // 支持中文文件名
      [
        "permalink-pinyin",
        {
          lowercase: true, // Converted into lowercase, default: true
          separator: "-", // Separator of the slug, default: '-'
        },
      ],
  ]
}

```



## 部署

根目录创建 `deploy.sh` 文件

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:scott180/scott180.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  注意配置 `.vuepress\config.js` 的 `base`
# git push -f git@github.com:scott180/reco-calligraphy.git master:gh-pages

cd -

```

---

设置 `package.json`
```
{
    "scripts": {
        "deploy": "bash deploy.sh"
      }
}

```

运行 `npm run deploy` 即可部署到github静态页面

---

> 如出现样式丢失，css文件不能加载问题，需要在 `.vuepress\config.js` 配置 `base` 字段

```
module.exports = {
  "title": "书法练习",
  "description": "",
  base: '/reco-calligraphy/',
```

---

> vuepress 底部添加网站备案号：ICP备案号与公安备案号  [备案信息]( https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html#%E5%A4%87%E6%A1%88%E4%BF%A1%E6%81%AF%E5%92%8C%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4 )

```
module.exports = {
  themeConfig: {
    record: '浙ICP备2022008289号-1',
    recordLink: 'http://beian.miit.gov.cn',
    cyberSecurityRecord: '浙公网安备 33011002016354号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016354',
  }
}

```

---
