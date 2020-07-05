class Content extends React.Component {

    constructor( props ){

        super( props );
        this.state = { counter : 0 };

    }

    handleClick( event ){
        this.setState( { counter : ++this.state.counter } )
    }

    render () {
        return (
            <div>
                <button 
                    // You need to pass a function definition, not invoke it.
                    // bind() return the funtion definition as a value to the
                    // onClick attribute.
                    onClick = {this.handleClick.bind(this)}
                    className="btn btn-primary"> 
                    Do not click me { this.state.counter } times!
                </button>
            </div>
        )
    }

}