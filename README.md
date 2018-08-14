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
  - จัดการข้อมูลต่างๆ ภายใน head เช่น meta data, favicon
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
* link path รูปภาพ Favicon ให้ถูกต้องที่ head ของไฟล์ index.html
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
3. ที่ public/index.html ให้ Embed font เข้ามาที่ head
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

      // import ไว้ที่ Container ที่นำไปใช้เท่านั้น
      import 'themes/styles/layouts/home'
      ```
    - main: ไฟล์สไตล์ Global
  * vendors: เก็บไฟล์สไตล์ของ Vendors
    - vendor folders: โฟลเดอร์เก็บ CSS ของ Vendor (ในกรณีที่ Vendor นั้นไม่ได้ import css ไว้ใน node_modules)
      ```
      // import ไว้ที่ Container ที่นำไปใช้เท่านั้น
      import 'themes/styles/vendors/css/react-slick/slick.min.css'
      import 'themes/styles/vendors/css/react-slick/slick-theme.min.css'
      ```
    - vendors: ไฟล์สไตล์ที่มีการแก้ไข โดยสร้างชื่อไฟล์และ Parent class เป็นชื่อ Vendor นั้นๆ เช่น
      ```
      .react-slick {...}

      // import ไว้ที่ src/index.js (เนื่องจากใช้ injectGlobal ของ styled-components จึงเป็น Global style)
      // หมายเหตุ: ถึงแม้จะ import ไว้ที่ Container แต่ก็ยังคงเป็น Global style ดังนั้น import ไว้ที่ src/index.js ที่เดียวเพื่อง่ายต่อการจัดการ
      import 'themes/styles/vendors/react-slick'
      ```
    - กรณีต้องการนำ CSS Framework มาใช้งาน เช่น Bootstrap, Bulma, SemanticUI ให้ดูวิธีการที่หัวข้อ [How to using other CSS framework in project](#how-to-using-other-css-framework-in-project)
* ที่ src/index.js ให้ import ไฟล์ Theme and Global style เข้ามา (ไม่ import ส่วน typographys, variables, mixins และ utilities เพราะ เป็นส่วนเสริมที่นำไปใช้ใน style ส่วนอื่นๆ)
```
import 'themes/styles/bases/reset'
import 'themes/styles/bases/scaffolding'
import 'themes/styles/vendors/react-slick'
import 'themes/styles/vendors/boostrap'
// import 'main' ไว้ท้ายสุดเผื่อกรณีที่จำเป็นต้อง Overwrite style ของ Vendors
import 'themes/styles/layouts/main'
```

## Audios Documents Images and Videos setting
```
my-app
├── src
│   └── themes
│       └── audios
│       └── documents
│       └── images
│           └── contents
│           └── icons
│           └── logos
│           └── shares
│       └── videos
│       └── index.js
```
* audios เก็บไฟล์ audios เช่น mp3 เป็นต้น
* documents เก็บไฟล์เอกสาร เช่น PDF, Microsoft Word/Excel/Powerpoint เป็นต้น เพื่อใช้สำหรับดาวน์โหลด
* images เก็บไฟล์ image ที่นำมาใช้ในเว็บไซต์ โดยภายในแบ่งเป็น folder ออกเป็น
  - contents: เก็บ Content image, Banner ที่เป็นรูป Mockup (ภายหลัง User จะเป็นคนใส่เองจาก CMS)
  - icons: เก็บ Icon
  - logos: เก็บ Logo
  - shares: เก็บ Background, Graphic (เป็นรูปที่เกี่ยวข้องกับ Layout และ Design ที่สามารถหยิบไปใช้ได้ทุกที่)
* videos เก็บไฟล์ videos เช่น mp4 เป็นต้น
* themes/index.js ตั้งค่าการ [Import all](https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack) พร้อมทั้งระบุ extension ของไฟล์ที่จะใช้งาน เพื่อความสะดวกในการ import ไปใช้ใน Container และ Component
```
// themes/index.js
function importAll(r) {
  let files = {};
  r.keys().forEach((item, index) => {
    files[item.replace('./', '')] = r(item);
  });
  return files;
}

export const LOGOS = importAll(require.context('./images/logos', false, /\.(png|jpe?g|gif|svg)$/));

// Using in Component
import { LOGOS } from 'themes'

<img src={LOGOS['logo-react.svg']} alt='' />
```

## Theme variables setting
```
my-app
├── src
│   └── themes
│       └── styles
│           └── bases
│               └── variables
```
* สร้าง Constant เป็น Object ของ Theme ที่เกี่ยวข้องกับ UI เช่น Color, Typography เป็นต้น
```
export default {
  // Colors
  // ============================================================
  COLORS: {
    // Base
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    RED: '#FF0000',
    GREEN: '#00FF00',
    BLUE: '#0000FF',

    // Role
    TEXT_HEAD: '#333333',
    TEXT_SUB_HEAD: '#666666',
    TEXT_DETAIL: '#999999',
    TEXT_LINK: '#006DC9',
    VALIDATION_ERROR: '#FF695C',
    VALIDATION_SUCCESS: '#4CFF8D',

    // Overlay
    OVERLAY_1: 'rgba(0, 0, 0, 0.75)'
  },

  // Font families
  // ============================================================
  FONT_FAMILIES: {
    FIRST_REGULAR:  'Prompt-Regular',
    FIRST_MEDIUM:   'Prompt-Medium',
    FIRST_BOLD:     'Prompt-Bold',
    SECOND_REGULAR: 'Thonburi-Regular',
    SECOND_BOLD:    'Thonburi-Bold'
  }
}
```

### Theme variables using
* Variables ที่สร้างขึ้นมีลักษณะเป็น Object(a key-value pair) ดังนั้นการเข้าถึง properties ที่อยู่ด้านในจะใช่รูปแบบของ Dot notation
```
.class {
  // ไม่มี CSS property นำหน้าเพราะ เป็นการ import กลุ่มของ CSS properties เข้ามา
  ${TYPOGRAPHYS.FONT_STYLES.FONT_FIRST_REGULAR_LG};

  // ไม่มี CSS property นำหน้าเพราะ เป็นการ import กลุ่มของ Modifier class เข้ามา
  ${MIXINS.PLACEHOLDER({
    color: ${VARIABLES.COLORS.TEXT_PLACEHOLDER}
  })};

  ${UTILITIES.BACKGROUND_COLORS()};

  // มี CSS property นำหน้าเพราะ เป็นการ import ค่าเข้ามาใน CSS property
  color: ${VARIABLES.COLORS.TEXT_LINK};
}

```

## How to setting path file for import
* ที่ root folder จะมีไฟล์ .env ที่ข้างในกำหนด root path ไว้เป็น src
```
NODE_PATH=src
```
* จากการกำหนด src เป็น root path ทำให้เราไม่จำเป็นต้องใช้ ./ การอ้างถึง root path อีกต่อไป ทำให้การอ้างอิง path ดูเป็นระเบียบ
```
// before
import './themes/styles/bases/reset'

// after
import 'themes/styles/bases/reset'
```
* ในกรณีของ Component จะเลือกใช้ src เป็น relative path เพื่อนำไปอ้่างอิงกับ Styleguidist ในการสร้าง Component document (ถ้าเป็น root path จะเกิด error ตอน run Styleguidist เนื่องจากหา file ไม่เจอ)
```
// before
import {
  VARIABLES
} from 'themes'

// after
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
```

## How to using vendor CSS framework in project
* ปัญหาของการนำ CSS framework มาใช้ในโปรเจค ได้แก่
  - ใช้ Class ของ CSS Framework แค่บางส่วน (น้อยกว่า 50%) เนื่องจาก Designer ไม่ได้ออกแบบโดยใช้ CSS Framework เป็น Base
  - เขียนทับ Class ของ CSS Framework ที่นำมาใช้ เพื่อให้เข้ากันกับ Design ทำให้เกิดความซับซ้อนของ Class โดยไม่จำเป็น
  - CSS Framework มักจะเอาชื่อ Class ที่มีความเป็น Conventional ที่ดีไปใช้หมดแล้ว ทำให้ยากต่อการตั้งชื่อ Class ใหม่และมีโอกาสที่จะตั้งชื่อแล้วซ้ำกัน
* แนวทางการนำ CSS framework มาใช้ในโปรเจค เพื่อหลีกเลี่ยงปัญหาต่างๆ คือ การแบ่งส่วน Class ที่จะใช้ออกมาใส่ไว้ในโปรเจคของเรา (ไม่เอามาทั้งหมด)

### Vendor CSS framework setting
```
my-app
├── src
│   └── themes
│       └── styles
│           └── vendors
│               └── bootstrap.js
```
1. ไปที่ Repository ของ CSS Framework แล้วหาไฟล์ CSS ที่ไม่ Minified และทำการ Copy มาใส่ในโปรเจค ตัวอย่างเช่น
    * ต้องการใช้งาน Grids ของ Bootstrap ไปที่ https://github.com/twbs/bootstrap/tree/v4-dev/dist/css
    * Copy เฉพาะส่วนของ Grids
2. ที่ themes/styles/vendors ให้สร้างไฟล์ js ตามชื่อ CSS Framework เช่น bootstrap.js และนำ CSS ที่ทำการ Copy มาวางลงไป
    * ให้เขียน Comment ที่หัว โดยมีรายละเอียด ดังนี้
      - ชื่อ CSS Framework, ตัวเลข Version และ GitHub Link
      - ชื่อ Element/Component Class
      ```
      * Bootstrap v4.0.0 (https://github.com/twbs/bootstrap)
        - Grids
      ```
    * สร้าง Class wrapper เป็นชื่อของ CSS Framework นั้นๆ ครอบ CSS ที่ Copy มาเพื่อป้องกันการซ้ำซ้อนกันของ Class name
      ```
      .bootstrap {
        // Classes from Bootstrap
      }
      ```
3. ที่ src/index.js ให้ import ไฟล์ไว้ก่อน themes/styles/layouts/main เพื่อในอนาคตอาจจะมีความจำเป็นต้อง Overwrite class ของ CSS Framework
```
import 'themes/styles/vendors/bootstrap'
import 'themes/styles/layouts/main'
```
