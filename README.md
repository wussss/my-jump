### 复现跳一跳微信小游戏

> 使用 ES6 开发
> 游戏逻辑使用面向对象进行模块化开发（OOP）
> 游戏整体使用 MVC 进行控制和管理

```JavaScript
//基于第三方库：three.js和weapp-adapter.js，可从官方文档中下载相应的源码
import * as THREE from '../libs/three'
import './libs/weapp-adapter'
```

#### 功能列表(MVP 版本)

- [x] 游戏场景的生成
  - [x] 游戏进行中页面、游戏结束页面
  - [x] 显示分数
  - [x] 在 3D 场景中绘制 2d 元素，如文字等
  - [x] 构建 mvc 结构控制页面跳转
  - [x] 构建 block 基类，cube/cylinder 继承类
  - [x] 跳动主体 bottle 增加图片纹理和加速掉落逻辑
  - [x] 基本场景和视角搭建
  - [x] 相机和光照调试
- [x] bottle 跳跃
- [x] bottle 的碰撞过程检测
- [x] 分数累计
- [ ] 社交优化

#### 目录结构

- configs 配置文件
- libs 第三方库
  - three.js 支持 webgl API 的能力
  - weapp-adapter.js 支持 DOM、BOM 能力
- src 业务逻辑
  - main 主逻辑
  - game mvc 结构
  - pages 页面
  - utils 通用方法
- sources 音视频图片资源等
- game.js 项目入口文件
- game.json 小程序属性配置文件
- project.config.json 项目配置文件

#### 功能截图

> 场景搭建与优化
> <image width='200' src="https://github.com/wussss/my-hop/blob/master/screenshot/first.gif"></image><image width='200' src="https://github.com/wussss/my-hop/blob/master/screenshot/second.png"></image>
