// some code
// https://raw.githubusercontent.com/azat-co/react-quickly/master/ch05/users/real-user-data.json

// let dataUrl = '/ch05/users/real-user-data.json'
let dataUrl = 'https://raw.githubusercontent.com/azat-co/react-quickly/master/ch05/users/real-user-data.json'

ReactDOM.render(
    <div>
        <Users data-url={dataUrl}/>
    </div>,
    document.getElementById('content')
)
