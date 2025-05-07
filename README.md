# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## 项目结构

/app // 路由页面
/(tabs) // 标签页路由
/modals // 模态框路由
/auth // 认证相关路由
/assets // 静态资源
/images
/icons
/fonts
/components // 组件
/ui // UI 组件
/business // 业务组件
/constants // 常量定义
/hooks // 自定义 hooks
/services // API 服务
/store // 状态管理
/types // TypeScript 类型定义
/utils // 工具函数

@expo/vector-icons [https://icons.expo.fyi/Index] 内置在 expo 中的图标库

expo-xxx [https://docs.expo.dev/versions/latest/] 内置在 expo 中的库

- expo-blur 毛玻璃效果
- expo-constants 应用信息
- expo-font 字体
- expo-haptics 触觉反馈
- expo-image 图片
- expo-linking 链接
- expo-router 路由
- expo-splash-screen 启动屏
- expo-status-bar 状态栏
- expo-symbols 系统图标
- expo-system-ui 系统 UI
- expo-web-browser 浏览器
- expo-linear-gradient 线性渐变

  @react-navigation/xxx [https://reactnavigation.org/docs/getting-started] 第三方库

  react-native-gesture-handler 手势处理

  - 点击（Tap）
    长按（LongPress）
    平移（Pan）
    捏合缩放（Pinch）
    旋转（Rotation）
    滑动（Swipe）
    原生滚动（NativeViewGestureHandler）

  react-native-reanimated 动画处理

  react-native-safe-area-context 安全区域
  react-native-screens 屏幕管理

  - 与 @react-navigation/native 完美集成
    支持 react-native-gesture-handler 手势系统
    配合 react-native-safe-area-context 处理安全区域

  react-native-web

  - 一个用于将 React Native 应用转换为 Web 应用的库。它允许你使用相同的代码库同时开发移动端和网页端

  react-native-webview webview

  - 一个用于在 React Native 应用中嵌入网页的组件。它提供了一个完整的浏览器功能。
