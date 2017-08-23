// 静态导入
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
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

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

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