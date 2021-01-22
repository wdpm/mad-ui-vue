# Bootstrap 4.0+
## 布局
- grid system: twelve column system, five default responsive tiers

## 页面内容
- typography
- code
- images
- tables
- figures

## 组件
- 警告框（Alerts）
- 徽章（Badge）
- 面包屑导航（Breadcrumb）
- 按钮（Buttons）
- 按钮组（Button group）
- 卡片（Card）
- 轮播（Carousel）
- 折叠（Collapse）
- 下拉菜单（Dropdowns）
- 表单（Forms）
- 输入组（Input group）
- 巨幕（Jumbotron）
- 列表组（List group）
- 媒体对象（Media object）
- 模态框（Modal）
- 导航（Navs）
- 导航条（Navbar）
- 分页（Pagination）
- 弹出框（Popovers）
- 进度条（Progress）
- 滚动监听（Scrollspy）
- 旋转图标（Spinners）
- 轻量弹框（Toasts）
- 工具提示框（Tooltips）

## 工具类
- 边框（Borders）
- 清除浮动（Clearfix）
- 关闭图标 ×
- 颜色（Colors）
- Display 属性
- 内嵌（embed）
- Flex 布局
- 浮动（Float）
- 图片替换
- 交互（Interactions） Text selection
- 溢出（Overflow）
- 定位（Position）
- 屏幕识读器
- 阴影（Shadows）
- 尺寸（Sizing）
- 间隔（Spacing）
- 拉伸链接（Stretched link）
- 文本（Text）
- 垂直对齐
- 可见性

## 方法论
### Summary
- Components should be responsive and mobile-first
- Components should be built with a base class and extended via modifier classes
- Component states should obey a common z-index scale
- Whenever possible, prefer a HTML and CSS implementation over JavaScript
- Whenever possible, use utilities over custom styles
- Whenever possible, avoid enforcing strict HTML requirements (children selectors)

### Responsive
mobile-first + media query

### Classes
.btn and .btn-primary.
- We use .btn for all the common styles like display, padding, and border-width.
- We then use modifiers like .btn-primary to add the color, background-color, border-color, etc.

### z-index scales
- Component elements: 0 is default (initial), 1 is :hover, 2 is :active/.active, and 3 is :focus
- Overlay components: 1000+

### HTML and CSS over JS
- Whenever possible, we prefer to write HTML and CSS over JavaScript
- This principle is our first-class JavaScript API using data attributes

### Utilities
Their primary appeal is speed of use while writing HTML and limiting the amount of custom CSS you have to write.

### Flexible HTML
We focus on single classes in our CSS selectors and try to avoid immediate children selectors (>).  
This gives you more flexibility in your implementation and helps keep our CSS simpler and less specific.
