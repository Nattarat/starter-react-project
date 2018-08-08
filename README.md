# Style Guideline React

* แนวทางการเขียน Style สำหรับการพัฒนา Web Application ที่ใช้ React เป็น Frontend framework มีเป้าหมายเพื่อให้เกิดการเขียน Code ไปในทิศทางเดียวกัน ช่วยเสริมให้การ Learning, Debug, Refactor, Review, Feedback ของทีมทำได้สะดวกและรวดเร็วขึ้น โดยเขียน Style ในลักษณะ Based on component style

## Table of contents
* [Browser support](#browser-support)
* [UI stack](#ui-stack)
* [Create react app (architecture)](#create-react-app-architecture)
* [UI architecture](#ui-architecture)
* [Syntax and Formatting](#syntax-and-formatting)
* [Meta data setting](#meta-data-setting)
* [Favicon setting](#favicon-setting)
* [Typography setting](#typography-setting)
* [Theme and Global style setting](#theme-and-global-style-setting)
* [How to using other CSS framework in project](#how-to-using-other-css-framework-in-project)
  - [Vendor CSS framework setting](vendor-css-framework-setting)
* [Component](#component)
* [Router and Link](#router-and-link)

## Browser support
| IE | Edge | Firefox | Chrome | Safari | Safari & Chrome iOS | Chrome Android |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 11 | 16+ | 59+ | 65+ | 11+ | 11.2+ | 11.2+ | 64+ |

## UI stack
* [Styled Components](https://www.styled-components.com) ใช้จัดการ Style ของเว็บไซต์ โดยใช้ Syntax และ Features ของ SCSS ได้
* [React Styleguidist](]https://react-styleguidist.js.org) ใช้สร้าง Component document

## Create react app (architecture)
* โครงสร้างโปรเจคของ Create React App ในส่วนของ Frontend ทั้งหมด
```
my-app
├── config
├── node_modules
├── public
│   └── css
│   └── favicons
│   └── fonts
│   └── index.html
│   └── manifest.json
├── scripts
├── src
│   └── actions
│   └── apiService
│   └── components
│   └── containers
│   └── context
│   └── helpers
│   └── reducers
│   └── themes
│   └── App.js
│   └── App.test.js
│   └── index.js
│   └── registerServiceWorker.js
├── .babelrc
├── .env
├── .gitignore
├── package.json
├── server.js
├── styleguide.config.js
└── web.config
```

## UI architecture
* โครงสร้างโปรเจคของ Create React App เฉพาะส่วนการทำงานของ UI
```
my-app
├── public
│   └── css
│   └── favicons
│   └── fonts
│   └── index.html
│   └── manifest.json
├── src
│   └── components
│   └── containers
│   └── themes
│   └── App.js
│   └── index.js
├── .babelrc
├── package.json
├── styleguide.config.js
```

### public
* css เก็บไฟล์ css ของ Styleguidist
* favicons เก็บไฟล์ Logo สำหรับการแสดงผลที่ Browser tab และ Home/Splash screen icon
* fonts เก็บไฟล์ Font family นามสกุลต่างๆ และไฟล์ CSS ที่ทำการ Embed font family ไว้
* index.html เป็นไฟล์เริ่มต้นการทำงานของ React (Single Page Application)
  - จัดการข้อมูลต่างๆ ภายใน <head> เช่น meta data, favicon
  - embed font style
* [manifest.json](https://developers.google.com/web/fundamentals/web-app-manifest/) เป็นไฟล์ JSON ที่ภายในมีข้อมูลการแสดงผลของเว็บไซต์
  - short_name: ชื่อเว็บไซต์แบบย่อ
  - name: ชื่อเว็บไซต์
  - start URL: ไฟล์เริ่มต้นของทำงานของเว็บไซต์ มีความเกี่ยวข้องกับ Google Analytics
  - icons: Logo icon หลากหลายขนาด ที่ถูกนำไปแสดงผลตามส่วนต่างๆ ของเว็บไซต์(Browser tab) และมือถือ(Home/Splash screen icon)
  - display: ตั้งค่าการแสดงผลของ Browser's UI ในมือถือ ได้แก่ standalone(ไม่แสดง Browser's UI) และ browser(แสดง Browser's UI)
  - orientation: ตั้งค่าการแสดงผลของเว็บไซต์ในรูปแบบ Portrait หรือ Landscape (เป็นการตั้งค่าแบบบังคับ โดย Landscape เรามักพบกับเว็บไซต์เกม)
  - theme_color: ตั้งค่าสีของ Browser's UI
  - background_color: ตั้งค่าสีของ Splash screen เมื่อกด Home screen icon ที่มือถือ

### src
* components เก็บ Component ต่างๆ ที่สร้างขึ้นมาเพื่อใช้งานในโปรเจค
* containers เก็บ Page ต่างๆ ของโปรเจค และเป็นส่วนที่เขียน Logic รวมไปถึงการนำ Component มาใช้งาน
* themes เก็บไฟล์ Audio, Document, Image, Video และ Global style
* App.js
  - จัดการเรื่อง Context และ Route
* index.js
  - import Global style ที่อยู่ภายใน themes เข้ามา ได้แก่ reset, scaffolding, main

### others
* .babelrc ไฟล์ config ของ Babel ใช้ใน react-styleguidist
* package.json
  - ใช้ลง Package เสริมในส่วนของ UI
  - ตั้งคำสั่งการ Run script ของโปรเจค เช่น npm start, npm run styleguide
* styleguide.config.js ไฟล์ config ของ react-styleguidist

## Syntax and Formatting
* Coming soon

## Meta data setting
```
my-app
├── public
│   └── index.html
│   └── manifest.json
```
* การตั้งค่า Meta data ที่ index.html เช่น
  - charset
  - viewport
  - title
  - description
  - keywords
* การตั้งค่า Appearence ที่ manifest.json เช่น
  - short_name
  - name
  - display
  - theme_color
  - background_color
* การตั้งค่า Social markup([Open Graph protocol](http://ogp.me)) เช่น
  - [Facebook](https://developers.facebook.com/docs/sharing/webmasters)
  - [Facebook: Instant Articles](https://developers.facebook.com/docs/instant-articles/guides/articlecreate)
  - [Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
  - [Google+](https://developers.google.com/+/web/snippet/)

## Favicon setting
```
my-app
├── public
│   └── favicons
│   └── index.html
│   └── manifest.json
```
* Export รูปภาพ Favicon ขนาดต่างๆ จาก Photoshop/XD และนำมาวางที่โฟลเดอร์ favicons โดยมีชื่อ นามสกุลและขนาด ดังนี้
  - favicon.ico                   > 64 * 64 px
  - favicon@xs.png                > 48 * 48 px
  - favicon@sm.png                > 96 * 96 px
  - favicon@md.png                > 144 * 144 px
  - favicon@lg.png                > 192 * 192 px
  - ms-application-sm.png         > 70 * 70 px
  - ms-application-md.png         > 150 * 150 px
  - ms-application-lg.png         > 310 * 310 px
  - ms-application-wide.png       > 310 * 150 px
  - touch-icon-iphone.png         > 60 * 60 px
  - touch-icon-iphone-retina.png  > 120 * 120 px
  - touch-icon-ipad.png           > 76 * 76 px
  - touch-icon-ipad-retina.png    > 152 * 152 px
* link path รูปภาพ Favicon ให้ถูกต้องที่ <head> ของไฟล์ index.html
* link path รูปภาพ Favicon ให้ถูกต้องที่ manifest.json

## Typography setting
```
my-app
├── public
│   └── fonts
│       └── prompt
│           └── prompt-regular.eot
│           └── prompt-regular.ttf
│           └── prompt-regular.woff
│       └── font.css
│   └── index.html
```
1. แปลงไฟล์ โดยนำไฟล์ ttf หรือ otf ไปแปลงเป็น Web fonts ที่ [fontsquirrel.com](https://www.fontsquirrel.com/tools/webfont-generator) และตั้งค่า ดังนี้
    - เลือก Expert
    - เลือก Font formats: TrueType, WOFF และ EOT Lite
    - เลือก Subsetting: No Subsetting
    - Font Name Suffix ใส่เป็นค่าว่าง
2. ในกรณี fontsquirrel.com ไม่สามารถแปลงเป็น Web fonts ได้ อันเนื่องมาจากเรื่องลิขสิทธิ์ของ Font ให้ใช้ [flaticon.com](https://www.flaticon.com/font-face) แทน
3. สร้างไฟล์ fonts.css และใช้ @font-face เพื่อ Embed font เข้ามาใน CSS
```
@font-face {
  font-family: 'Prompt-Regular';
  src: url('../fonts/prompt/prompt-regular.eot');
  src: url('../fonts/prompt/prompt-regular.eot') format('embedded-opentype'),
       url('../fonts/prompt/prompt-regular.woff') format('woff'),
       url('../fonts/prompt/prompt-regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```
3. ที่ public/index.html ให้ Embed font เข้ามาที่ <head>
```
<link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/fonts/fonts.css">
```

## Theme and Global style setting
```
my-app
├── src
│   └── themes
│       └── styles
│           └── bases
│               └── reset.js
│               └── scaffolding.js
│               └── typographys.js
│               └── variables.js
│           └── helpers
│               └── mixins.js
│               └── utilities.js
│           └── layouts
│               └── home.js
│               └── main.js
│           └── vendors
│               └── react-slick
│                   └── slick.css
│                   └── slick-theme.css
│               └── vendors.js
│   └── index.js
```
* โครงสร้างของ Theme and Global style แบ่งออกเป็น 6 ส่วน ได้แก่
  * bases: เก็บไฟล์สไตล์ตั้งต้นของโปรเจค ประกอบด้วย
    - reset: รีเซต CSS Properties ตั้งต้นของ HTML tags เพื่อให้ Browser ต่างๆ ใช้ค่าตั้งต้นเดียวกัน
    - scaffolding: ตั้งค่า CSS Properties ตั้งต้นของ HTML tags ใหม่สำหรับโปรเจค
    - typographys: เก็บ font style ของโปรเจค
    - variables: ตั้งค่าตัวแปรที่ใช้กับ Style ในโปรเจค เช่น Colors, Font families เป็นต้น
  * helpers: เก็บไฟล์สไตล์ที่สามารถนำไปใช้ซ้ำได้
    - mixins: เก็บ CSS ที่เป็น group properties ที่สามารถเปลี่ยนแปลงค่าได้
    - utilities: เก็บ CSS ที่เป็น Modifier class เช่น color, background-color โดยสามารถนำไป map กับ class ของ Component/Global style ได้
  * layouts: เก็บไฟล์สไตล์ของ Page/Section และ Global
    - page: ไฟล์สไตล์ของ Page/Section โดยสร้างชื่อไฟล์และ Parent class เป็นชื่อ Page/Section นั้นๆ เช่น
      ```
      .home {...}
      ```
    - main: ไฟล์สไตล์ Global
  * vendors: เก็บไฟล์สไตล์ของ Vendors
    - vendor folders: โฟลเดอร์เก็บ CSS ของ Vendor (ในกรณีที่ Vendor นั้นไม่ได้ import css ไว้ใน node_modules)
    - vendors: ไฟล์สไตล์ที่มีการแก้ไข โดยสร้างชื่อไฟล์และ Parent class เป็นชื่อ Vendor นั้นๆ เช่น
      ```
      .react-slick {...}
      ```
* ที่ src/index.js ให้ import ไฟล์ Theme and Global style เข้ามา (ไม่ import ส่วน typographys, variables, mixins และ utilities เพราะ เป็นส่วนเสริมที่นำไปใช้ใน style ส่วนอื่นๆ)
```
import 'themes/styles/bases/reset'
import 'themes/styles/bases/scaffolding'
import 'themes/styles/layouts/main'
import 'themes/styles/layouts/home'
import 'themes/styles/vendors/react-slick'
```