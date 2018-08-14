// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Variables:
//
// * Factors
// * Colors
// * Font families
// * Font sizes
// * Line heights
// * Letter spacing
// * Zindexs
// * Breakpoints
// * Transitions
// * Animation timings
// * Border widths
// * Border radiuses
// * Box shadows
// * Component widths
// * Component heights
// * Spacings
// * Paddings
// * Margins
// * Grid Gutters
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Factors (using in variables)
// ============================================================
const SPACING_FACTOR = '5px'
const LINE_HEIGHT_FACTOR = '1.35'
// Font sizes
const FONT_SIZES_MN = '12px'
const FONT_SIZES_TN = '14px'
const FONT_SIZES_XXS = '16px'
const FONT_SIZES_XS = '18px'
const FONT_SIZES_SM = '20px'
const FONT_SIZES_MD = '24px'
const FONT_SIZES_LG = '48px'
// const FONT_SIZES_XL = 'px'
// const FONT_SIZES_XXL = 'px'
// const FONT_SIZES_BG = 'px'
// const FONT_SIZES_HG = 'px'
// const FONT_SIZES_MS = 'px'
// Font responsive sizes (compare with design at w375 * h667)
const FONT_RESPONSIVE_SIZES_MN = '3.25vw' // 12px
const FONT_RESPONSIVE_SIZES_TN = '3.75vw' // 14px
const FONT_RESPONSIVE_SIZES_XXS = '4.25vw'  // 16px
const FONT_RESPONSIVE_SIZES_XS = '4.75vw' // 18px
const FONT_RESPONSIVE_SIZES_SM = '5.25vw' // 20px
const FONT_RESPONSIVE_SIZES_MD = '6.5vw' // 24px
const FONT_RESPONSIVE_SIZES_LG = '12.75vw' // 48px
// const FONT_RESPONSIVE_SIZES_XL = 'px'
// const FONT_RESPONSIVE_SIZES_XXL = 'px'
// const FONT_RESPONSIVE_SIZES_BG = 'px'
// const FONT_RESPONSIVE_SIZES_HG = 'px'
// const FONT_RESPONSIVE_SIZES_MS = 'px'

export default {
  // Factors
  // ============================================================
  FACTORS: {
    SPACING: SPACING_FACTOR,
    LINE_HEIGHT: LINE_HEIGHT_FACTOR,
  },

  // Colors
  // ..
  // Number is color intensity.
  // Little number is Lightness.
  // Big number is Darkness.
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
    TEXT_PLACEHOLDER: '#AAAAAA',
    VALIDATION_ERROR: '#FF695C',
    VALIDATION_SUCCESS: '#4CFF8D',

    // Overlay
    OVERLAY_1: 'rgba(0, 0, 0, 0.75)',

    // Specific (for unique color in design)
  },

  // Font families
  // ..
  // Conventional Font family name:
  // ..
  // First, Second, Third, Fourth, Fifth, ...
  // ..
  // Not use Primary, Secondary, Tertiary, Quaternary, Quinary, ...
  // because long and difficult spelling.
  // ============================================================
  FONT_FAMILIES: {
    FIRST_REGULAR:  'Prompt-Regular',
    FIRST_MEDIUM:   'Prompt-Medium',
    FIRST_BOLD:     'Prompt-Bold',
    SECOND_REGULAR: 'Thonburi-Regular',
    SECOND_BOLD:    'Thonburi-Bold',
  },

  // Font sizes
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  FONT_SIZES: {
    MN:   FONT_SIZES_MN,  // 12px
    TN:   FONT_SIZES_TN,  // 14px
    XXS:  FONT_SIZES_XXS, // 16px
    XS:   FONT_SIZES_XS,  // 18px
    SM:   FONT_SIZES_SM,  // 20px
    MD:   FONT_SIZES_MD,  // 24px
    LG:   FONT_SIZES_LG,  // 48px
    // XL:   FONT_SIZES_XL,  // px
    // XXL:  FONT_SIZES_XXL, // px
    // BG:   FONT_SIZES_BG,  // px
    // HG:   FONT_SIZES_HG,  // px
    // MS:   FONT_SIZES_MS,  // px
  },

  // Responsive
  FONT_RESPONSIVE_SIZES: {
    MN:   FONT_RESPONSIVE_SIZES_MN,  // 12px
    TN:   FONT_RESPONSIVE_SIZES_TN,  // 14px
    XXS:  FONT_RESPONSIVE_SIZES_XXS, // 16px
    XS:   FONT_RESPONSIVE_SIZES_XS,  // 18px
    SM:   FONT_RESPONSIVE_SIZES_SM,  // 20px
    MD:   FONT_RESPONSIVE_SIZES_MD,  // 24px
    LG:   FONT_RESPONSIVE_SIZES_LG,  // 48px
    // XL:   FONT_SIZES_XL,  // px
    // XXL:  FONT_SIZES_XXL, // px
    // BG:   FONT_SIZES_BG,  // px
    // HG:   FONT_SIZES_HG,  // px
    // MS:   FONT_SIZES_MS,  // px
  },

  // Line heights
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  LINE_HEIGHTS: {
    MN:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_MN})`,   // 16.2px
    TN:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_TN})`,   // 18.9px
    XXS:  `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_XXS})`,  // 21.6px
    XS:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_XS})`,   // 24.3px
    SM:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_SM})`,   // 27px
    MD:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_MD})`,   // 32.4px
    LG:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_LG})`,   // 64.8px
    // XL:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_XL})`,   // px
    // XXL:  `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_XXL})`,  // px
    // BG:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_BG})`,   // px
    // HG:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_HG})`,   // px
    // MS:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_MS})`,   // px
  },

  // Responsive
  LINE_RESPONSIVE_HEIGHTS: {
    MN:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_RESPONSIVE_SIZES_MN})`,   // 16.2px
    TN:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_RESPONSIVE_SIZES_TN})`,   // 18.9px
    XXS:  `calc(${LINE_HEIGHT_FACTOR} * ${FONT_RESPONSIVE_SIZES_XXS})`,  // 21.6px
    XS:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_RESPONSIVE_SIZES_XS})`,   // 24.3px
    SM:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_RESPONSIVE_SIZES_SM})`,   // 27px
    MD:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_RESPONSIVE_SIZES_MD})`,   // 32.4px
    LG:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_RESPONSIVE_SIZES_LG})`,   // 64.8px
    // XL:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_XL})`,   // px
    // XXL:  `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_XXL})`,  // px
    // BG:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_BG})`,   // px
    // HG:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_HG})`,   // px
    // MS:   `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_MS})`,   // px
  },

  // Letter spacing
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  LETTER_SPACINGS: {
    // MN:   'px',
    // TN:   'px',
    // XXS:  'px',
    // XS:   'px',
    // SM:   'px',
    // MD:   'px',
    // LG:   'px',
    // XL:   'px',
    // XXL:  'px',
    // BG:   'px',
    // HG:   'px',
    // MS:   'px',
  },

  // Zindexs
  // ============================================================
  Z_INDEXS: {
    LV_1: '1',
    LV_2: '9',
    LV_3: '10',
    LV_4: '11',
    LV_5: '99',
    LV_6: '100',
    LV_7: '101',
    LV_8: '999',
    LV_9: '1000',
    LV_10: '1001',
  },

  // Breakpoints
  // ============================================================
  BREAKPOINTS: {
    // Mobile
    MOBILE_XS: '320px',
    MOBILE_SM: '360px',
    MOBILE_MD: '375px',
    MOBILE_LG: '414px',
    // Max
    MOBILE_XS_MAX: '359px',
    MOBILE_SM_MAX: '374px',
    MOBILE_MD_MAX: '413px',
    MOBILE_LG_MAX: '479px',
    // Min
    MOBILE_XS_MIN: '321px',
    MOBILE_SM_MIN: '361px',
    MOBILE_MD_MIN: '376px',
    MOBILE_LG_MIN: '415px',

    // Phablet
    PHABLET_XS: '480px',
    PHABLET_SM: '640px',
    PHABLET_MD: '667px',
    PHABLET_LG: '736px',
    // Max
    PHABLET_XS_MAX: '639px',
    PHABLET_SM_MAX: '665px',
    PHABLET_MD_MAX: '735px',
    PHABLET_LG_MAX: '767px',
    // Min
    PHABLET_XS_MIN: '481px',
    PHABLET_SM_MIN: '641px',
    PHABLET_MD_MIN: '668px',
    PHABLET_LG_MIN: '737px',

    // Tablet
    TABLET_XS: '768px',
    TABLET_SM: '800px',
    TABLET_MD: '812px',
    TABLET_LG: '1024px',
    // Max
    TABLET_XS_MAX: '799px',
    TABLET_SM_MAX: '811px',
    TABLET_MD_MAX: '1023px',
    TABLET_LG_MAX: '1279px',
    // Min
    TABLET_XS_MIN: '769px',
    TABLET_SM_MIN: '801px',
    TABLET_MD_MIN: '813px',
    TABLET_LG_MIN: '1025px',

    // Desktop
    DESKTOP_XS: '1280px',
    DESKTOP_SM: '1366px',
    DESKTOP_MD: '1440px',
    DESKTOP_LG: '1600px',
    DESKTOP_XL: '1920px',
    DESKTOP_XXL: '2560px',
    // Max
    DESKTOP_XS_MAX: '1365px',
    DESKTOP_SM_MAX: '1439px',
    DESKTOP_MD_MAX: '1599px',
    DESKTOP_LG_MAX: '1919px',
    DESKTOP_XL_MAX: '2559px',
    // Min
    DESKTOP_XS_MIN: '1281px',
    DESKTOP_SM_MIN: '1367px',
    DESKTOP_MD_MIN: '1441px',
    DESKTOP_LG_MIN: '1601px',
    DESKTOP_XL_MIN: '1921px',
    DESKTOP_XXL_MIN: '2561px',
  },

  // Transitions
  // ============================================================
  TRANSITIONS: {
    DEFAULT: 'all 0.3s ease',
  },

  // Animation timings
  // ============================================================
  ANIMATION_TIMINGS: {
    ELASTIC: 'cubic-bezier(.835, -.005, .06, 1)',
  },

  // Border widths
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  BORDER_WIDTHS: {
    // MN:   'px',
    // TN:   'px',
    // XXS:  'px',
    // XS:   'px',
    // SM:   'px',
    // MD:   'px',
    // LG:   'px',
    // XL:   'px',
    // XXL:  'px',
    // BG:   'px',
    // HG:   'px',
    // MS:   'px',
  },

  // Border radiuses
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  BORDER_RADIUSES: {
    // MN:   'px',
    // TN:   'px',
    // XXS:  'px',
    // XS:   'px',
    // SM:   'px',
    // MD:   'px',
    // LG:   'px',
    // XL:   'px',
    // XXL:  'px',
    // BG:   'px',
    // HG:   'px',
    // MS:   'px',
  },

  // Box shadows
  // ============================================================
  BOX_SHADOWS: {
    SHADOW_1: '0 5px 5px rgba(0, 0, 0, .5)',
  },

  // Component widths
  // ============================================================
  COMPONENT_WIDTHS: {
  },

  // Component heights
  // ============================================================
  COMPONENT_HEIGHTS: {
  },

  // Spacings
  // ============================================================
  SPACINGS: {
    MN:   `calc(${SPACING_FACTOR} * 1)`,  // 5px
    TN:   `calc(${SPACING_FACTOR} * 2)`,  // 10px
    XXS:  `calc(${SPACING_FACTOR} * 3)`,  // 15px
    XS:   `calc(${SPACING_FACTOR} * 4)`,  // 20px
    SM:   `calc(${SPACING_FACTOR} * 5)`,  // 25px
    MD:   `calc(${SPACING_FACTOR} * 6)`,  // 30px
    LG:   `calc(${SPACING_FACTOR} * 7)`,  // 35px
    XL:   `calc(${SPACING_FACTOR} * 8)`,  // 40px
    XXL:  `calc(${SPACING_FACTOR} * 9)`,  // 45px
    BG:   `calc(${SPACING_FACTOR} * 10)`, // 50px
    HG:   `calc(${SPACING_FACTOR} * 11)`, // 55px
    MS:   `calc(${SPACING_FACTOR} * 12)`, // 60px
  },

  // Paddings
  // ============================================================
  PADDINGS: {
  },

  // Margins
  // ============================================================
  MARGINS: {
  },

  // Grid gutters
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  GRID_GUTTERS: {
    // MN:   'px',
    // TN:   'px',
    // XXS:  'px',
    // XS:   'px',
    // SM:   'px',
    // MD:   'px',
    // LG:   'px',
    // XL:   'px',
    // XXL:  'px',
    // BG:   'px',
    // HG:   'px',
    // MS:   'px',
  },
}
