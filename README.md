# Jingyu SUN 个人学术与职业作品集

简洁的多页面静态网站，使用 HTML、CSS 和原生 JavaScript。支持中文、English、Français 三语切换，包含主页、个人简介、经历、研究项目、技能、教育和联系方式。无需 Node.js、构建流程、后端或付费组件。

## 本地预览

直接在浏览器打开 `index.html`。网站链接均为相对路径；也可将项目文件夹拖入本地静态网站预览工具。要体验多页面导航，请在浏览器中打开每页 HTML 文件。

## 页面

- `index.html`：首页与肖像照片
- `about.html`：个人简介与研究兴趣
- `experience.html`：五段工作、实习与项目经历
- `projects.html`：两篇硕士研究项目、问题、方法、结果与边界
- `skills.html`：六个能力领域及语言
- `education.html`：五项学历，保留法语正式名称
- `contact.html`：简历中的邮箱和 LinkedIn

每页都是独立 HTML 地址；语言切换不离开当前页，浏览器前进和后退照常工作。导航菜单适配手机屏幕。页面内容由 `js/main.js` 的本地多语言数据渲染，无第三方 JavaScript 依赖。

## 内容与准确性

教育经历、雇主、日期、工具、语言、邮箱和 LinkedIn 整理自简历。研究问题、数据来源、模型、样本量与结果来自用户在改版说明中提供的研究摘要；本次没有收到两篇论文 PDF，因此上线前请对照论文原文复核摘要。垃圾政策结果使用“相关”而非因果表述；患者偏好研究注明样本为 60 人，不将假设支付意愿说成实际支付行为。DCE、Logit、混合 Logit 和 WTP 被明确关联到患者偏好研究。

法语论文原题在三语页面中均保持法文原文。AI 作为研究兴趣呈现，没有添加未经材料支持的 AI 工程经验或框架。

## 照片与文件

- 首页照片：`assets/images/jingyu-sun.webp`，由提供的照片压缩生成，不包含原图元数据。
- 简历下载：`assets/documents/CV_Jingyu_SUN_Public.pdf`。这是遮盖手机号和街道地址的公开版扫描 PDF；文字不能直接选取复制。
- 不要把未经确认可公开的论文、成绩单或个人资料放入 `assets/`。

## 发布到 GitHub Pages

目标仓库：[`JingyuSUN-0825/JingyuSUN.github.io`](https://github.com/JingyuSUN-0825/JingyuSUN.github.io)。按仓库所有者和仓库名，该仓库的 GitHub Pages 项目站点预期地址为 `https://JingyuSUN-0825.github.io/JingyuSUN.github.io/`。若希望使用账号根地址 `https://JingyuSUN-0825.github.io/`，仓库名称需为 `JingyuSUN-0825.github.io`。发布地址最终以仓库 **Settings → Pages** 显示为准。

### 图形界面上传

1. 登录 GitHub，打开上面的目标仓库。
2. 点击 **Add file → Upload files**。
3. 将此文件夹内的所有文件和子文件夹拖到仓库根目录，确保 `index.html` 直接出现在仓库首页。
4. 提交更改到默认分支（通常为 `main`）。不要把 `jingyu-sun-portfolio` 这一整个父文件夹嵌在仓库里。
5. 打开仓库 **Settings → Pages**。
6. 在 **Build and deployment** 下选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/(root)`，然后保存。
7. 等待 Pages 部署完成，访问 `https://JingyuSUN-0825.github.io/JingyuSUN.github.io/`。首次发布需要几分钟。
8. 用手机或无痕窗口检查中英法切换、各页面导航、照片和简历下载。

### 更新网站

在 GitHub 仓库中选择文件，点击编辑按钮修改；新增照片或 PDF 可通过 **Add file → Upload files** 上传。每次提交到发布分支后，Pages 会重新部署。

## 绑定自定义域名（待购买后）

目前尚未购买 `jingyu-sun.com`，因此没有添加 `CNAME` 文件或 DNS 记录。域名购买和续费由注册商收费；GitHub Pages 的静态托管和 HTTPS 可免费使用。

购买并确认域名后：

1. 在仓库 **Settings → Pages → Custom domain** 填入 `www.jingyu-sun.com` 并保存。
2. 在注册商的 DNS 管理页面添加 **CNAME**：主机名 `www`，目标 `JingyuSUN-0825.github.io`（不加仓库名）。
3. 若也要让根域名 `jingyu-sun.com` 指向网站，在 GitHub Pages 中添加根域名，并在 DNS 添加 GitHub Pages 文档列出的 A 记录：`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`。按注册商界面删除冲突的旧 A/AAAA 记录。
4. 等待 DNS 生效和 GitHub 配置证书；随后在 Pages 设置中启用 **Enforce HTTPS**。

域名可用性需向注册商查询。尚未发生购买、DNS 修改或 HTTPS 域名验证。

## 维护内容

- 修改各页文字、经历、教育与联系方式：编辑 `js/main.js` 中对应 `zh`、`en`、`fr` 内容对象。
- 新增经历或学历：在对应语言的 `items` 数组中添加字段一致的新对象。
- 新增研究项目：在三种语言的 `projects.items` 中按相同顺序添加；法语题目同步添加到 `official.projectTitles`。
- 更换照片：替换 `assets/images/jingyu-sun.webp`，或调整 `index.html` 引用和 `css/style.css` 的 `object-position`。
- 更换公开简历：替换 `assets/documents/CV_Jingyu_SUN_Public.pdf`，并先确认其中没有不想公开的个人信息。
- 调整颜色、字号和间距：修改 `css/style.css` 开头的 `:root` 变量与组件样式。

## 发布检查清单

- 七个 HTML 页面和文件路径均已上传，`index.html` 位于仓库根目录。
- 导航链接可打开所有页面；语言切换可在当前页面中更换全部主体内容。
- 检查桌面和窄屏下的菜单、长法语标题及项目内容。
- 照片正确显示，公开版 CV 可下载并打开。
- 邮箱、LinkedIn 和研究摘要与本人最新材料一致。
- Pages 部署状态成功，公开地址可从另一台设备访问。
- 自定义域名仅在购买并配置 DNS 后检查证书与 HTTPS。

## 目录结构

```text
index.html             about.html              experience.html
projects.html          skills.html              education.html
contact.html           404.html                 css/style.css
js/main.js             assets/images/           assets/documents/
```
