// Anti pattern: Stay away from it!

let inputValue = 'Texas'

class Autocomplete extends React.Component{
    updateValues() {
        this.props.inputValue = 'California'
        inputValue = 'California'
        this.inputValue = 'California'
    }

    render() {
        return (
            <div>
                {this.props.inputValue}
                {inputValue}
                {this.inputValue}
            </div>
        )
    }
}


// Definning react components when there's no need for state
// the HelloWorld component can be rewritten as a function
// that returns <h1>
const HelloWorld = function(props){
    return <h1 {...props}> Hello {props.frameworkName} world. </h1>
}

// using an arrow function instead
const HelloWorld = (props) => {
    // the return can be omited (Ref. page #82)
    return <h1 {...props}> Hello {props.frameworkName} world. </h1>
}


function Link(props){
    return <a href={props.href} target="_blank" className="btn btn-primary"> 
        {props.text} </a>
}

var Link = props => <a href={props.href} target="_blank" 
        className="btn btn-primary"> 
        {props.text} 
    </a>

Link = (props) => {
    return (
        <a href={props.href} target="_blank" 
            className="btn btn-primary"> 
            {props.text} 
        </a>
    )
}

ReactDOM.render(
    <Link text='Buy React Quickly'
        href='google.com' />,
    document.getElementById('content')
)

/*
The stateless component can not have a state but can have 2 properties
propTypes and defaultProps (chapter 8)

Link.propTypes = { ... }
Link.defaultProps = { ... }

Cannot use references (refs) with stateless components (chapter 7)
*/