// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 允许有声明后未使用的变量
    "no-unused-vars": [0],
    "no-undef": 0,
    //空行最多不能超过5行
    "no-multiple-empty-lines": [0, {"max": 5}],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    // 允许使用原型
    "no-proto": 0,
    //允许扩展native对象
    "no-extend-native": 0,
    //new时可以不加小括号
    "new-parens": 0,
    "no-caller": 0
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    requirePlugin: true
  }
}
