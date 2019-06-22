# shop-mp

> 云商小程序


# 安装和编译
``` bash
# clone
git clone

# 安装
npm install

# 开发运行编译
npm run dev

# 项目编译
npm run build
npm run build:test    // 测试服编译
npm run build:ready   // 预发布编译
npm run build:master  // 正式服编译


# 项目目录结构

    shop-mp
    |—— build
    |—— config 配置文件
    |—— dist 编译后文件
    |—— node_modules 项目依赖
    |—— src 项目源码
    |   |—— components 公共组件
    |   |—— pages 页面文件
    |   |—— utils 工具函数
    |   |—— app.json 小程序全局配置文件
    |   |—— App.vue 页面入口文件
    |   |—— main.json 脚本入口文件
    |   └── ...
    |—— static 项目静态资源文件
    |   └── ...
    |—— uilibs 第三方ui框架，编译时要复制到dist目录下，并配置文件声明依赖
    |—— .babelrc babel配置文件
    |—— .editorconfig 编辑器配置文件
    |—— .gitignore git版本控制排除文件
    |—— .postcssrc.js
    |—— project.config.json 项目配置文件
    |—— ...
    └─— README.md 说明文档

## 补充

页面文件中.vue .style.scss .controller.js是为了在页面代码复杂的情况下进行的拆分。如没有特别需要也可以不需要进行拆分，但为了规范，还是建议进行拆分。
并且，要注意的是：在js拆分的时候，因为框架本身的限制，引入自定义组件时，必须要在.vue文件中做声明，在.controller.js中导入声明会报错

- 项目配置文件
  - [具体查看官方文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html?t=18091916)

# 项目开发规范

## 一、编写规范

  > 项目使用eslint确保编写规范，如不符合规范将编译不通过，具体详见.eslintrc.js

  - 命名规范
    - 变量命名必须有意义，做到见名知意
    - 变量命名，单词之间用下划线连接，不使用驼峰写法
    - 方法命名，使用驼峰命名法，不使用单词下划线连接

  - 注释
    - 变量命名也务必做到有注释
    - 所有的方法必须有注释

  - 缩进
    - 强制使用两个缩进

  - 分号
    - 语句强制不使用分号结尾

  - 空行
    - 空行不能超过3行

  - 函数
    - 函数名与括号之间必须使用一个空格隔开


## 二、git多人开发

### 1.git开发一般流程

1. 项目clone
2. 新建一个分支（dev_zzh）
3. 在新建分支（dev_zzh）下开发
4. 开发完成，提交新建分支到本地仓库 (git add . && git commit -m "提交说明")
5. 切换分支到dev分支并下拉同步确保dev分支为最新，再将新建分支合并到dev分支 (git checkout dev && git pull origin dev && git merge dev_zzh)，如过遇到冲突则解决冲突后再提交
6. 提交dev分支，将分支切换会新建分支 (git push origin dev && git checkout dev_zzh)

### 2.项目新功能开发

1. 复制原有工作分支（这里举例我当前开发分支为 - dev_zzh），命名为新功能名字（如：开发sku功能，复制dev_zzh分支命名为sku）
2. 在新功能分支（sku分支）下开发
    - 开发中如果遇到修改原本版本有更新（如：在开发sku时接到修改页面中的某个按钮样式需求）
        * 1.保存当前开发新功能分支（sku分支）
        * 2.切换回原工作分支（dev_zzh）
        * 3.按需求修改后按**git开发一般流程**流程执行
        * 4.切换会新功能分支继续开发（sku分支）
3. 新功能开发完成通过测试后，将新功能分支（sku分支）合并回原有工作分支（dev_zzh），并删除新功能分支（sku分支）
4. 最后执行**git开发一般流程**


## 三、版本说明
  版本是一个独立不可变的分支.指向特定提交对象的引用，项目上线后将代码合并到（master）分支，并创建对应的版本号和版本说明，提交版本，切换会原工作分支
  - v.[项目大版本更新变动].[项目小版本更新变动].[项目bug修改或其余小修改变动]
  - 如 v1.2.2，对应v[初始版本].[sku功能].[首页按钮修改]
  ```git
  相关命令
  git tag # 查看所有版本
  git show [要查看的版本号] # 查看具体版本信息
  git tag -a [版本号] -m '版本说明' # 创建版本号
  git tag -d [版本号] && git push origin :refs/tags/[版本号] # 删除指定版本并同步远程
  git push origin --tag # 推送所有未推送的版本号到远程
  git fetch origin tag [版本号] 拉取指定版本
  ```

*其余待补充...*
