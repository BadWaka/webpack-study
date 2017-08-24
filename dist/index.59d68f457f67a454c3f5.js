webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(4);
// // 静态导入
// import _ from 'lodash';
//
// function component() {
//     const element = document.createElement('div');
//     var button = document.createElement('button');
//     var br = document.createElement('br');
//
//     button.innerHTML = 'Click me and look at the console!';
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.appendChild(br);
//     element.appendChild(button);
//
//     // Note that because a network request is involved, some indication
//     // of loading would need to be shown in a production-level site/app.
//     button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
//         var print = module.default;
//
//         print();
//     });
//
//     return element;
// }
//
// // document.body.appendChild(component());
// var element = component();
// document.body.appendChild(element);
//
// // if (module.hot) {
// //     module.hot.accept('./print.js', function () {
// //         console.log('Accepting the updated printMe module!');
// //         // printMe();
// //         document.body.removeChild(element);
// //         element = component();  // 重新渲染页面后，component 更新 click 事件处理
// //         document.body.appendChild(element);
// //     });
// // }
//
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
//
// // // 动态导入
// // function getComponent() {
// //     return import(/* webpackChunkName: "lodash" */'lodash')
// //         .then(_ => {
// //             var element = document.createElement('div');
// //             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// //             return element;
// //         })
// //         .catch(error => 'An error occurred while loading the component');
// // }
// //
// // getComponent().then(component => {
// //     document.body.appendChild(component);
// // });




function component() {
    var element = document.createElement('div');

    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
    element.onclick = __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
// // export default function printMe() {
// //     // console.log('I get called from print.js!');
// //     // cosnole.log('I get called from print.js!');
// //     console.log('Updating print.js...');
// // }
//
// console.log('The print.js module has loaded! See the network tab in dev tools...');
//
// export default () => {
//     console.log('Button Clicked: Here\'s "some text"!');
// }

function print(text) {
    console.log(text);
}

/***/ })
],[1]);
//# sourceMappingURL=index.59d68f457f67a454c3f5.js.map