class Content extends React.Component{

    constructor(props) {
        super(props)
        console.log( 'I log, thefore I am' )
    }

    componentWillMount(){
        // Expects the DOM Node to be null
        console.log( ReactDOM.findDOMNode(this) )
    }

    componentDidMount(){
        // Expects the DOM node to be <div>
        console.dir( ReactDOM.findDOMNode(this) )
    }

    render() {
        console.log( 'Render' )
        return (
            <div/>
        )
    }
}
