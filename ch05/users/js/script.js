// some code
// https://raw.githubusercontent.com/azat-co/react-quickly/master/ch05/users/real-user-data.json

// let dataUrl = '/ch05/users/real-user-data.json'
let dataUrl = 'https://raw.githubusercontent.com/azat-co/react-quickly/master/ch05/users/real-user-data.json';

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(Users, { 'data-url': dataUrl })
), document.getElementById('content'));