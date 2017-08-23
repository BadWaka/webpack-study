// 静态导入
// import _ from 'lodash';
// import printMe from './print';
// import './styles.css';
//
// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
//
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
//
//     element.appendChild(btn);
//
//     return element;
// }
//
// // document.body.appendChild(component());
// var element = component();
// document.body.appendChild(element);
//
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component();  // 重新渲染页面后，component 更新 click 事件处理
//         document.body.appendChild(element);
//     });
// }
//
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// 动态导入
function getComponent() {
    return import(/* webpackChunkName: "lodash" */'lodash')
        .then(_ => {
            var element = document.createElement('div');
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');
            return element;
        })
        .catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
    document.body.appendChild(component);
});