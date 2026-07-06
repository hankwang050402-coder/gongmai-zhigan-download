# 工脉智感下载站

静态响应式网站，用于发布“工脉智感” Android 平板版和 Windows 电脑端。

- GitHub Pages 部署网页文件。
- APK 与 EXE 作为 GitHub Release 资产发布。
- 公网发布后，在 `site-config.js` 中写入 Release 下载链接、SHA-256 和下载页二维码。

本地预览时，在本目录运行任意静态 HTTP 服务器，不建议直接以 `file://` 打开。
