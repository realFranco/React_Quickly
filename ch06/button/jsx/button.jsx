/*class SaveButton extends React.Component{

    handleSave( event ){
        console.log( this, event )
    }

    render () {
        // Passes the function definition returned by bind() to onClick
        return <button onClick={ this.handleSave.bind( this ) } >
            Save
        </button>

    }

}*/

// Same button, but with constructor binding for the
// event handler

class SaveButton extends React.Component{

    constructor( props ) {
        super( props );
        /*
            Bind the "this" context to the class to use "this"
            in the event handler to refer to this class.
        */
        this.handleSave = this.handleSave.bind( this );
    }

    handleSave( event ){
        console.log( this, event );
    }

    render() {
        // Passes the function definition to onClick
        return <button onClick={this.handleSave} >
            Save
        </button>
    }
}
