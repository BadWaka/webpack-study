webpackJsonp([2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
// 静态导入


function component() {
    const element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(module => {
        var print = module.default;

        print();
    });

    return element;
}

// document.body.appendChild(component());
var element = component();
document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component();  // 重新渲染页面后，component 更新 click 事件处理
//         document.body.appendChild(element);
//     });
// }

console.log('process.env.NODE_ENV', "production");

// // 动态导入
// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */'lodash')
//         .then(_ => {
//             var element = document.createElement('div');
//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//             return element;
//         })
//         .catch(error => 'An error occurred while loading the component');
// }
//
// getComponent().then(component => {
//     document.body.appendChild(component);
// });

/***/ })
],[1]);
//# sourceMappingURL=index.f1c988a1c296482aa02d.js.map