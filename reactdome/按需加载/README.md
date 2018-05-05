## webpack
```
npm init -y
```

## 安装webpack
```
npm install webpack webpack-cli webpack-dev-server babel-core babel-loader babel-preset-env babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader file-loader url-loader html-webpack-plugin -D
```

## react
```
npm install react react-dom redux react-redux react-router-dom axios redux-thunk redux-promise
```

## 数据获取
- 先写服务端 可以正常获取数据
- 写api方法
- 先写一个action-types
- action调用api方法，派发到reducer中
- reducer将派发的数据进行保存
- 组件
- express