// representational component

// class ClickCounterButton extends React.Component{

//     render() {
//         return <button
//             onClick={this.props.handler}
//             className="btn btn-danger">
//                 Increase the Volume (Current volume is {this.props.counter})
//             </button>
//     }

// }

class ClickCounterButton extends React.Component{

    render() {
        return <button
            onClick={this.props.handler}
            className="btn btn-info">
                Do not touch me with your dirty hands!
            </button>
    }

}

// You can also write ClickCounterButton as a function instead of a class
// to simplify the syntax a little;

// const ClickCounterButton = (props) => {
//     return <button
//         onClick={props.handler}
//         className="btn btn-info">
//             Do not touch me with your dirty hands!
//     </button>
// }