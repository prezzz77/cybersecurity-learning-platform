# 資訊安全教育平台

以繁體中文提供電腦基礎與資訊安全入門課程的靜態網站，使用原生 HTML、CSS 與 JavaScript。

## 課程

- Level 0 — Computer Fundamentals：電腦、CPU、記憶體、程式、作業系統、檔案、權限與 Terminal。
- Level 1 — Networking Fundamentals：網路、IP、MAC、Port、Packet、TCP / UDP、DNS、HTTP / HTTPS、Router 與 Firewall。

課程頁使用固定教學示例和本機互動，不會執行系統命令或對外部網路發送查詢。

## GitHub Pages

網站由 `.github/workflows/pages.yml` 部署。將更新推送至 `main` 後，GitHub Actions 會發布網站。

第一次部署前，請在 repository 的 **Settings → Pages → Build and deployment** 將 **Source** 設為 **GitHub Actions**。
