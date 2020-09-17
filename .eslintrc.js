module.exports = {
    root: true,
    //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module"
    },
    globals: {
        "$": true
    },
    //此项指定环境的全局变量，下面的配置指定为浏览器环境
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    extends: [
        'plugin:vue/essential'
    ],
    // required to lint *.vue files
    // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
    plugins: [
        "vue"
    ],
    // add your custom rules here
    // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
    // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
    // "off" -> 0 关闭规则
    // "warn" -> 1 开启警告规则
    //"error" -> 2 开启错误规则
    // 了解了上面这些，下面这些代码相信也看的明白了
    'rules': {
        "eqeqeq": 1,
        "no-multiple-empty-lines": [ // 最大空行数
            "error", {
              "max": 1
            }
        ],      
    }
}