/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;AAnFlB;AAqFE;EACE,mCAlFO;EAmFP,yBA5EY;AAPhB;;AAwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;AAjFF;AAmFE;EACE,wBA9FO;AAaX;;AAqFA;EACE,yBAAA;EACA,kBAAA;AAlFF;;AAqFA;EACE,wBAAA;EACA,iBAAA;AAlFF;;AAsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;AAnFF","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/featuredRestaurants.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/featuredRestaurants.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z%27 fill=%27white%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z%27 fill=%27white%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2718%27 height=%2718%27 viewBox=%270 0 18 18%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z%27 fill=%27white%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2718%27 height=%2718%27 viewBox=%270 0 18 18%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z%27 fill=%27white%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2725%27 height=%2724%27 viewBox=%270 0 25 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2725%27 height=%2724%27 viewBox=%270 0 25 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}\n\n.featuredRestaurants {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.featuredRestaurants h2 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 43px;\n  color: rgb(33, 33, 33);\n  text-align: center;\n}\n\n.restContent {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n\n.restaurant {\n  position: relative;\n  height: 335px;\n  margin: 3px;\n}\n.restaurant .mealPict {\n  width: 250px;\n  border-radius: 8px;\n}\n.restaurant .restLogo {\n  width: 55px;\n  border-radius: 8px;\n  position: absolute;\n  top: 220px;\n  left: 0;\n}\n.restaurant .discounts, .restaurant .deliveryRate {\n  position: absolute;\n  top: 10px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(255, 255, 255);\n  text-align: default;\n  line-height: 34px;\n  border-radius: 8px;\n  padding-left: 35px;\n}\n.restaurant .discounts {\n  background: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\n  width: 90px;\n  height: 35px;\n  left: 10px;\n}\n.restaurant .discounts:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  position: absolute;\n  left: 10px;\n  top: 3px;\n}\n.restaurant .deliveryRate {\n  background: rgb(251, 203, 38);\n  width: 50px;\n  height: 35px;\n  left: 145px;\n}\n.restaurant .deliveryRate:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  position: absolute;\n  left: 10px;\n  top: 3px;\n}\n.restaurant .restName {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n  position: absolute;\n  top: 220px;\n  left: 70px;\n}\n.restaurant .ratings {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  color: rgb(251, 203, 38);\n  text-align: default;\n  color: rgb(251, 203, 38);\n  position: absolute;\n  top: 243px;\n  left: 220px;\n}\n.restaurant .ratings:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  position: absolute;\n  left: -28px;\n}\n.restaurant .open, .restaurant .closed {\n  position: absolute;\n  left: 0;\n  top: 285px;\n  border-radius: 8px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  padding: 5px 15px;\n}\n.restaurant .open {\n  background: rgba(121, 185, 60, 0.2);\n  color: #79B93C;\n}\n.restaurant .closed {\n  background: rgba(241, 114, 40, 0.2);\n  color: #F17228;\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/featuredRestaurants.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;ACnFlB;ADqFE;EACE,mCAlFO;EAmFP,yBA5EY;ACPhB;;ADwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;ACjFF;ADmFE;EACE,wBA9FO;ACaX;;ADqFA;EACE,yBAAA;EACA,kBAAA;AClFF;;ADqFA;EACE,wBAAA;EACA,iBAAA;AClFF;;ADsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;ACnFF;;AA5CA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;AA+CF;AA7CE;EDqCA,kBADiE;EAEjE,iBAFuF;EAGvF,eAPa;EAQb,sBAvBW;EAwBX,kBCrCkB;AAgDpB;;AA5CA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AA+CF;;AA5CA;EACE,kBAAA;EACA,aAAA;EACA,WAAA;AA+CF;AA5CE;EACE,YAAA;EACA,kBAAA;AA8CJ;AA3CE;EACE,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;AA6CJ;AAxCE;EACE,kBAAA;EACA,SAAA;EDAF,kBADiE;EAEjE,iBAFuF;EAGvF,eATyB;EAUzB,yBAzBc;EA0Bd,mBAL2C;ECOzC,iBAAA;EACA,kBAAA;EACA,kBAAA;AA0CJ;AAvCE;EACE,uEDrCS;ECsCT,WAAA;EACA,YAlBO;EAmBP,UAAA;AAyCJ;AAvCI;EACE,gDD9DQ;EC+DR,kBAAA;EACA,UAAA;EACA,QAAA;AAyCN;AArCE;EACE,6BD1DO;EC2DP,WAAA;EACA,YAhCO;EAiCP,WAAA;AAuCJ;AArCI;EACE,gDD3EQ;EC4ER,kBAAA;EACA,UAAA;EACA,QAAA;AAuCN;AAnCE;EDvCA,kBADiE;EAEjE,iBAFuF;EAGvF,eATyB;EAUzB,sBAxBe;EAyBf,mBAL2C;EC6CzC,kBAAA;EACA,UAAA;EACA,UAAA;AAsCJ;AAnCE;EDjDA,kBCqD2B;EDpD3B,mBCoDmC;EDnDnC,eATyB;EAUzB,wBAnCS;EAoCT,mBCiDkB;EAChB,wBDtFO;ECuFP,kBAAA;EACA,UAAA;EACA,WAAA;AAsCJ;AApCI;EACE,gDDtGI;ECuGJ,kBAAA;EACA,WAAA;AAsCN;AAjCE;EACE,kBAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EDvEF,kBADiE;EAEjE,iBAFuF;EAGvF,eATyB;EAUzB,sBAxBe;EAyBf,mBAL2C;EC8EzC,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;AAmCJ;AAhCE;EACE,mCAAA;EACA,cAAA;AAkCJ;AA/BE;EACE,mCAAA;EACA,cAAA;AAiCJ","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}","@use './common';\r\n\r\n.featuredRestaurants {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  h2 {\r\n    @include common.fontStyle(\r\n                    common.$h2-font-size,\r\n                    common.$h2-font-cr,\r\n                    center);\r\n  }\r\n}\r\n\r\n.restContent {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.restaurant {\r\n  position: relative;\r\n  height: 335px;\r\n  margin: 3px;\r\n\r\n\r\n  .mealPict {\r\n    width: 250px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .restLogo {\r\n    width: 55px;\r\n    border-radius: 8px;\r\n    position: absolute;\r\n    top: 220px;\r\n    left: 0;\r\n  }\r\n\r\n  $height: 35px;\r\n\r\n  .discounts, .deliveryRate {\r\n    position: absolute;\r\n    top: 10px;\r\n\r\n    @include common.fontStyle(\r\n                    common.$figure-headers-font-size,\r\n                    common.$light-font-cr,\r\n    );\r\n    line-height: 34px;\r\n    border-radius: 8px;\r\n    padding-left: 35px;\r\n  }\r\n\r\n  .discounts {\r\n    background: common.$bg-grad-10;\r\n    width: 90px;\r\n    height: $height;\r\n    left: 10px;\r\n\r\n    &:before {\r\n      content: common.$discountSvg;\r\n      position: absolute;\r\n      left: 10px;\r\n      top: 3px;\r\n    }\r\n  }\r\n\r\n  .deliveryRate {\r\n    background: common.$bg-cr-10;\r\n    width: 50px;\r\n    height: $height;\r\n    left: calc(10px + 135px);\r\n\r\n    &:before {\r\n      content: common.$deliverySvg;\r\n      position: absolute;\r\n      left: 10px;\r\n      top: 3px;\r\n    }\r\n  }\r\n\r\n  .restName {\r\n    @include common.fontStyle(\r\n                    common.$figure-headers-font-size,\r\n                    common.$darker-font-cr\r\n    );\r\n    position: absolute;\r\n    top: 220px;\r\n    left: 70px;\r\n  }\r\n\r\n  .ratings {\r\n    @include common.fontStyle(\r\n                    common.$figure-headers-font-size,\r\n                    common.$bg-cr-10,\r\n                    default, normal, normal);\r\n    color: common.$bg-cr-10;\r\n    position: absolute;\r\n    top: 243px;\r\n    left: 220px;\r\n\r\n    &:before {\r\n      content: common.$rateSvg;\r\n      position: absolute;\r\n      left: -28px;\r\n    }\r\n\r\n  }\r\n\r\n  .open, .closed {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 285px;\r\n    border-radius: 8px;\r\n\r\n    @include common.fontStyle(\r\n                    common.$figure-headers-font-size,\r\n                    common.$darker-font-cr\r\n                    );\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n    padding: 5px 15px;\r\n  }\r\n\r\n  .open {\r\n    background: rgba(121, 185, 60, 0.2);\r\n    color: #79B93C;\r\n  }\r\n\r\n  .closed {\r\n    background: rgba(241, 114, 40, 0.2);\r\n    color: #F17228;\r\n  }\r\n\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/foodCategories.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/foodCategories.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}\n\n.menu {\n  width: 1540px;\n  margin-top: 25px;\n  background-color: rgb(254, 239, 208);\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n}\n.menu .categoryBtn {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(255, 159, 17);\n  box-shadow: 2px 2px 3px rgb(241, 114, 40);\n}\n.menu .categoryBtn:active {\n  box-shadow: none;\n  background-color: rgb(241, 114, 40);\n}\n.menu .categoryBtn:before {\n  content: \" \";\n  width: calc(50px * 0.375);\n  height: calc(50px * 0.375);\n  display: inline-block;\n  border-left: calc(50px / 8) solid rgb(255, 255, 255);\n  border-bottom: calc(50px / 8) solid rgb(255, 255, 255);\n  border-radius: 0 0 0 calc(50px / 8);\n  margin-top: calc(50px * 0.05);\n}\n.menu .categoryBtn:disabled {\n  background-color: rgb(66, 66, 66);\n}\n.menu .menuLevel2 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.menu .menuLevel3 {\n  width: 200px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.menuContent {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-evenly;\n}\n.menuContent .item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 10px;\n}\n.menuContent .item img {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n.menuContent .item span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(33, 33, 33);\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/foodCategories.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;ACnFlB;ADqFE;EACE,mCAlFO;EAmFP,yBA5EY;ACPhB;;ADwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;ACjFF;ADmFE;EACE,wBA9FO;ACaX;;ADqFA;EACE,yBAAA;EACA,kBAAA;AClFF;;ADqFA;EACE,wBAAA;EACA,iBAAA;AClFF;;ADsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;ACnFF;;AA5CA;EACE,aD6Bc;EC5Bd,gBAAA;EACA,oCDUS;ECTT,aDyBc;ECxBd,aAAA;EACA,sBAAA;AA+CF;AA7CE;ED2CA,WC1C4B;ED2C5B,YC3C4B;ED4C5B,kBAAA;EACA,YAAA;EACA,mCA3CS;EA4CT,yCAAA;ACKF;ADHE;EACE,gBAAA;EACA,mCA9CO;ACmDX;ADFE;EACE,YAAA;EACA,yBAAA;EACA,0BAAA;EACA,qBAAA;EACA,oDAAA;EACA,sDAAA;EACA,mCAAA;EACA,6BAAA;ACIJ;ADDE;EACE,iCA1DY;AC6DhB;AAlEE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAoEJ;AAjEE;EACE,YAAA;EACA,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,mBAAA;AAmEJ;;AA9DA;EACE,aAAA;EACA,qBAAA;EACA,6BAAA;AAiEF;AA/DE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;AAiEJ;AA/DI;EACE,YAAA;EACA,aAAA;EACA,kBAAA;AAiEN;AA9DI;EDFF,kBADiE;EAEjE,iBAFuF;EAGvF,eATyB;EAUzB,sBAvBW;EAwBX,kBCCwC;AAkE1C","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}","@use './common';\r\n\r\n.menu {\r\n  width: common.$content-width;\r\n  margin-top: 25px;\r\n  background-color: common.$bg-cr-12;\r\n  padding: common.$block-padding;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  .categoryBtn {\r\n    @include common.sliderBtn(50px);\r\n  }\r\n\r\n  .menuLevel2 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .menuLevel3 {\r\n    width: 200px;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n  }\r\n}\r\n\r\n.menuContent {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-evenly;\r\n\r\n  .item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 10px;\r\n\r\n    img {\r\n      width: 150px;\r\n      height: 150px;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    span {\r\n      @include common.fontStyle(\r\n                      common.$figure-headers-font-size,\r\n                      common.$h2-font-cr, center\r\n      )\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2722%27 height=%2722%27 viewBox=%270 0 22 22%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2722%27 height=%2722%27 viewBox=%270 0 22 22%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2724%27 height=%2720%27 viewBox=%270 0 24 20%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2724%27 height=%2720%27 viewBox=%270 0 24 20%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2724%27 height=%2719%27 viewBox=%270 0 24 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z%27 fill=%27%23ADADAD%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2724%27 height=%2719%27 viewBox=%270 0 24 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z%27 fill=%27%23ADADAD%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}\n\n.footer {\n  width: 1540px;\n  padding: 30px;\n  color: rgb(255, 255, 255);\n  background-color: rgb(0, 0, 0);\n  display: flex;\n  flex-flow: column nowrap;\n}\n.footer .cityList {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n.footer .cityList a {\n  width: 140px;\n  text-decoration: none;\n  margin: 10px 100px 10px 30px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  color: rgb(255, 255, 255);\n  text-align: left;\n}\n.footer .hr {\n  height: 0;\n  border-bottom: 1px solid rgb(255, 255, 255);\n  margin: 20px 0;\n}\n.footer .menuWrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.footer .navigation {\n  display: flex;\n  flex-flow: row wrap;\n}\n.footer .navigation .division {\n  display: flex;\n  flex-flow: column nowrap;\n  align-content: center;\n}\n.footer .navigation .division h2 {\n  width: 180px;\n  margin: 5px 100px 30px 30px;\n}\n.footer .navigation .division a {\n  width: 180px;\n  text-decoration: none;\n  margin: 5px 100px 5px 30px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  color: rgb(255, 255, 255);\n  text-align: left;\n}\n.footer .contacts {\n  height: 200px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\n.footer .networks {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.footer .networks .socialIcons {\n  margin: 0 10px;\n  width: 25px;\n  height: 25px;\n}\n.footer .networks .instagram {\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 25px 25px;\n}\n.footer .networks .facebook {\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 25px 25px;\n}\n.footer .networks .twitter {\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 25px 25px;\n}\n.footer .mailWrap {\n  position: relative;\n}\n.footer .mailWrap:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  position: absolute;\n  left: 16px;\n  top: 13px;\n}\n.footer .mailWrap input {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  color: rgb(255, 255, 255);\n  text-align: left;\n  border-radius: 6px;\n  background-color: rgb(66, 66, 66);\n  border: none;\n  width: 190px;\n  padding: 15px 35px;\n  margin-left: 10px;\n}\n.footer .mailWrap button {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 10px;\n  width: 100px;\n  height: 46px;\n  margin-left: 20px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\n.footer .mailWrap button:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n.footer .credentials {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;ACnFlB;ADqFE;EACE,mCAlFO;EAmFP,yBA5EY;ACPhB;;ADwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;ACjFF;ADmFE;EACE,wBA9FO;ACaX;;ADqFA;EACE,yBAAA;EACA,kBAAA;AClFF;;ADqFA;EACE,wBAAA;EACA,iBAAA;AClFF;;ADsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;ACnFF;;AA5CA;EACE,aD6Bc;EC5Bd,aD2Bc;EC1Bd,yBDkBc;ECjBd,8BDYa;ECXb,aAAA;EACA,wBAAA;AA+CF;AA7CE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AA+CJ;AA7CI;EACE,YAAA;EACA,qBAAA;EACA,4BAAA;ED2BJ,kBCxBkB;EDyBlB,mBCzB0B;ED0B1B,eAVkB;EAWlB,yBAzBc;EA0Bd,gBC5BY;AAiDd;AA5CE;EACE,SAAA;EACA,2CAAA;EACA,cAAA;AA8CJ;AA3CE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AA6CJ;AA1CE;EACE,aAAA;EACA,mBAAA;AA4CJ;AA1CI;EACE,aAAA;EACA,wBAAA;EACA,qBAAA;AA4CN;AA1CM;EACE,YAAA;EACA,2BAAA;AA4CR;AAzCM;EACE,YAAA;EACA,qBAAA;EACA,0BAAA;EDVN,kBCaoB;EDZpB,mBCY4B;EDX5B,eAVkB;EAWlB,yBAzBc;EA0Bd,gBCSc;AA6ChB;AAvCE;EACE,aAAA;EACA,aAAA;EACA,wBAAA;EACA,8BAAA;AAyCJ;AAtCE;EAGE,aAAA;EACA,qBAAA;AAsCJ;AApCI;EACE,cAAA;EACA,WAPK;EAQL,YARK;AA8CX;AAnCI;EACE,oEAAA;EACA,0BAAA;AAqCN;AAlCI;EACE,oEAAA;EACA,0BAAA;AAoCN;AAjCI;EACE,oEAAA;EACA,0BAAA;AAmCN;AA/BE;EACE,kBAAA;AAiCJ;AA/BI;EACE,gDD7FK;EC8FL,kBAAA;EACA,UAAA;EACA,SAAA;AAiCN;AA9BI;EDhEF,kBADiE;EAEjE,iBAFuF;EAGvF,eAVkB;EAWlB,yBAzBc;EA0Bd,gBCgEoB;EAEhB,kBAAA;EACA,iCDjGU;ECkGV,YAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AAgCN;AA7BI;EACE,6BD9GK;EC+GL,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EACA,iBAAA;EDtFJ,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,yBAzBc;EA0Bd,kBCuFoB;AA8BtB;AA5BM;EACE,mCD3HG;EC4HH,yBDrHQ;ACmJhB;AAvBE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAyBJ","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}","@use './common';\r\n\r\n.footer {\r\n  width: common.$content-width;\r\n  padding: common.$block-padding;\r\n  color: common.$light-font-cr;\r\n  background-color: common.$bg-cr-footer;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n\r\n  .cityList {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-between;\r\n\r\n    a {\r\n      width: 140px;\r\n      text-decoration: none;\r\n      margin: 10px 100px 10px 30px;\r\n      @include common.fontStyle(common.$regular-font-size,\r\n              common.$light-font-cr,\r\n              left, normal, normal\r\n      )\r\n    }\r\n  }\r\n\r\n  .hr {\r\n    height: 0;\r\n    border-bottom: 1px solid common.$light-font-cr;\r\n    margin: 20px 0;\r\n  }\r\n\r\n  .menuWrap {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .navigation {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n\r\n    .division {\r\n      display: flex;\r\n      flex-flow: column nowrap;\r\n      align-content: center;\r\n\r\n      h2 {\r\n        width: 180px;\r\n        margin: 5px 100px 30px 30px;\r\n      }\r\n\r\n      a {\r\n        width: 180px;\r\n        text-decoration: none;\r\n        margin: 5px 100px 5px 30px;\r\n        @include common.fontStyle(common.$regular-font-size,\r\n                common.$light-font-cr,\r\n                left, normal, normal\r\n        )\r\n      }\r\n    }\r\n  }\r\n\r\n  .contacts {\r\n    height: 200px;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .networks {\r\n    $size: 25px;\r\n\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n\r\n    .socialIcons {\r\n      margin: 0 10px;\r\n      width: $size;\r\n      height: $size;\r\n    }\r\n\r\n    .instagram {\r\n      background: no-repeat center common.$instagramSvg;\r\n      background-size: $size $size;\r\n    }\r\n\r\n    .facebook {\r\n      background: no-repeat center common.$facebookSvg;\r\n      background-size: $size $size;\r\n    }\r\n\r\n    .twitter {\r\n      background: no-repeat center common.$twitterSvg;\r\n      background-size: $size $size;\r\n    }\r\n  }\r\n\r\n  .mailWrap {\r\n    position: relative;\r\n\r\n    &:before {\r\n      content: common.$emailSvg;\r\n      position: absolute;\r\n      left: 16px;\r\n      top: 13px;\r\n    }\r\n\r\n    input {\r\n      @include common.fontStyle(\r\n                      common.$regular-font-size,\r\n                      common.$light-font-cr,\r\n                      left\r\n      );\r\n      border-radius: 6px;\r\n      background-color: common.$bg-cr-footer2;\r\n      border: none;\r\n      width: 190px;\r\n      padding: 15px 35px;\r\n      margin-left: 10px;\r\n    }\r\n\r\n    button {\r\n      background: common.$bg-cr-11;\r\n      border: none;\r\n      box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n      border-radius: 10px;\r\n\r\n      width: 100px;\r\n      height: 46px;\r\n      margin-left: 20px;\r\n\r\n      @include common.fontStyle(\r\n                      common.$composition-font-size,\r\n                      common.$light-font-cr,\r\n                      center);\r\n\r\n      &:active {\r\n        background-color: common.$bg-cr-20;\r\n        color: common.$light-font-cr;\r\n\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  .credentials {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/headerMeal.png */ "./src/assets/headerMeal.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: start;\n  position: relative;\n  background-color: rgb(251, 203, 38);\n  width: 1540px;\n  padding: 30px;\n  height: 450px;\n  overflow: hidden;\n}\n.header .headerImg {\n  position: absolute;\n  right: 180px;\n  bottom: -45px;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: 400px;\n}\n.header h2 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 60px;\n  color: rgb(255, 255, 255);\n  text-align: default;\n  margin: 50px 0 0 150px;\n}\n.header h4 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n  margin: -60px 0 -50px 150px;\n}\n.header .upperPart {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 25px;\n  border-radius: 10px 10px 0 0;\n  border-bottom: #eeeeee 3px solid;\n  width: 600px;\n  height: 25px;\n  margin: 0 0 0 150px;\n  background: #FFF;\n}\n.header .upperPart button {\n  margin: 10px;\n  width: 150px;\n  height: 40px;\n  background-color: rgb(255, 255, 255);\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n  border: none;\n}\n.header .upperPart button:focus {\n  background-color: rgba(241, 114, 40, 0.2);\n  color: rgb(241, 114, 40);\n}\n.header .lowerPart {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px;\n  border-radius: 0 0 10px 10px;\n  width: 600px;\n  height: 30px;\n  margin: 0 0 50px 150px;\n  background: rgb(255, 255, 255);\n}\n.header .lowerPart input {\n  width: 593px;\n  height: 49px;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  border: none;\n  padding: 0 0 0 20px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n  line-height: 25px;\n}\n.header .lowerPart button {\n  border-radius: 8px;\n  border: none;\n  width: 200px;\n  height: 50px;\n  margin-left: 5px;\n  background: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\n.header .lowerPart button:active {\n  border-bottom: 1px gray solid;\n  border-right: 1px gray solid;\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/header.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;ACnFlB;ADqFE;EACE,mCAlFO;EAmFP,yBA5EY;ACPhB;;ADwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;ACjFF;ADmFE;EACE,wBA9FO;ACaX;;ADqFA;EACE,yBAAA;EACA,kBAAA;AClFF;;ADqFA;EACE,wBAAA;EACA,iBAAA;AClFF;;ADsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;ACnFF;;AA5CA;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;EAEA,kBAAA;EACA,mCDIS;ECHT,aDsBc;ECrBd,aDoBc;ECnBd,aAAA;EACA,gBAAA;AA8CF;AA5CE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EAEA,kBAAA;EACA,yDAAA;EACA,+BAAA;EACA,4BAAA;EACA,sBAAA;AA6CJ;AA1CE;EDgBA,kBADiE;EAEjE,iBAFuF;EAGvF,eANkB;EAOlB,yBAzBc;EA0Bd,mBAL2C;ECVzC,sBAAA;AA6CJ;AA1CE;EDQA,kBCFkB;EDGlB,mBCFkB;EDGlB,eAZsB;EAatB,sBAxBe;EAyBf,mBCPkB;EAIhB,2BAAA;AAyCJ;AAtCE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EAEA,4BAAA;EACA,gCAAA;EAEA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;AAsCJ;AApCI;EACE,YAAA;EACA,YAAA;EACA,YAAA;EACA,oCD7CU;EC8CV,kBAAA;EDvBJ,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,sBAxBe;EAyBf,mBAL2C;EC6BvC,YAAA;AAuCN;AArCM;EACE,yCD3DG;EC4DH,wBD7DG;ACoGX;AAlCE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EAEA,4BAAA;EAEA,YAAA;EACA,YAAA;EACA,sBAAA;EACA,8BDxEY;AC0GhB;AAhCI;EACE,YAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EDzDJ,kBC8D6B;ED7D7B,mBC6DqC;ED5DrC,eAXc;EAYd,sBAxBe;EAyBf,mBC0DoB;EAEhB,iBAAA;AAiCN;AA9BI;EACE,kBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,uEDlGO;EAyBX,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBC0EI;AAgCN;AA7BM;EACE,6BAAA;EACA,4BAAA;AA+BR","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}","@use './common';\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: start;\r\n\r\n  position: relative;\r\n  background-color: common.$bg-cr-10;\r\n  width: common.$content-width;\r\n  padding: common.$block-padding;\r\n  height: 450px;\r\n  overflow: hidden;\r\n\r\n  .headerImg {\r\n    position: absolute;\r\n    right: 180px;\r\n    bottom: -45px;\r\n    width: 400px;\r\n    height: 400px;\r\n\r\n    border-radius: 50%;\r\n    background-image: url('../assets/#{common.$headerImg}');\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n    background-size: 400px;\r\n  }\r\n\r\n  h2 {\r\n    @include common.fontStyle(\r\n                    common.$h2-main-font-size,\r\n                    common.$light-font-cr,\r\n    );\r\n    margin: 50px 0 0 150px;\r\n  }\r\n\r\n  h4 {\r\n\r\n    @include common.fontStyle(\r\n                    common.$composition-font-size,\r\n                    common.$darker-font-cr,\r\n                    default,\r\n                    normal,\r\n                    normal\r\n    );\r\n    margin: -60px 0 -50px 150px;\r\n  }\r\n\r\n  .upperPart {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 25px;\r\n\r\n    border-radius: 10px 10px 0 0;\r\n    border-bottom: #eeeeee 3px solid;\r\n\r\n    width: 600px;\r\n    height: 25px;\r\n    margin: 0 0 0 150px;\r\n    background: #FFF;\r\n\r\n    button {\r\n      margin: 10px;\r\n      width: 150px;\r\n      height: 40px;\r\n      background-color: common.$light-item-cr;\r\n      border-radius: 5px;\r\n      @include common.fontStyle(\r\n                      common.$btn-font-size,\r\n                      common.$darker-font-cr\r\n      );\r\n      border: none;\r\n\r\n      &:focus {\r\n        background-color: common.$bg-cr-21;\r\n        color: common.$bg-cr-20;\r\n      }\r\n    }\r\n  }\r\n\r\n  .lowerPart {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 25px;\r\n\r\n    border-radius: 0 0 10px 10px;\r\n\r\n    width: 600px;\r\n    height: 30px;\r\n    margin: 0 0 50px 150px;\r\n    background: common.$light-item-cr;\r\n\r\n    input {\r\n      width: 593px;\r\n      height: 49px;\r\n      background-color: #f5f5f5;\r\n      border-radius: 10px;\r\n      border: none;\r\n      padding: 0 0 0 20px;\r\n\r\n      @include common.fontStyle(\r\n                      common.$btn-font-size,\r\n                      common.$darker-font-cr,\r\n                      default, normal, normal\r\n      );\r\n      line-height: 25px;\r\n    }\r\n\r\n    button {\r\n      border-radius: 8px;\r\n      border: none;\r\n      width: 200px;\r\n      height: 50px;\r\n      margin-left: 5px;\r\n      background: common.$bg-grad-10;\r\n\r\n      @include common.fontStyle(\r\n      common.$btn-font-size,\r\n      common.$light-font-cr,\r\n      center\r\n      );\r\n\r\n      &:active {\r\n        border-bottom: 1px gray solid;\r\n        border-right: 1px gray solid;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#content {\n  width: 1024px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,cAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;AAAJ","sourcesContent":["#content {\r\n    width: 1024px;\r\n    margin: 0 auto;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popularItems.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popularItems.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf8,%3Csvg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z" fill="%23FFB30E"/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}\n\n.popularItems {\n  width: 1540px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n.popularItems h2 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 43px;\n  color: rgb(33, 33, 33);\n  text-align: center;\n}\n.popularItems button.sliderBtn {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(255, 159, 17);\n  box-shadow: 2px 2px 3px rgb(241, 114, 40);\n  margin: 0 50px;\n}\n.popularItems button.sliderBtn:active {\n  box-shadow: none;\n  background-color: rgb(241, 114, 40);\n}\n.popularItems button.sliderBtn:before {\n  content: \" \";\n  width: calc(60px * 0.375);\n  height: calc(60px * 0.375);\n  display: inline-block;\n  border-left: calc(60px / 8) solid rgb(255, 255, 255);\n  border-bottom: calc(60px / 8) solid rgb(255, 255, 255);\n  border-radius: 0 0 0 calc(60px / 8);\n  margin-top: calc(60px * 0.05);\n}\n.popularItems button.sliderBtn:disabled {\n  background-color: rgb(66, 66, 66);\n}\n.popularItems .mealSlider {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.popularItems .mealSlider .sliderContent {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n.popularItems .mealSlider .sliderContent .mealCard {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  width: 200px;\n}\n.popularItems .mealSlider .sliderContent .mealCard .mealPhoto {\n  width: 200px;\n  border-radius: 10px;\n}\n.popularItems .mealSlider .sliderContent .mealCard .mealName, .popularItems .mealSlider .sliderContent .mealCard .mealPrice {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n  margin: 5px 0;\n}\n.popularItems .mealSlider .sliderContent .mealCard .restName {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(251, 203, 38);\n  text-align: default;\n  margin: 10px 0;\n}\n.popularItems .mealSlider .sliderContent .mealCard .restName:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  margin-right: 10px;\n}\n.popularItems .mealSlider .sliderContent .mealCard .composition {\n  font-style: italic;\n  font-weight: normal;\n  font-size: 16px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n}\n.popularItems .mealSlider .sliderContent .mealCard button#orderNow {\n  background: rgb(241, 114, 40);\n  box-shadow: 0 5px 10px rgba(253, 114, 92, 0.22), 0 20px 40px rgba(250, 99, 35, 0.24);\n  border-radius: 8px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n  width: 200px;\n  height: 40px;\n}\n.popularItems .mealSlider .sliderContent .mealCard button#orderNow:active {\n  background-color: rgb(251, 203, 38);\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/popularItems.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;ACnFlB;ADqFE;EACE,mCAlFO;EAmFP,yBA5EY;ACPhB;;ADwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;ACjFF;ADmFE;EACE,wBA9FO;ACaX;;ADqFA;EACE,yBAAA;EACA,kBAAA;AClFF;;ADqFA;EACE,wBAAA;EACA,iBAAA;AClFF;;ADsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;ACnFF;;AA3CA;EACE,aD4Bc;EC3Bd,aAAA;EACA,wBAAA;EACA,mBAAA;AA8CF;AA5CE;EDoCA,kBADiE;EAEjE,iBAFuF;EAGvF,eAPa;EAQb,sBAvBW;EAwBX,kBCpCkB;AA+CpB;AA5CE;EDqCA,WCpC4B;EDqC5B,YCrC4B;EDsC5B,kBAAA;EACA,YAAA;EACA,mCA3CS;EA4CT,yCAAA;ECxCE,cAAA;AAmDJ;ADTE;EACE,gBAAA;EACA,mCA9CO;ACyDX;ADRE;EACE,YAAA;EACA,yBAAA;EACA,0BAAA;EACA,qBAAA;EACA,oDAAA;EACA,sDAAA;EACA,mCAAA;EACA,6BAAA;ACUJ;ADPE;EACE,iCA1DY;ACmEhB;AAhEE;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,mBAAA;AAkEJ;AAhEI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAkEN;AAhEM;EAEE,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,kBAAA;EAEA,YAPQ;AAsEhB;AA7DQ;EACE,YAVM;EAWN,mBAAA;AA+DV;AA3DQ;EDJN,kBADiE;EAEjE,iBAFuF;EAGvF,eATyB;EAUzB,sBAxBe;EAyBf,mBAL2C;ECUnC,aAAA;AA8DV;AA3DQ;EDZN,kBADiE;EAEjE,iBAFuF;EAGvF,eATyB;EAUzB,wBAnCS;EAoCT,mBAL2C;ECkBnC,cAAA;AA8DV;AA5DU;EACE,gDD7DE;EC8DF,kBAAA;AA8DZ;AA1DQ;EDzBN,kBC8BwB;ED7BxB,mBC8BwB;ED7BxB,eAZsB;EAatB,sBAxBe;EAyBf,mBCyBwB;AA6D1B;AAvDQ;EACE,6BDjEC;ECkED,oFAAA;EACA,kBAAA;EACA,YAAA;EDvCR,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBCwCwB;EAGhB,YA1DM;EA2DN,YAAA;AAuDV;AArDU;EACE,mCDnFD;AC0IX","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}","@use './common';\r\n\r\n\r\n.popularItems {\r\n  width: common.$content-width;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n\r\n  h2 {\r\n    @include common.fontStyle(\r\n                    common.$h2-font-size,\r\n                    common.$h2-font-cr,\r\n                    center);\r\n  }\r\n\r\n  button.sliderBtn {\r\n    @include common.sliderBtn(60px);\r\n    margin: 0 50px;\r\n  }\r\n\r\n\r\n  .mealSlider {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    .sliderContent {\r\n      display: flex;\r\n      flex-flow: row wrap;\r\n      justify-content: center;\r\n\r\n      .mealCard {\r\n        $width: 200px;\r\n        margin: 15px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: start;\r\n\r\n        width: $width;\r\n\r\n        .mealPhoto {\r\n          width: $width;\r\n          border-radius: 10px;\r\n\r\n        }\r\n\r\n        .mealName, .mealPrice {\r\n          @include common.fontStyle(\r\n                          common.$figure-headers-font-size,\r\n                          common.$darker-font-cr\r\n          );\r\n          margin: 5px 0;\r\n        }\r\n\r\n        .restName {\r\n          @include common.fontStyle(\r\n                          common.$figure-headers-font-size,\r\n                          common.$bg-cr-10\r\n          );\r\n          margin: 10px 0;\r\n\r\n          &:before {\r\n            content: common.$positionSvg;\r\n            margin-right: 10px;\r\n          }\r\n        }\r\n\r\n        .composition {\r\n          @include common.fontStyle(\r\n                          common.$composition-font-size,\r\n                          common.$darker-font-cr,\r\n                          default,\r\n                          italic,\r\n                          normal\r\n          );\r\n        }\r\n\r\n        button#orderNow {\r\n          background: common.$bg-cr-20;\r\n          box-shadow: 0 5px 10px rgba(253, 114, 92, 0.22), 0 20px 40px rgba(250, 99, 35, 0.24);\r\n          border-radius: 8px;\r\n          border: none;\r\n\r\n          @include common.fontStyle(\r\n                          common.$btn-font-size,\r\n                          common.$light-font-cr,\r\n                          center\r\n          );\r\n\r\n          width: $width;\r\n          height: 40px;\r\n\r\n          &:active {\r\n            background-color: common.$bg-cr-10;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/promo.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/promo.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}\n\n.promo {\n  width: 1600px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n}\n.promo .dealCard {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 290px;\n  margin: 30px;\n}\n.promo .dealCard .foodPhoto {\n  position: relative;\n  width: 240px;\n  height: 202px;\n}\n.promo .dealCard .foodPhoto img {\n  position: absolute;\n  border-radius: 8px;\n  width: 240px;\n}\n.promo .dealCard .foodPhoto .discount {\n  position: absolute;\n  bottom: -1px;\n  width: 100px;\n  height: 40px;\n  background: rgb(251, 203, 38);\n  border-radius: 0 8px;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  color: rgb(255, 255, 255);\n  text-align: default;\n  line-height: 40px;\n}\n.promo .dealCard .mealName {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n}\n.promo .dealCard .timer {\n  width: 160px;\n  height: 30px;\n  background: rgba(241, 114, 40, 0.2);\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(241, 114, 40);\n  text-align: center;\n  line-height: 26px;\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/promo.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;ACnFlB;ADqFE;EACE,mCAlFO;EAmFP,yBA5EY;ACPhB;;ADwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;ACjFF;ADmFE;EACE,wBA9FO;ACaX;;ADqFA;EACE,yBAAA;EACA,kBAAA;AClFF;;ADqFA;EACE,wBAAA;EACA,iBAAA;AClFF;;ADsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;ACnFF;;AA5CA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AA+CF;AA5CE;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;EACA,YAAA;AA8CJ;AA5CI;EACE,kBAAA;EACA,YAAA;EACA,aAAA;AA8CN;AA5CM;EACE,kBAAA;EACA,kBDKW;ECJX,YAAA;AA8CR;AA3CM;EACE,kBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,6BDpBG;ECqBH,oBAAA;EACA,kBAAA;EDUN,kBADiE;EAEjE,iBAFuF;EAGvF,eARwB;EASxB,yBAzBc;EA0Bd,mBAL2C;ECJrC,iBAAA;AA8CR;AA1CI;EDCF,kBADiE;EAEjE,iBAFuF;EAGvF,eATyB;EAUzB,sBAxBe;EAyBf,mBAL2C;ACiD7C;AA1CI;EACE,YAAA;EACA,YAAA;EACA,mCDrCK;ECsCL,kBAAA;EDVJ,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAhCS;EAiCT,kBCWoB;EAEhB,iBAAA;AA2CN","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}","@use './common';\r\n\r\n.promo {\r\n  width: 1600px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n\r\n  .dealCard {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 290px;\r\n    margin: 30px;\r\n\r\n    .foodPhoto {\r\n      position: relative;\r\n      width: 240px;\r\n      height: 202px;\r\n\r\n      img {\r\n        position: absolute;\r\n        border-radius: common.$standard-bor-rad;\r\n        width: 240px;\r\n      }\r\n\r\n      .discount {\r\n        position: absolute;\r\n        bottom: -1px;\r\n        width: 100px;\r\n        height: 40px;\r\n        background: common.$bg-cr-10;\r\n        border-radius: 0 common.$standard-bor-rad;\r\n        text-align: center;\r\n        @include common.fontStyle(\r\n                        common.$figure-fields-font-size,\r\n                        common.$light-font-cr\r\n        );\r\n        line-height: 40px;\r\n      }\r\n    }\r\n\r\n    .mealName {\r\n      @include common.fontStyle(\r\n                      common.$figure-headers-font-size,\r\n                      common.$darker-font-cr\r\n      );\r\n    }\r\n\r\n    .timer {\r\n      width: 160px;\r\n      height: 30px;\r\n      background: common.$bg-cr-21;\r\n      border-radius: 5px;\r\n\r\n      @include common.fontStyle(\r\n                      common.$composition-font-size,\r\n                      common.$bg-cr-20,\r\n                      center\r\n      );\r\n      line-height: 26px;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/topNav.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/topNav.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf8,%3Csvg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z" fill="%23FFB30E"/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2716%27 height=%2719%27 viewBox=%270 0 16 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z%27 fill=%27url%28%23paint0_linear_401_1279%29%27/%3E%3Cdefs%3E%3ClinearGradient id=%27paint0_linear_401_1279%27 x1=%27-7.02825%27 y1=%27-22.35%27 x2=%2723.9034%27 y2=%27-20.9848%27 gradientUnits=%27userSpaceOnUse%27%3E%3Cstop stop-color=%27%23FFB800%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FF8A00%27/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2716%27 height=%2719%27 viewBox=%270 0 16 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z%27 fill=%27url%28%23paint0_linear_401_1279%29%27/%3E%3Cdefs%3E%3ClinearGradient id=%27paint0_linear_401_1279%27 x1=%27-7.02825%27 y1=%27-22.35%27 x2=%2723.9034%27 y2=%27-20.9848%27 gradientUnits=%27userSpaceOnUse%27%3E%3Cstop stop-color=%27%23FFB800%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FF8A00%27/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button.mainBtn {\n  background: rgb(255, 159, 17);\n  border: none;\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 14px;\n  width: 200px;\n  height: 70px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  text-align: center;\n}\nbutton.mainBtn:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}\n\nbutton.secBtn {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: rgb(255, 159, 17);\n  text-align: default;\n  background-color: transparent;\n  border: none;\n}\nbutton.secBtn:active {\n  color: rgb(241, 114, 40);\n}\n\nbutton.forward::before {\n  transform: rotate(225deg);\n  margin-right: 10px;\n}\n\nbutton.backward::before {\n  transform: rotate(45deg);\n  margin-left: 10px;\n}\n\n.foodPhoto:hover,\n.mealPhoto:hover {\n  transition-duration: 0.5s;\n  transition-property: transform;\n  transform: rotate(-5deg);\n}\n\n.topNav {\n  width: calc(1540px - 210px);\n  padding: 16px 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n.topNav .logo {\n  width: 60px;\n}\n.topNav .address {\n  width: 490px;\n}\n.topNav .address input {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(66, 66, 66);\n  text-align: left;\n  border: none;\n  width: 350px;\n  padding-left: 25px;\n  margin-left: 10px;\n}\n.topNav .address span {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(66, 66, 66);\n  text-align: default;\n  position: relative;\n}\n.topNav .address span:after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  position: absolute;\n  right: -30px;\n  top: 1px;\n}\n.topNav .search {\n  position: relative;\n}\n.topNav .search:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  position: absolute;\n  left: 10px;\n  top: 1px;\n}\n.topNav .search input {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(66, 66, 66);\n  text-align: left;\n  border: none;\n  width: 150px;\n  padding-left: 25px;\n  margin-left: 10px;\n  outline: 0;\n}\n.topNav .search input::placeholder {\n  color: rgb(66, 66, 66);\n}\n.topNav .search input:focus::placeholder {\n  font-weight: normal;\n  color: rgb(184, 184, 184);\n  outline: solid 1px rgb(184, 184, 184);\n}\n.topNav button, .topNav #login {\n  position: relative;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\n  border-radius: 8px;\n  border: none;\n  width: 100px;\n  height: 45px;\n  padding-left: 15px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  color: rgb(241, 114, 40);\n  text-align: center;\n}\n.topNav button:before, .topNav #login:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  position: absolute;\n  left: 10px;\n}\n.topNav button:active, .topNav #login:active {\n  background-color: rgb(241, 114, 40);\n  color: rgb(255, 255, 255);\n}", "",{"version":3,"sources":["webpack://./src/styles/common.scss","webpack://./src/styles/topNav.scss"],"names":[],"mappings":"AAmFA;EACE,6BAtES;EAuET,YAAA;EACA,mFAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EA7CA,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,yBAzBc;EA0Bd,kBA8CgB;ACnFlB;ADqFE;EACE,mCAlFO;EAmFP,yBA5EY;ACPhB;;ADwFA;EA3DE,kBADiE;EAEjE,iBAFuF;EAGvF,eAZsB;EAatB,wBAlCS;EAmCT,mBAL2C;EA8D3C,6BAAA;EACA,YAAA;ACjFF;ADmFE;EACE,wBA9FO;ACaX;;ADqFA;EACE,yBAAA;EACA,kBAAA;AClFF;;ADqFA;EACE,wBAAA;EACA,iBAAA;AClFF;;ADsFA;;EAEE,yBAAA;EACA,8BAAA;EACA,wBAAA;ACnFF;;AA5CA;EACE,2BAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;AA+CF;AA7CE;EACE,WAAA;AA+CJ;AA3CE;EACE,YAAA;AA6CJ;AA3CI;ED2BF,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,sBAxBe;EAyBf,gBC3BoB;EAEhB,YAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AA6CN;AAxCI;EDaF,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,sBAxBe;EAyBf,mBAL2C;ECRvC,kBAAA;AA4CN;AA1CM;EACE,gDDnCM;ECoCN,kBAAA;EACA,YAAA;EACA,QAAA;AA4CR;AAvCE;EACE,kBAAA;AAyCJ;AAvCI;EACE,gDD9CM;EC+CN,kBAAA;EACA,UAAA;EACA,QAAA;AAyCN;AAtCI;EDZF,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,sBAxBe;EAyBf,gBCYoB;EAEhB,YAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,UAAA;AAwCN;AAtCM;EACE,sBD9CS;ACsFjB;AArCM;EACE,mBAAA;EACA,yBDtDI;ECuDJ,qCAAA;AAuCR;AAjCE;EACE,kBAAA;EACA,8BD9DY;EC+DZ,mFAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;ED7CF,kBADiE;EAEjE,iBAFuF;EAGvF,eAXc;EAYd,wBAhCS;EAiCT,kBC+CkB;AAkCpB;AA/BI;EACE,gDD9FI;EC+FJ,kBAAA;EACA,UAAA;AAiCN;AA9BI;EACE,mCD1FK;EC2FL,yBDpFU;ACoHhB","sourcesContent":["//svg icons and png images\r\n$discountSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$deliverySvg: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z' fill='white'/%3E%3C/svg%3E%0A\");\r\n$rateSvg: url(\"data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$positionSvg: url('data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E');\r\n$searchSvg: url(\"data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z' fill='%23FFB30E'/%3E%3C/svg%3E%0A\");\r\n$userSvg: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z' fill='url(%23paint0_linear_401_1279)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_401_1279' x1='-7.02825' y1='-22.35' x2='23.9034' y2='-20.9848' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFB800'/%3E%3Cstop offset='1' stop-color='%23FF8A00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");\r\n$instagramSvg: url(\"data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$facebookSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z' fill='%23F5F5F5'/%3E%3C/svg%3E \");\r\n$twitterSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A\");\r\n$emailSvg: url(\"data:image/svg+xml,%3Csvg width='24' height='19' viewBox='0 0 24 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z' fill='%23ADADAD'/%3E%3C/svg%3E%0A\");\r\n$headerImg: 'headerMeal.png';\r\n//colors\r\n$bg-cr-10: rgb(251, 203, 38);\r\n$bg-cr-11: rgb(255, 159, 17);\r\n$bg-cr-12: rgb(254, 239, 208);\r\n$bg-cr-20: rgb(241, 114, 40);\r\n$bg-cr-21: rgba(241, 114, 40, 0.2);\r\n$bg-cr-footer: rgb(0, 0, 0);\r\n$bg-cr-footer2: rgb(66, 66, 66);\r\n$bg-grad-10: linear-gradient(95.71deg, #FF7A7A -39.64%, #F75900 135.31%);\r\n$border-cr: rgb(184, 184, 184);\r\n$light-item-cr: rgb(255, 255, 255);\r\n$light-font-cr: rgb(255, 255, 255);\r\n$darker-font-cr: rgb(66, 66, 66);\r\n$h2-font-cr: rgb(33, 33, 33);\r\n\r\n\r\n//dimensions\r\n$standard-bor-rad: 8px;\r\n$big-bor-rad: 10px;\r\n$block-padding: 30px;\r\n$content-width: 1540px;\r\n\r\n//font-size\r\n$composition-font-size: 16px;\r\n$btn-font-size: 18px;\r\n$regular-font-size: 14px;\r\n$figure-headers-font-size: 20px;\r\n$figure-fields-font-size: 30px;\r\n$h2-font-size: 43px;\r\n$h2-main-font-size: 60px;\r\n\r\n//mixins\r\n@mixin fontStyle($font-size, $color, $align: default, $font-style: normal, $font-weight: bold) {\r\n  font-style: $font-style;\r\n  font-weight: $font-weight;\r\n  font-size: $font-size;\r\n  color: $color;\r\n  text-align: $align;\r\n}\r\n\r\n@mixin sliderBtn($radius) {\r\n  width: $radius;\r\n  height: $radius;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: $bg-cr-11;\r\n  box-shadow: 2px 2px 3px $bg-cr-20;\r\n\r\n  &:active {\r\n    box-shadow: none;\r\n    background-color: $bg-cr-20;\r\n  }\r\n\r\n  &:before {\r\n    content: ' ';\r\n    width: calc(#{$radius} * 0.375);\r\n    height: calc(#{$radius} * 0.375);\r\n    display: inline-block;\r\n    border-left: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-bottom: calc(#{$radius} / 8) solid $light-item-cr;\r\n    border-radius: 0 0 0 calc(#{$radius} / 8);\r\n    margin-top: calc(#{$radius} * 0.05);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: $bg-cr-footer2;\r\n  }\r\n\r\n}\r\n\r\n// standard elements\r\nbutton.mainBtn {\r\n  background: $bg-cr-11;\r\n  border: none;\r\n  box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n  border-radius: 14px;\r\n\r\n  width: 200px;\r\n  height: 70px;\r\n\r\n  @include fontStyle(\r\n                  $btn-font-size,\r\n                  $light-font-cr,\r\n                  center);\r\n\r\n  &:active {\r\n    background-color: $bg-cr-20;\r\n    color: $light-font-cr;\r\n\r\n  }\r\n}\r\n\r\nbutton.secBtn {\r\n  @include fontStyle($composition-font-size, $bg-cr-11);\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  &:active {\r\n    color: $bg-cr-20;\r\n  }\r\n}\r\n\r\nbutton.forward::before {\r\n  transform: rotate(225deg);\r\n  margin-right: 10px;\r\n}\r\n\r\nbutton.backward::before {\r\n  transform: rotate(45deg);\r\n  margin-left: 10px;\r\n}\r\n\r\n//Animations\r\n.foodPhoto:hover,\r\n.mealPhoto:hover {\r\n  transition-duration: 0.5s;\r\n  transition-property: transform;\r\n  transform: rotate(-5deg);\r\n}","@use './common';\r\n\r\n.topNav {\r\n  width: calc(#{common.$content-width} - 210px);\r\n  padding: 16px common.$block-padding;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n\r\n  .logo {\r\n    width: 60px;\r\n\r\n  }\r\n\r\n  .address {\r\n    width: 490px;\r\n\r\n    input {\r\n      @include common.fontStyle(\r\n                      common.$btn-font-size,\r\n                      common.$darker-font-cr,\r\n                      left\r\n      );\r\n      border: none;\r\n      width: 350px;\r\n      padding-left: 25px;\r\n      margin-left: 10px;\r\n\r\n\r\n    }\r\n\r\n    span {\r\n      @include common.fontStyle(\r\n                      common.$btn-font-size,\r\n                      common.$darker-font-cr);\r\n      position: relative;\r\n\r\n      &:after {\r\n        content: common.$positionSvg;\r\n        position: absolute;\r\n        right: -30px;\r\n        top: 1px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .search {\r\n    position: relative;\r\n\r\n    &:before {\r\n      content: common.$searchSvg;\r\n      position: absolute;\r\n      left: 10px;\r\n      top: 1px;\r\n    }\r\n\r\n    input {\r\n      @include common.fontStyle(\r\n                      common.$btn-font-size,\r\n                      common.$darker-font-cr,\r\n                      left\r\n      );\r\n      border: none;\r\n      width: 150px;\r\n      padding-left: 25px;\r\n      margin-left: 10px;\r\n      outline: 0;\r\n\r\n      &::placeholder {\r\n        color: common.$darker-font-cr;\r\n      }\r\n\r\n      &:focus::placeholder {\r\n        font-weight: normal;\r\n        color: common.$border-cr;\r\n        outline: solid 1px common.$border-cr;\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n  button, #login {\r\n    position: relative;\r\n    background: common.$light-item-cr;\r\n    box-shadow: 0 5px 10px rgba(255, 174, 0, 0.26), 0 20px 40px rgba(255, 174, 0, 0.29);\r\n    border-radius: 8px;\r\n    border: none;\r\n    width: 100px;\r\n    height: 45px;\r\n    padding-left: 15px;\r\n\r\n\r\n    @include common.fontStyle(\r\n                    common.$btn-font-size,\r\n                    common.$bg-cr-20,\r\n                    center\r\n    );\r\n\r\n    &:before {\r\n      content: common.$userSvg;\r\n      position: absolute;\r\n      left: 10px;\r\n    }\r\n\r\n    &:active {\r\n      background-color: common.$bg-cr-20;\r\n      color: common.$light-font-cr;\r\n    }\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./common.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/featuredRestaurants.scss":
/*!*********************************************!*\
  !*** ./src/styles/featuredRestaurants.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_featuredRestaurants_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./featuredRestaurants.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/featuredRestaurants.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_featuredRestaurants_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_featuredRestaurants_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_featuredRestaurants_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_featuredRestaurants_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/foodCategories.scss":
/*!****************************************!*\
  !*** ./src/styles/foodCategories.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_foodCategories_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./foodCategories.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/foodCategories.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_foodCategories_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_foodCategories_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_foodCategories_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_foodCategories_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/popularItems.scss":
/*!**************************************!*\
  !*** ./src/styles/popularItems.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popularItems_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./popularItems.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popularItems.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popularItems_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popularItems_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popularItems_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popularItems_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/promo.scss":
/*!*******************************!*\
  !*** ./src/styles/promo.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./promo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/promo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/topNav.scss":
/*!********************************!*\
  !*** ./src/styles/topNav.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_topNav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./topNav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/topNav.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_topNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_topNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_topNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_topNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ContentCreator.js":
/*!*******************************!*\
  !*** ./src/ContentCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ContentCreator {
  constructor(settings) {
    this.settings = settings;
  }

  promoCards() {
    const cards = {};

    const { data } = this.settings.promo;

    Object.entries(data).map((card) => {
      const [key, prop] = card;

      const { template } = structuredClone(this.settings.promo);

      const photoWrap = template.c.photoWrap.c;

      const foodPhoto = photoWrap.foodPhoto.d;

      foodPhoto.src = prop.img;

      const discount = photoWrap.discount.d;

      discount.textContent = prop.discount
        .toString()
        .concat(discount.textContent);

      const mealName = template.c.mealName.d;

      mealName.textContent = prop.name;

      const timer = template.c.timer.d;

      timer.textContent = prop.time.toString().concat(timer.textContent);

      cards[key] = template;
      return cards[key];
    });
    return cards;
  }

  popularItems() {
    const { popularItems } = this.settings;

    const { sliderContent } = structuredClone(
      popularItems.template.mealSlider.c
    );

    const cards = popularItems.template.mealSlider;

    cards.c.sliderContent.c = {};

    const { data } = popularItems;

    Object.entries(data).map((card) => {
      const [key, value] = card;

      const template = structuredClone(sliderContent.c.mealCard);

      const mealPhoto = template.c.mealPhoto.d;

      mealPhoto.src = mealPhoto.src.concat(value.img);

      const mealName = template.c.mealName.d;

      mealName.textContent = value.name;

      const restName = template.c.restName.d;

      restName.textContent = value.restaurant;

      const mealPrice = template.c.mealPrice.d;

      mealPrice.textContent = mealPrice.textContent.concat(
        value.price.toString()
      );

      const composition = template.c.composition.d;

      composition.textContent = value.composition;

      cards.c.sliderContent.c[key] = template;

      return cards.c.sliderContent.c[key];
    });

    const shell = {};

    shell.popularItems = cards;

    return shell;
  }

  restContent() {
    const { featuredRestaurants } = this.settings;

    const restContent = structuredClone(
      featuredRestaurants.template.restContent.c
    );

    const cards = featuredRestaurants.template.restContent;

    cards.c = {};

    const { data } = featuredRestaurants;

    Object.entries(data).map((card) => {
      const [key, value] = card;

      const template = structuredClone(restContent.restaurant);

      const mealPict = template.c.mealPict.d;

      mealPict.src = mealPict.src.concat(value.mealPict);

      const discounts = template.c.discounts.d;

      discounts.textContent = discounts.textContent.concat(value.discounts);

      const deliveryRate = template.c.deliveryRate.d;

      deliveryRate.textContent = value.deliveryRate;

      const restLogo = template.c.restLogo.d;

      restLogo.src = restLogo.src.concat(value.logo);

      const restName = template.c.restName.d;

      restName.textContent = value.name;

      const ratings = template.c.ratings.d;

      ratings.textContent = value.ratings;

      const currentState = template.c.currentState.d;

      const [className, textContent] = value.currentState;

      currentState.className = className;

      currentState.textContent = textContent;

      cards.c[key] = template;

      return cards.c[key];
    });
    const shell = {};

    shell.featuredRestaurants = cards;

    return shell;
  }

  menuContent() {
    const { menuContent } = this.settings;

    const tempWrapper = menuContent.template.c;

    const cards = menuContent.template;

    cards.c = {};

    const { data } = menuContent;

    Object.entries(data).map((card) => {
      const [key, value] = card;

      const template = structuredClone(tempWrapper.item);

      const mealPict = template.c.mealPict.d;

      mealPict.src = mealPict.src.concat(value.img);

      const name = template.c.name.d;

      name.textContent = value.name;

      cards.c[key] = template;

      return cards.c[key];
    });

    const shell = {};

    shell.menuContent = cards;

    return shell;
  }

  footerCities() {
    const { cityList } = this.settings.footer;

    const tempWrapper = cityList.template.c;

    const cards = cityList.template;

    cards.c = {};

    const { data } = cityList;

    Object.entries(data).map((card) => {
      const [name, href] = card;

      const template = structuredClone(tempWrapper.link);

      template.d.textContent = name;

      template.d.href = template.d.href.concat(href);

      cards.c[name] = template;

      return cards.c[name];
    });

    const shell = {};

    shell.cityList = cards;

    return shell;
  }

  footerMenu() {
    const { navigation } = this.settings.footer;

    const tempWrapper = navigation.template.c;

    const cards = navigation.template;

    cards.c = {};

    const { data } = navigation;

    Object.entries(data).map((card) => {
      const [name, value] = card;

      const { division } = structuredClone(tempWrapper);

      const template = division.c;

      template.title.d.textContent = name;

      const subLevel = division;

      subLevel.c = {};

      subLevel.c[name] = template.title;

      Object.entries(value).map((link) => {
        const [text, href] = link;

        const plate = structuredClone(template.link);

        plate.d.textContent = text;

        plate.d.href = plate.d.href.concat(href);

        subLevel.c[text] = plate;

        return subLevel.c[text];
      });

      cards.c[name] = division;

      return cards.c[name];
    });

    const shell = {};

    shell.navigation = cards;

    return shell;
  }

  footerNetworks() {
    const { socialNetworks } = this.settings.footer;

    const tempWrapper = socialNetworks.template.c;

    const cards = socialNetworks.template;

    cards.c = {};

    const { data } = socialNetworks;

    Object.entries(data).map((card) => {
      const [className, href] = card;

      const template = structuredClone(tempWrapper.link);

      template.d.href = template.d.href.concat(href);

      const icon = template.c.networkPict.d;

      icon.className = icon.className.concat(' ', className);

      cards.c[className] = template;

      return cards.c[className];
    });

    const shell = {};

    shell.footerNetworks = cards;

    return shell;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentCreator);


/***/ }),

/***/ "./src/UiCreator.js":
/*!**************************!*\
  !*** ./src/UiCreator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_json_contentHTML_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/json/contentHTML.json */ "./src/assets/json/contentHTML.json");
/* harmony import */ var _ContentCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentCreator */ "./src/ContentCreator.js");




class UiCreator {
  constructor(pointer, data) {
    this.pointer = pointer;

    this.data = data;
  }

  render() {
    const { data } = this;

    const nodeCreate = (props) => {
      const details = structuredClone(props);

      const { tag } = details.d;

      delete details.d.tag;

      const parent = document.createElement(tag);

      Object.entries(details.d).forEach((prop) => {
        const [key, value] = prop;

        if (key === 'src') {
          const link = `${value}`;

          parent[key] = __webpack_require__("./src sync recursive ^\\.\\/.*$")(`./${link}`);
        } else parent[key] = value;
      });

      if (details.c) {
        const { c } = details;

        Object.entries(c).forEach((node) => {
          const [key, value] = node;
          if (key === 'i') {
            delete c[key];

            Object.values(value).forEach((func) => {
              const content = new _ContentCreator__WEBPACK_IMPORTED_MODULE_1__["default"](_assets_json_contentHTML_json__WEBPACK_IMPORTED_MODULE_0__);

              const nodes = content[func]();

              Object.values(nodes).forEach((element) => {
                const child = nodeCreate(element);

                parent.append(child);
              });
            });
          } else {
            const child = nodeCreate(value);

            parent.append(child);
          }
        });
      }

      return parent;
    };

    const parent = nodeCreate(data);

    this.pointer.append(parent);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UiCreator);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_json_basicHTML_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/json/basicHTML.json */ "./src/assets/json/basicHTML.json");
/* harmony import */ var _UiCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiCreator */ "./src/UiCreator.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/common.scss */ "./src/styles/common.scss");
/* harmony import */ var _styles_featuredRestaurants_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/featuredRestaurants.scss */ "./src/styles/featuredRestaurants.scss");
/* harmony import */ var _styles_foodCategories_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/foodCategories.scss */ "./src/styles/foodCategories.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/styles/footer.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/header.scss */ "./src/styles/header.scss");
/* harmony import */ var _styles_popularItems_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/popularItems.scss */ "./src/styles/popularItems.scss");
/* harmony import */ var _styles_promo_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/promo.scss */ "./src/styles/promo.scss");
/* harmony import */ var _styles_topNav_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/topNav.scss */ "./src/styles/topNav.scss");



// styles










const wrapper = new _UiCreator__WEBPACK_IMPORTED_MODULE_1__["default"](document.body, _assets_json_basicHTML_json__WEBPACK_IMPORTED_MODULE_0__.wrapper);

wrapper.render();


/***/ }),

/***/ "./src sync recursive ^\\.\\/.*$":
/*!****************************!*\
  !*** ./src/ sync ^\.\/.*$ ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": "./src/index.js",
	"./ContentCreator": "./src/ContentCreator.js",
	"./ContentCreator.js": "./src/ContentCreator.js",
	"./UiCreator": "./src/UiCreator.js",
	"./UiCreator.js": "./src/UiCreator.js",
	"./assets/headerMeal.png": "./src/assets/headerMeal.png",
	"./assets/json/basicHTML": "./src/assets/json/basicHTML.json",
	"./assets/json/basicHTML.json": "./src/assets/json/basicHTML.json",
	"./assets/json/contentHTML": "./src/assets/json/contentHTML.json",
	"./assets/json/contentHTML.json": "./src/assets/json/contentHTML.json",
	"./assets/logo.png": "./src/assets/logo.png",
	"./assets/meals/cheeseBurger.png": "./src/assets/meals/cheeseBurger.png",
	"./assets/meals/crispySandwich.png": "./src/assets/meals/crispySandwich.png",
	"./assets/meals/dancake.png": "./src/assets/meals/dancake.png",
	"./assets/meals/foodCategories/burger.png": "./src/assets/meals/foodCategories/burger.png",
	"./assets/meals/foodCategories/chowmein.png": "./src/assets/meals/foodCategories/chowmein.png",
	"./assets/meals/foodCategories/noodles.png": "./src/assets/meals/foodCategories/noodles.png",
	"./assets/meals/foodCategories/pizza.png": "./src/assets/meals/foodCategories/pizza.png",
	"./assets/meals/foodCategories/steak.png": "./src/assets/meals/foodCategories/steak.png",
	"./assets/meals/foodCategories/subSandwich.png": "./src/assets/meals/foodCategories/subSandwich.png",
	"./assets/meals/mealImg1.png": "./src/assets/meals/mealImg1.png",
	"./assets/meals/mealImg2.png": "./src/assets/meals/mealImg2.png",
	"./assets/meals/mealImg3.png": "./src/assets/meals/mealImg3.png",
	"./assets/meals/mealImg4.png": "./src/assets/meals/mealImg4.png",
	"./assets/meals/mealRest1.png": "./src/assets/meals/mealRest1.png",
	"./assets/meals/mealRest2.png": "./src/assets/meals/mealRest2.png",
	"./assets/meals/mealRest3.png": "./src/assets/meals/mealRest3.png",
	"./assets/meals/mealRest4.png": "./src/assets/meals/mealRest4.png",
	"./assets/meals/mealRest5.png": "./src/assets/meals/mealRest5.png",
	"./assets/meals/mealRest6.png": "./src/assets/meals/mealRest6.png",
	"./assets/meals/mealRest7.png": "./src/assets/meals/mealRest7.png",
	"./assets/meals/mealRest8.png": "./src/assets/meals/mealRest8.png",
	"./assets/meals/thaiSoup.png": "./src/assets/meals/thaiSoup.png",
	"./assets/meals/toffesCake.png": "./src/assets/meals/toffesCake.png",
	"./assets/positionIcon.svg": "./src/assets/positionIcon.svg",
	"./assets/restaurants/restLogo1.png": "./src/assets/restaurants/restLogo1.png",
	"./assets/restaurants/restLogo2.png": "./src/assets/restaurants/restLogo2.png",
	"./assets/restaurants/restLogo3.png": "./src/assets/restaurants/restLogo3.png",
	"./assets/restaurants/restLogo4.png": "./src/assets/restaurants/restLogo4.png",
	"./assets/restaurants/restLogo5.png": "./src/assets/restaurants/restLogo5.png",
	"./assets/restaurants/restLogo6.png": "./src/assets/restaurants/restLogo6.png",
	"./assets/restaurants/restLogo7.png": "./src/assets/restaurants/restLogo7.png",
	"./assets/restaurants/restLogo8.png": "./src/assets/restaurants/restLogo8.png",
	"./index": "./src/index.js",
	"./index.js": "./src/index.js",
	"./styles/common.scss": "./src/styles/common.scss",
	"./styles/featuredRestaurants.scss": "./src/styles/featuredRestaurants.scss",
	"./styles/foodCategories.scss": "./src/styles/foodCategories.scss",
	"./styles/footer.scss": "./src/styles/footer.scss",
	"./styles/header.scss": "./src/styles/header.scss",
	"./styles/index.scss": "./src/styles/index.scss",
	"./styles/popularItems.scss": "./src/styles/popularItems.scss",
	"./styles/promo.scss": "./src/styles/promo.scss",
	"./styles/topNav.scss": "./src/styles/topNav.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2716%27 height=%2719%27 viewBox=%270 0 16 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z%27 fill=%27url%28%23paint0_linear_401_1279%29%27/%3E%3Cdefs%3E%3ClinearGradient id=%27paint0_linear_401_1279%27 x1=%27-7.02825%27 y1=%27-22.35%27 x2=%2723.9034%27 y2=%27-20.9848%27 gradientUnits=%27userSpaceOnUse%27%3E%3Cstop stop-color=%27%23FFB800%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FF8A00%27/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2716%27 height=%2719%27 viewBox=%270 0 16 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z%27 fill=%27url%28%23paint0_linear_401_1279%29%27/%3E%3Cdefs%3E%3ClinearGradient id=%27paint0_linear_401_1279%27 x1=%27-7.02825%27 y1=%27-22.35%27 x2=%2723.9034%27 y2=%27-20.9848%27 gradientUnits=%27userSpaceOnUse%27%3E%3Cstop stop-color=%27%23FFB800%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FF8A00%27/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2716%27 height=%2719%27 viewBox=%270 0 16 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M8 9.25C10.4609 9.25 12.5 7.24609 12.5 4.75C12.5 2.28906 10.4609 0.25 8 0.25C5.50391 0.25 3.5 2.28906 3.5 4.75C3.5 7.24609 5.50391 9.25 8 9.25ZM11.1289 10.375H10.5312C9.75781 10.7617 8.91406 10.9375 8 10.9375C7.08594 10.9375 6.20703 10.7617 5.43359 10.375H4.83594C2.23438 10.375 0.125 12.5195 0.125 15.1211V16.5625C0.125 17.5117 0.863281 18.25 1.8125 18.25H14.1875C15.1016 18.25 15.875 17.5117 15.875 16.5625V15.1211C15.875 12.5195 13.7305 10.375 11.1289 10.375Z%27 fill=%27url%28%23paint0_linear_401_1279%29%27/%3E%3Cdefs%3E%3ClinearGradient id=%27paint0_linear_401_1279%27 x1=%27-7.02825%27 y1=%27-22.35%27 x2=%2723.9034%27 y2=%27-20.9848%27 gradientUnits=%27userSpaceOnUse%27%3E%3Cstop stop-color=%27%23FFB800%27/%3E%3Cstop offset=%271%27 stop-color=%27%23FF8A00%27/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2718%27 height=%2718%27 viewBox=%270 0 18 18%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z%27 fill=%27white%27/%3E%3C/svg%3E%0A":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2718%27 height=%2718%27 viewBox=%270 0 18 18%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z%27 fill=%27white%27/%3E%3C/svg%3E%0A ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2718%27 height=%2718%27 viewBox=%270 0 18 18%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM12.2344 11.5352L11.5312 12.4141C11.4258 12.5547 11.2852 12.6602 11.0742 12.6602C10.9688 12.6602 10.8281 12.5898 10.7578 12.5195L8.40234 10.7617C8.05078 10.5156 7.875 10.1289 7.875 9.67188V4.1875C7.875 3.90625 8.12109 3.625 8.4375 3.625H9.5625C9.84375 3.625 10.125 3.90625 10.125 4.1875V9.25L12.1641 10.7617C12.2695 10.8672 12.375 11.0078 12.375 11.1836C12.375 11.3242 12.3047 11.4648 12.2344 11.5352Z%27 fill=%27white%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z%27 fill=%27white%27/%3E%3C/svg%3E%0A":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z%27 fill=%27white%27/%3E%3C/svg%3E%0A ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0 9.14453C0 9.60156 0.175781 10.0234 0.492188 10.3398L7.91016 17.7578C8.57812 18.4258 9.66797 18.4258 10.3008 17.7578L17.4727 10.5859C18.1406 9.95312 18.1406 8.86328 17.4727 8.19531L10.0547 0.777344C9.73828 0.460938 9.31641 0.25 8.85938 0.25H1.6875C0.738281 0.25 0 1.02344 0 1.9375V9.14453ZM3.9375 2.5C4.85156 2.5 5.625 3.27344 5.625 4.1875C5.625 5.13672 4.85156 5.875 3.9375 5.875C2.98828 5.875 2.25 5.13672 2.25 4.1875C2.25 3.27344 2.98828 2.5 3.9375 2.5Z%27 fill=%27white%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2719%27 height=%2719%27 viewBox=%270 0 19 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2722%27 height=%2722%27 viewBox=%270 0 22 22%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2722%27 height=%2722%27 viewBox=%270 0 22 22%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2722%27 height=%2722%27 viewBox=%270 0 22 22%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2724%27 height=%2719%27 viewBox=%270 0 24 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z%27 fill=%27%23ADADAD%27/%3E%3C/svg%3E%0A":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2724%27 height=%2719%27 viewBox=%270 0 24 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z%27 fill=%27%23ADADAD%27/%3E%3C/svg%3E%0A ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2724%27 height=%2719%27 viewBox=%270 0 24 19%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.5312 6.45312C22.4531 7.29688 21.0938 8.32812 16.3125 11.7969C15.375 12.5 13.6406 14.0469 12 14.0469C10.3125 14.0469 8.625 12.5 7.64062 11.7969C2.85938 8.32812 1.5 7.29688 0.421875 6.45312C0.234375 6.3125 0 6.45312 0 6.6875V16.25C0 17.5156 0.984375 18.5 2.25 18.5H21.75C22.9688 18.5 24 17.5156 24 16.25V6.6875C24 6.45312 23.7188 6.3125 23.5312 6.45312ZM12 12.5C13.0781 12.5469 14.625 11.1406 15.4219 10.5781C21.6562 6.07812 22.125 5.65625 23.5312 4.53125C23.8125 4.34375 24 4.01562 24 3.64062V2.75C24 1.53125 22.9688 0.5 21.75 0.5H2.25C0.984375 0.5 0 1.53125 0 2.75V3.64062C0 4.01562 0.140625 4.34375 0.421875 4.53125C1.82812 5.65625 2.29688 6.07812 8.53125 10.5781C9.32812 11.1406 10.875 12.5469 12 12.5Z%27 fill=%27%23ADADAD%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2724%27 height=%2720%27 viewBox=%270 0 24 20%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2724%27 height=%2720%27 viewBox=%270 0 24 20%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2724%27 height=%2720%27 viewBox=%270 0 24 20%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z%27 fill=%27%23F5F5F5%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2725%27 height=%2724%27 viewBox=%270 0 25 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2725%27 height=%2724%27 viewBox=%270 0 25 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=%2725%27 height=%2724%27 viewBox=%270 0 25 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11.1289 1.52344L8.33594 7.23828L2.01953 8.14062C0.902344 8.3125 0.472656 9.6875 1.28906 10.5039L5.80078 14.9297L4.72656 21.1602C4.55469 22.2773 5.75781 23.1367 6.74609 22.6211L12.375 19.6562L17.9609 22.6211C18.9492 23.1367 20.1523 22.2773 19.9805 21.1602L18.9062 14.9297L23.418 10.5039C24.2344 9.6875 23.8047 8.3125 22.6875 8.14062L16.4141 7.23828L13.5781 1.52344C13.1055 0.535156 11.6445 0.492188 11.1289 1.52344Z%27 fill=%27%23FFB30E%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf8,%3Csvg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z" fill="%23FFB30E"/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf8,%3Csvg width=\"14\" height=\"19\" viewBox=\"0 0 14 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M6.04688 17.8984C6.36328 18.3906 7.10156 18.3906 7.41797 17.8984C12.5508 10.5156 13.5 9.74219 13.5 7C13.5 3.27344 10.4766 0.25 6.75 0.25C2.98828 0.25 0 3.27344 0 7C0 9.74219 0.914062 10.5156 6.04688 17.8984ZM6.75 9.8125C5.16797 9.8125 3.9375 8.58203 3.9375 7C3.9375 5.45312 5.16797 4.1875 6.75 4.1875C8.29688 4.1875 9.5625 5.45312 9.5625 7C9.5625 8.58203 8.29688 9.8125 6.75 9.8125Z\" fill=\"%23FFB30E\"/%3E%3C/svg%3E";

/***/ }),

/***/ "./src/assets/headerMeal.png":
/*!***********************************!*\
  !*** ./src/assets/headerMeal.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2f462ff00bf1f1442248.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3b1d009248ef7f85ea9c.png";

/***/ }),

/***/ "./src/assets/meals/cheeseBurger.png":
/*!*******************************************!*\
  !*** ./src/assets/meals/cheeseBurger.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7e1b4115f34c4dfa8091.png";

/***/ }),

/***/ "./src/assets/meals/crispySandwich.png":
/*!*********************************************!*\
  !*** ./src/assets/meals/crispySandwich.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "87b1b0bd121d243d9c13.png";

/***/ }),

/***/ "./src/assets/meals/dancake.png":
/*!**************************************!*\
  !*** ./src/assets/meals/dancake.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31ac1af0f6ba14ad7705.png";

/***/ }),

/***/ "./src/assets/meals/foodCategories/burger.png":
/*!****************************************************!*\
  !*** ./src/assets/meals/foodCategories/burger.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9bff2e374d6c976b5077.png";

/***/ }),

/***/ "./src/assets/meals/foodCategories/chowmein.png":
/*!******************************************************!*\
  !*** ./src/assets/meals/foodCategories/chowmein.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bc610359b4868f8a951c.png";

/***/ }),

/***/ "./src/assets/meals/foodCategories/noodles.png":
/*!*****************************************************!*\
  !*** ./src/assets/meals/foodCategories/noodles.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf33590ba641adfc3c3a.png";

/***/ }),

/***/ "./src/assets/meals/foodCategories/pizza.png":
/*!***************************************************!*\
  !*** ./src/assets/meals/foodCategories/pizza.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a960b05151de75c5230e.png";

/***/ }),

/***/ "./src/assets/meals/foodCategories/steak.png":
/*!***************************************************!*\
  !*** ./src/assets/meals/foodCategories/steak.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "95ee8ea6bc2bad9628ba.png";

/***/ }),

/***/ "./src/assets/meals/foodCategories/subSandwich.png":
/*!*********************************************************!*\
  !*** ./src/assets/meals/foodCategories/subSandwich.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b9643d282f33267c36fe.png";

/***/ }),

/***/ "./src/assets/meals/mealImg1.png":
/*!***************************************!*\
  !*** ./src/assets/meals/mealImg1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f60f79eb0970d0f2192a.png";

/***/ }),

/***/ "./src/assets/meals/mealImg2.png":
/*!***************************************!*\
  !*** ./src/assets/meals/mealImg2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bcd4e25dee945d75ef8e.png";

/***/ }),

/***/ "./src/assets/meals/mealImg3.png":
/*!***************************************!*\
  !*** ./src/assets/meals/mealImg3.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12c6381ac545d36cfd85.png";

/***/ }),

/***/ "./src/assets/meals/mealImg4.png":
/*!***************************************!*\
  !*** ./src/assets/meals/mealImg4.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b215a89937d4c6bf6a2b.png";

/***/ }),

/***/ "./src/assets/meals/mealRest1.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da9111ba0d9b234acab8.png";

/***/ }),

/***/ "./src/assets/meals/mealRest2.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0082c1ac763fc5abd01.png";

/***/ }),

/***/ "./src/assets/meals/mealRest3.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "256e24614a687f85cd67.png";

/***/ }),

/***/ "./src/assets/meals/mealRest4.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest4.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2b0f2d434bd7a4e40a93.png";

/***/ }),

/***/ "./src/assets/meals/mealRest5.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest5.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "138cd9825aae2511506f.png";

/***/ }),

/***/ "./src/assets/meals/mealRest6.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest6.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1f1bee50e2025eb686f7.png";

/***/ }),

/***/ "./src/assets/meals/mealRest7.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest7.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b268f782a02abb048df6.png";

/***/ }),

/***/ "./src/assets/meals/mealRest8.png":
/*!****************************************!*\
  !*** ./src/assets/meals/mealRest8.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e89f00afee0824600e5c.png";

/***/ }),

/***/ "./src/assets/meals/thaiSoup.png":
/*!***************************************!*\
  !*** ./src/assets/meals/thaiSoup.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8537f02a2b3eb0d4f566.png";

/***/ }),

/***/ "./src/assets/meals/toffesCake.png":
/*!*****************************************!*\
  !*** ./src/assets/meals/toffesCake.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ea2ad527a570153fdea9.png";

/***/ }),

/***/ "./src/assets/positionIcon.svg":
/*!*************************************!*\
  !*** ./src/assets/positionIcon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5da16f6cf1e066f9f128.svg";

/***/ }),

/***/ "./src/assets/restaurants/restLogo1.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo1.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f0ff5affbd31e59d593.png";

/***/ }),

/***/ "./src/assets/restaurants/restLogo2.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo2.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12089dd9fb443c1ed29b.png";

/***/ }),

/***/ "./src/assets/restaurants/restLogo3.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo3.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4c9585dd3f710d6466c.png";

/***/ }),

/***/ "./src/assets/restaurants/restLogo4.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo4.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "30846084006521e4887d.png";

/***/ }),

/***/ "./src/assets/restaurants/restLogo5.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo5.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7f87984a6bf7b8a4c251.png";

/***/ }),

/***/ "./src/assets/restaurants/restLogo6.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo6.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f156e3c98f820ce21465.png";

/***/ }),

/***/ "./src/assets/restaurants/restLogo7.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo7.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "04ee9244b6e1e27c4ffe.png";

/***/ }),

/***/ "./src/assets/restaurants/restLogo8.png":
/*!**********************************************!*\
  !*** ./src/assets/restaurants/restLogo8.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e9728ce15855d80b8565.png";

/***/ }),

/***/ "./src/assets/json/basicHTML.json":
/*!****************************************!*\
  !*** ./src/assets/json/basicHTML.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"wrapper":{"d":{"tag":"div","id":"content"},"c":{"topNav":{"d":{"tag":"div","className":"topNav"},"c":{"logo":{"d":{"tag":"img","className":"logo","src":"assets/logo.png","alt":"logotype"}},"deliveryTo":{"d":{"tag":"label","className":"address"},"c":{"title":{"d":{"tag":"span","textContent":"Delivery to: "}},"input":{"d":{"tag":"input","type":"text"}}}},"search":{"d":{"tag":"label","className":"search"},"c":{"input":{"d":{"tag":"input","type":"text","placeholder":"Search food"}}}},"loginBtn":{"d":{"tag":"button","id":"login","textContent":"Login"}}}},"header":{"d":{"tag":"div","className":"header"},"c":{"question":{"d":{"tag":"h2","textContent":"Are you starving?"}},"call":{"d":{"tag":"h4","textContent":"Within a few clicks, find meals that are accessible near you"}},"order":{"d":{"tag":"div","className":"order"},"c":{"upperPart":{"d":{"tag":"div","className":"upperPart"},"c":{"deliveryBtn":{"d":{"tag":"button","className":"delivery","id":"deliveryBtn","textContent":"Delivery"}},"pickupBtn":{"d":{"tag":"button","className":"pickup","id":"pickupBtn","textContent":"Pickup"}}}},"lowerPart":{"d":{"tag":"div","className":"lowerPart"},"c":{"input":{"d":{"tag":"input","type":"text","placeholder":"Enter your address"}},"btn":{"d":{"tag":"button","className":"findFood","textContent":"Find Food","id":"findFoodBtn"}}}},"headerImg":{"d":{"tag":"div","className":"headerImg"}}}}}},"promo":{"d":{"tag":"div","className":"promo"},"c":{"i":{"promo":"promoCards"}}},"popularItems":{"d":{"tag":"div","className":"popularItems"},"c":{"title":{"d":{"tag":"h2","textContent":"Popular Items"}},"i":{"popularCards":"popularItems"}}},"featuredRestaurants":{"d":{"tag":"div","className":"featuredRestaurants"},"c":{"title":{"d":{"tag":"h2","textContent":"Featured Restaurants"}},"i":{"restaurants":"restContent"},"btn":{"d":{"tag":"button","id":"viewRest","className":"mainBtn","textContent":"View All >"}}}},"menu":{"d":{"tag":"div","className":"menu"},"c":{"level2":{"d":{"tag":"div","className":"menuLevel2"},"c":{"title":{"d":{"tag":"h2","textContent":"Search by Food"}},"level3":{"d":{"tag":"div","className":"menuLevel3"},"c":{"secBtn":{"d":{"tag":"button","className":"secBtn","id":"viewAllCategories","textContent":"View all >"}},"backBtn":{"d":{"tag":"button","className":"categoryBtn backward","id":"categBackBtn"}},"forwBtn":{"d":{"tag":"button","className":"categoryBtn forward","id":"categForwBtn"}}}}}},"i":{"menuContent":"menuContent"}}},"footer":{"d":{"tag":"div","className":"footer"},"c":{"header":{"d":{"tag":"h2","className":"footHead","textContent":"Our Top Cities"}},"i":{"footerCities":"footerCities"},"upperLine":{"d":{"tag":"div","className":"hr"}},"menuWrapper":{"d":{"tag":"div","className":"menuWrap"},"c":{"i":{"footerMenu":"footerMenu"},"contacts":{"d":{"tag":"div","className":"contacts"},"c":{"title":{"d":{"tag":"h2","textContent":"Follow us"}},"i":{"footerNetworks":"footerNetworks"},"offers":{"d":{"tag":"span","textContent":"Receive exclusive offers in your mailbox"}},"mail":{"d":{"tag":"div","className":"mailWrap"},"c":{"input":{"d":{"tag":"input","id":"subscribe","placeholder":"Enter your email"}},"btn":{"d":{"tag":"button","id":"subscribe","textContent":"Subscribe"}}}}}}}},"lowerLine":{"d":{"tag":"div","className":"hr"}},"credits":{"d":{"tag":"div","className":"credentials"},"c":{"rights":{"d":{"tag":"span","textContent":"All rights Reserved @ Food Company, 2022"}},"made":{"d":{"tag":"span","textContent":"Made by me"}}}}}}}}}');

/***/ }),

/***/ "./src/assets/json/contentHTML.json":
/*!******************************************!*\
  !*** ./src/assets/json/contentHTML.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"promo":{"template":{"d":{"tag":"div","className":"dealCard"},"c":{"photoWrap":{"d":{"tag":"div","className":"foodPhoto"},"c":{"foodPhoto":{"d":{"tag":"img","src":"","alt":"Meal picture"}},"discount":{"d":{"tag":"span","className":"discount","textContent":" %"}}}},"mealName":{"d":{"tag":"span","className":"mealName"}},"timer":{"d":{"tag":"span","className":"timer","textContent":" Days Remaining"}}}},"data":{"promo1":{"img":"assets/meals/mealImg1.png","discount":15,"name":"tasty meal","time":6},"promo2":{"img":"assets/meals/mealImg2.png","discount":20,"name":"very tasty meal","time":4},"promo3":{"img":"assets/meals/mealImg3.png","discount":10,"name":"tasty meal","time":10},"promo4":{"img":"assets/meals/mealImg4.png","discount":25,"name":"very tasty meal","time":2}}},"popularItems":{"template":{"mealSlider":{"d":{"tag":"div","className":"mealSlider"},"c":{"prevBtn":{"d":{"tag":"button","className":"sliderBtn backward","id":"mealBackwardButton"}},"sliderContent":{"d":{"tag":"div","className":"sliderContent"},"c":{"mealCard":{"d":{"tag":"div","className":"mealCard"},"c":{"mealPhoto":{"d":{"tag":"img","className":"mealPhoto","alt":"Meal picture","src":"assets/meals/"}},"mealName":{"d":{"tag":"span","className":"mealName"}},"restName":{"d":{"tag":"span","className":"restName"}},"mealPrice":{"d":{"tag":"span","className":"mealPrice","textContent":"$"}},"orderBtn":{"d":{"tag":"button","id":"orderNow","textContent":"Order Now"}},"composition":{"d":{"tag":"p","className":"composition"}}}}}},"nextBtn":{"d":{"tag":"button","className":"sliderBtn forward","id":"mealForwardButton"}}}}},"data":{"meal1":{"img":"cheeseBurger.png","name":"Cheese Burger","restaurant":"Burger Arena","price":3.88,"composition":"the juiciest aged beef patty, smashed and pushed into the pan for maximum crispy edges, melty American- style cheese on top, a butter-toasted brioche bun, spicy/sweet/sour/crunchy pickles, a riff on a famous sauce from a famous burger from a certain famous American fast food outlet."},"meal2":{"img":"crispySandwich.png","name":"Crispy Sandwich","restaurant":"Fast Food Dine","price":3,"composition":"12 slices of sandwich bread, 8 slices of chicken, 4 tomatoes, 16 slices of bacon, lettuce, mayonnaise, butter, 8 slices of edamer"},"meal3":{"img":"dancake.png","name":"Dancake","restaurant":"Cake World","price":1.99,"composition":"Sugar, WHEAT flour, EGGS, vegetable oil (canola), water, vegetable fat (coconut and palm), humectant (glycerol), modified STARCH, glucose-fructose syrup, 1.4% low fat cocoa powder, emulsifiers (mono- and diglycerides of fatty acids."},"meal4":{"img":"thaiSoup.png","name":"Thai Soup","restaurant":"Foody man","price":2.79,"composition":"Authentic, bold, and delicious Thai flavors make this soup irresistible! This is the best Thai coconut soup I\'ve had. You won\'t be disappointed with this one! Serve over steamed rice."},"meal5":{"img":"toffesCake.png","name":"Toffe’s Cake","restaurant":"Top Sticks","price":4,"composition":"So, January. Here we go again. The time of year when gym memberships go up and the diet police come out, full-throttle, wiggling about in leotards and wagging their bony fingers at us, stirring up shame and dishing up huge dollops of self-disgust. "},"meal6":{"img":"cheeseBurger.png","name":"meal6","restaurant":"Burger Arena","price":3.88,"composition":"the juiciest aged beef patty, smashed and pushed into the pan for maximum crispy edges, melty American- style cheese on top, a butter-toasted brioche bun, spicy/sweet/sour/crunchy pickles, a riff on a famous sauce from a famous burger from a certain famous American fast food outlet."},"meal7":{"img":"crispySandwich.png","name":"meal7","restaurant":"Fast Food Dine","price":3,"composition":"12 slices of sandwich bread, 8 slices of chicken, 4 tomatoes, 16 slices of bacon, lettuce, mayonnaise, butter, 8 slices of edamer"},"meal8":{"img":"dancake.png","name":"meal8","restaurant":"Cake World","price":1.99,"composition":"Sugar, WHEAT flour, EGGS, vegetable oil (canola), water, vegetable fat (coconut and palm), humectant (glycerol), modified STARCH, glucose-fructose syrup, 1.4% low fat cocoa powder, emulsifiers (mono- and diglycerides of fatty acids."},"meal9":{"img":"thaiSoup.png","name":"meal9","restaurant":"Foody man","price":2.79,"composition":"Authentic, bold, and delicious Thai flavors make this soup irresistible! This is the best Thai coconut soup I\'ve had. You won\'t be disappointed with this one! Serve over steamed rice."},"meal10":{"img":"toffesCake.png","name":"meal10","restaurant":"Top Sticks","price":4,"composition":"So, January. Here we go again. The time of year when gym memberships go up and the diet police come out, full-throttle, wiggling about in leotards and wagging their bony fingers at us, stirring up shame and dishing up huge dollops of self-disgust. "}}},"featuredRestaurants":{"template":{"restContent":{"d":{"tag":"div","className":"restContent"},"c":{"restaurant":{"d":{"tag":"div","className":"restaurant"},"c":{"mealPict":{"d":{"tag":"img","src":"assets/meals/","className":"mealPict","alt":"restaurant picture"}},"discounts":{"d":{"tag":"span","className":"discounts","textContent":" % off"}},"deliveryRate":{"d":{"tag":"span","className":"deliveryRate"}},"restLogo":{"d":{"tag":"img","className":"restLogo","alt":"Restaurant logo","src":"assets/restaurants/"}},"restName":{"d":{"tag":"span","className":"restName"}},"ratings":{"d":{"tag":"span","className":"ratings"}},"currentState":{"d":{"tag":"span"}}}}}}},"data":{"r1":{"mealPict":"mealRest1.png","discounts":20,"deliveryRate":"fast","logo":"restLogo1.png","name":"Foodworld","restRating":46,"currentState":["open","Open now"]},"r2":{"mealPict":"mealRest2.png","discounts":15,"deliveryRate":"fast","logo":"restLogo2.png","name":"Pizzahub","restRating":40,"currentState":["closed","Opens tomorrow"]},"r3":{"mealPict":"mealRest3.png","discounts":10,"deliveryRate":"fast","logo":"restLogo3.png","name":"Donuts hut","restRating":20,"currentState":["open","Open now"]},"r4":{"mealPict":"mealRest4.png","discounts":10,"deliveryRate":"fast","logo":"restLogo4.png","name":"Donuts hut","restRating":50,"currentState":["open","Open now"]},"r5":{"mealPict":"mealRest5.png","discounts":15,"deliveryRate":"fast","logo":"restLogo5.png","name":"Ruby Tuesday","restRating":26,"currentState":["open","Open now"]},"r6":{"mealPict":"mealRest6.png","discounts":10,"deliveryRate":"fast","logo":"restLogo6.png","name":"Kuakata Fried Chicken","restRating":53,"currentState":["open","Open now"]},"r7":{"mealPict":"mealRest7.png","discounts":25,"deliveryRate":"fast","logo":"restLogo7.png","name":"Red Square","restRating":45,"currentState":["open","Open now"]},"r8":{"mealPict":"mealRest8.png","discounts":10,"deliveryRate":"fast","logo":"restLogo8.png","name":"Taco Bell","restRating":35,"currentState":["open","Open now"]}}},"menuContent":{"template":{"d":{"tag":"div","className":"menuContent"},"c":{"item":{"d":{"tag":"div","className":"item"},"c":{"mealPict":{"d":{"tag":"img","alt":"Meal picture","src":"assets/meals/foodCategories/"}},"name":{"d":{"tag":"span"}}}}}},"data":{"pizza":{"img":"pizza.png","name":"Pizza"},"burger":{"img":"burger.png","name":"Burger"},"noodles":{"img":"noodles.png","name":"Noodles"},"subSandwich":{"img":"subSandwich.png","name":"Sub-sandwich"},"chowmein":{"img":"chowmein.png","name":"Chowmein"},"steak":{"img":"steak.png","name":"Steak"}}},"footer":{"cityList":{"template":{"d":{"tag":"div","className":"cityList"},"c":{"link":{"d":{"tag":"a","href":"https://"}}}},"data":{"San Francisco":"#","Los Angeles":"#","New York City":"#","Chicago":"#","Columbus":"#","Miami":"#","Washington DC":"#","Orange County":"#","Phoenix":"#","New Mexico":"#","San Diego":"#","Seattle":"#","Atlanta":"#","Las Vegas":"#","Albuquerque":"#","East Bay":"#","Portland":"#","Charlotte":"#","Sacramento":"#","Long Beach":"#","Nashville":"#","Denver":"#","Oklahoma City":"#","New Orleans":"#"}},"navigation":{"template":{"d":{"tag":"div","className":"navigation"},"c":{"division":{"d":{"tag":"div","className":"division"},"c":{"title":{"d":{"tag":"h2"}},"link":{"d":{"tag":"a","href":"https://"}}}}}},"data":{"Company":{"About us":"#","Team":"#","Careers":"#","Blog":"#"},"Contact":{"Help & Support":"#","Partner with us":"#","Ride with us":"#"},"Legal":{"Terms & Conditions":"#","Refund & Cancellation":"#","Privacy Policy":"#","Cookie Policy":"#"}}},"socialNetworks":{"template":{"d":{"tag":"div","className":"networks","id":"socialNetworks"},"c":{"link":{"d":{"tag":"a","href":"https://"},"c":{"networkPict":{"d":{"tag":"div","className":"socialIcons"}}}}}},"data":{"instagram":"instagram.com","facebook":"facebook.com","twitter":"twitter.com"}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map