# reactive
- 此项目为仿vue2响应式原理
- 可以使用类似vue3 watchEffect api，且不用关心作用里的依赖更新
- 使用了调度器进行了依赖更新合并，在多次对一个变量赋值后，依赖仅仅只会更新一次


### 项目如何启动
本项目采用es6 module 模块机制，可以直接在index.html使用vscode的 live server 插件启动。