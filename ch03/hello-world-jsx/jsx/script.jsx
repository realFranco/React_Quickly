ReactDOM.render(
    <h1>Hello world!</h1>,
    document.getElementById('content')
)

// store objects created with JSX syntax in variables
let helloWorldReactElement = <h1>Hello world!</h1>

ReactDOM.render(
    helloWorldReactElement,
    document.getElementById('content')
)

// Creating a HelloWorld class in JSX
class HelloWorld extends React.Component{

    render() {
        return (
            <di>
                <h1> 1. Hello World</h1>
                <h1> 2. Hello World</h1>
            </di>
        )
    }

    /*
     this is valid as well
    see James Nelson, “Why Use Parenthesis [sic] on js Return Statements?”
    http://jamesknelson.com/javascript-return-parenthesis

    render() {
        return <div> </div>
    }
     */

}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)


class DateTimeNow extends React.Component{

    render() {
        let dateTimeNow = new Date().toLocaleString()
        return React.createElement(
            'span',
            null,
            `Current date and time is ${dateTimeNow}.`
        )
    }

}

// use the curly braces {} notation to output vars. dinamically
class DateTimeNow extends React.Component{

    render(){
        let dateTimeNow = new Date().toLocaleString()
        // return <span> Current date and time is {dateTimeNow}. </span>
        return <span> Hello {this.props.userName}, your current date
            and time is {dateTimeNow}. </span>
    }

}

ReactDOM.render(
    <DateTimeNow userName='Franco' />, // passing a property
    document.getElementById('content')
)