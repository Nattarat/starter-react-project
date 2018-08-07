# Style Guideline React

* แนวทางการเขียน Style สำหรับการพัฒนา Web Application ที่ใช้ React เป็น Frontend framework มีเป้าหมายเพื่อให้เกิดการเขียน Code ไปในทิศทางเดียวกัน ช่วยเสริมให้การ Learning, Debug, Refactor, Review, Feedback ของทีมทำได้สะดวกและรวดเร็วขึ้น โดยเขียน Style ในลักษณะ Based on component style

## Table of contents
* [Browser support](#browser-support)
* [UI stack](#ui-stack)
* [Create react app architecture](#create-react-app-architecture)
* [UI Architecture](#ui-architecture)
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

## Create react app Architecture
* โครงสร้างโปรเจคของ Create React App ในส่วนของ Frontend ทั้งหมด
```
my-app
├── config
├── node_modules
├── public
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

## UI Architecture
* โครงสร้างโปรเจคของ Create React App เฉพาะส่วนการทำงานของ UI
```
my-app
├── public
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
* favicons เก็บไฟล์ Logo สำหรับการแสดงผลที่ Browser tab และ Home/Splash screen icon
* fonts เก็บไฟล์ Font family นามสกุลต่างๆ และไฟล์ CSS ที่ทำการ Embed font family ไว้
* index.html เป็นไฟล์เริ่มต้นการทำงานของ React (Single Page Application) และจัดการข้อมูลต่างๆ ภายใน <head>
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
* themes เก็บไฟล์ Document, Image, Video และ Global style
* App.js
  - import react-helmet เพื่อใช้จัดการ <head> ในแต่ละหน้าได้แบบ Dynamics
  - Embed ไฟล์ CSS ของ Font
* index.js
  - import Global style ที่อยู่ภายใน themes เข้ามา ได้แก่ reset, scaffolding, main

### others
* .babelrc ไฟล์ config ของ Babel ใช้ใน react-styleguidist
* package.json
  - ใช้ลง Package เสริมในส่วนของ UI
  - ตั้งคำสั่งการ Run script ของโปรเจค เช่น npm start, npm styleguide
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
* การตั้งค่า Social markup([Open Graph protocol](http://ogp.me)) เช่น
  - [Facebook](https://developers.facebook.com/docs/sharing/webmasters)
  - [Facebook: Instant Articles](https://developers.facebook.com/docs/instant-articles/guides/articlecreate)
  - [Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
  - [Google+](https://developers.google.com/+/web/snippet/)
* การตั้งค่า Appearence ที่ manifest.json เช่น
  - short_name
  - name
  - display
  - theme_color
  - background_color

## Favicon setting
```
my-app
├── public
│   └── favicons
│   └── index.html
│   └── manifest.json
```
* Export รูปภาพ Logo ขนาดต่างๆ จาก Photoshop/XD และนำมาวางที่โฟลเดอร์ favicons โดยมีชื่อ นามสกุลและขนาด ดังนี้
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
* link path รูปภาพ Logo ให้ถูกต้องที่ <head> ของไฟล์ index.html
* link path รูปภาพ Logo ให้ถูกต้องที่ manifest.json

## Typography setting
```
my-app
├── public
│   └── fonts
│       └── maitree
│           └── maitree-medium.eot
│           └── maitree-medium.ttf
│           └── maitree-medium.woff
│       └── font.css
├── src
│   └── App.js
```
1. แปลงไฟล์ โดยนำไฟล์ ttf หรือ otf ไปแปลงเป็น Web fonts ที่ [fontsquirrel.com](https://www.fontsquirrel.com/tools/webfont-generator) และตั้งค่า ดังนี้
    - เลือก Expert
    - เลือก Font formats: TrueType, WOFF และ EOT Lite
    - เลือก Subsetting: No Subsetting
    - Font Name Suffix ใส่เป็นค่าว่าง
2. สร้างไฟล์ font.css และใช้ @font-face เพื่อ Embed font เข้ามาใน CSS
```
@font-face {
  font-family: Maitree-Medium;
  src: url('../fonts/maitree/maitree-medium.eot');
  src: url('../fonts/maitree/maitree-medium.eot') format('embedded-opentype'),
  url('../fonts/maitree/maitree-medium.woff') format('woff'),
  url('../fonts/maitree/maitree-medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```
3. ที่ src/App.js ให้ Embed font เข้ามาในโปรเจคโดยใช้ react-helmet
```
import { Helmet } from 'react-helmet'

class App extends React.Component {
  render() {
    return (
      <div className="root-container">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="./fonts/fonts.css" />
        </Helmet>
      </div>
    );
  }
}
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
│               └── main.js
│           └── vendors
│               └── bootstrap.js
│   └── index.js
```
* โครงสร้างของ Theme and Global style แบ่งออกเป็น 6 ส่วน ได้แก่
  * bases: เก็บไฟล์สไตล์ตั้งต้นของโปรเจค ประกอบด้วย
    - reset: รีเซต CSS Properties ตั้งต้นของ HTML tags เพื่อให้ Browser ต่างๆ ใช้ค่าตั้งต้นเดียวกัน
    - scaffolding: ตั้งค่า CSS Properties ตั้งต้นของ HTML tags ใหม่สำหรับโปรเจค
    - typography: เก็บ font style ของโปรเจค
    - variables: ตั้งค่าตัวแปรที่ใช้กับ Style ในโปรเจค เช่น Colors, Font families เป็นต้น
  * helpers: เก็บไฟล์สไตล์ที่สามารถใช้ข้ามโปรเจคได้ โดยไฟล์ในโฟลเดอร์นี้จะไม่ถูก compiled ออกมาเป็น CSS (ยกเว้น utilities)
    - mixins: เก็บ CSS ที่เป็น group properties ที่สามารถเปลี่ยนแปลงค่าได้และใช้งานเป็นประจำ
    - utilities: เก็บ CSS ที่เป็น single property หรือ group properties ที่ไม่สามารถเปลี่ยนแปลงค่าได้และใช้งานเป็นประจำ
  * layouts: เก็บไฟล์สไตล์ของโครงสร้างที่มีลักษณะเป็น Global สามารถนำไปใช้ได้ทุกที่ของโปรเจคทั้ง Container และ Component *โดยในอนาคตอาจจะ Refactor ไปใช้เป็น Component style แทน
  * vendors: เก็บไฟล์สไตล์ของ CSS Framework ที่นำมาใช้แค่บางส่วน ดูรายละเอียดเพิ่มเติมที่ [How to using other CSS framework in project](#how-to-using-other-css-framework-in-project)
    - สร้าง Parent class เป็นชื่อ CSS Framework นั้นๆ เช่น
    ```
    .bootstrap {...}

    .semantic-ui {...}

    .bulma {...}
    ```
* ที่ src/index.js ให้ import ไฟล์ Theme and Global style เข้ามา (ไม่ import ส่วน typography, variables, mixins และ utilities เพราะ นำไปใช้ที่ scaffolding, vendors/. และ layouts/. แล้ว)
```
import 'themes/styles/bases/reset'
import 'themes/styles/bases/scaffolding'
import 'themes/styles/vendors/bootstrap'
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

export const Logos = importAll(require.context('./images/logos', false, /\.(png|jpe?g|gif|svg)$/));

// Using in Component
import { Logos } from 'themes'

<img src={Logos['logo-react.svg']} alt='Test import svg' />
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
* สร้าง Constant เป็น Object ของ Theme ขึ้นมา โดยภายใน Object จะประกอบไปด้วย Parameters ต่างๆ ที่เกี่ยวข้องกับ UI เช่น Color, Typography เป็นต้น
* สามารถสร้าง Theme ได้มากกว่าหนึ่ง โดย Theme ที่ถูกสร้างขึ้นใหม่มีเงื่อนไขว่า ต้องมี Parameters ต่างๆ ครบทุกอันเหมือนกัน (ค่า Values สามารถเหมือนกันหรือแตกต่างกันได้)
```
// Primary
// ============================================================
export const THEME_PRIMARY = {
  // Colors
  // -------------------------------
  COLORS: {
    // Base
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    RED: '#FF0000',
    // Brand
    GRAY_1: '#F7F7F7',
    GRAY_2: '#CCCCCC',
    GRAY_3: '#999999',
    GRAY_4: '#666666',
    BLUE_1: '#61DAFB',
    GREEN_1: '#2ECC40'
  },

  // Font families
  // -------------------------------
  FONT_FAMILIES: {
    PRIMARY_MEDIUM: 'Maitree-Medium',
    PRIMARY_BOLD: 'Maitree-Bold'
  }
}

// Secondary
// ============================================================
export const THEME_SECONDARY = {
  // Colors
  // -------------------------------
  COLORS: {
    // Base
    BLACK: '#111111',
    WHITE: '#FFFFFF',
    RED: '#E65E5E',
    // Brand
    GRAY_1: '#DDDDDD',
    GRAY_2: '#BBBBBB',
    GRAY_3: '#888888',
    GRAY_4: '#555555',
    BLUE_1: '#61DAFB',
    GREEN_1: '#2ECC40'
  },

  // Font families
  // -------------------------------
  FONT_FAMILIES: {
    PRIMARY_MEDIUM: 'Roboto-Slab-Regular',
    PRIMARY_BOLD: 'Roboto-Slab-Bold'
  }
}
```
* สร้าง Get theme function โดยใช้ Local storage เพื่อเก็บค่าและเช็ค Theme
```
export const getThemes = () => {
  return localStorage.getItem('theme') === 'primary' ? THEME_PRIMARY : THEME_SECONDARY
}
```

### Theme variables using
* Coming soon




















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
│   └── index.js
```
1. ไปที่ Repository ของ CSS Framework แล้วหาไฟล์ CSS ที่ไม่ Minified และทำการ Copy มาใส่ในโปรเจค ตัวอย่างเช่น
    * ต้องการใช้งาน Grids ของ Bootstrap ไปที่ https://github.com/twbs/bootstrap/tree/v4-dev/dist/css
    * Copy เฉพาะส่วนของ Grids
2. ที่ themes/styles/vendors ให้สร้างไฟล์ js ตามชื่อ CSS Framework เช่น bootstrap.js และนำ CSS ที่ทำการ Copy มาวางลงไป
    * ให้เขียน Comment ที่หัว โดยมีรายละเอียด ดังนี้
      - ชื่อ CSS Framework และตัวเลข Version
      - ชื่อ Element/Component Class และ GitHub Link ของ CSS Framework
      ```
      * Bootstrap v4.0.0
        - Grids (https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap-grid.css)
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

## Component
* เปลี่ยนมาใช้ switch case, enum
* ตัวอย่าง ถ้ามีการเพิ่มโคร้งสร้างภายใน component เช่น <Button.dropdown></Button>

### Component design
* เมื่อได้รับไฟล์ Design มา เช่น .xd, .psd, .ai ให้ไล่ดูดีไซน์ทั้งหมดทุกหน้า เพื่อลิสต์รายละเอียดออกมาสร้าง Variables ดังนี้
  1. Typography:
      - Font family
      - Font size
      - Line height
      - Letter spacing
  2. Color
  3. Spacing
      - padding
      - margin
  4. Sizing
      - Ratio
      - Width
      - Height
  5. Icon
  6. Background/Graphic
  7. and more... e.g. Border radius, Box shadow

* ออกแบบโครงสร้าง HTML ของ Component
  1. วิเคราะห์ Design และเขียนออกมาเป็นโครง HTML
    ```
    <div className="card">
      <div className="card-segment">
        <div className="card-image">
          <img src="" alt="Image"/>
        </div>
        <h2 className="card-heading">Heading</h2>
        <div className="card-meta">Meta</div>
        <p className="card-content">Content</p>
      </div>
      <div className="card-segment">
        <div className="card-footer">Footer</div>
      </div>
    </div>
    ```
  2. สร้าง Styled Components ให้สอดคล้องกับโครง HTML


