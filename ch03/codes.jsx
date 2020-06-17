render() {
    if (user.session)
    return React.createElement('a', {href: '/logout'}, 'Logout')
    else
    return React.createElement('a', {href: '/login'}, 'Login')
}

render() {
    if( this.props.user.session )
        return <a href="/logut"> Logout </a>
    else
    return <a href="/login"> Login </a>

}

// three diff. styles (vars, exps. tern. op.) Regular JS code

// Approach 1: variable
redner(){
    let link
    if( this.props.user.session )
        link = React.createElement('a', {href: '/logout'}, 'Logout'} )
    else
        link = React.createElement('a', {href: '/login'}, 'Login'} )
    return React.createElement('div', null, link)
}

// Approach 2: Expression
render(){
    let link = (sessionFlag) => {
        if( sessionFlag )
            return React.createElement('a', {href: '/logout'}, 'Logout')
        else
            return React.createElement('a', {href: '/login'}, 'Login')
    }

    return React.createElement('div', null, link(this.props.user.session))
}

// Approach 3: Ternary Operator
render(){
    return React.createElement('div', null,
        (this.props.user.session) 
            ? React.createElement('a', {href: '/logout'}, 'Logout')
            : React.createElement('a', {href: '/login'}, 'Login')
    )
}

// Now with jsx

// Approach 1: Variable
render() {
    let link
    if (this.props.user.session)
        link = <a href='/logout'> Logout </a>
    else
        link = <a href='/login'> Login </a>

    return <div> {link} </div>
}

// Approach 2: Expression / function style
render() {
    let link = (sessionFlag) => {
        if (sessionFlag)
            return <a href='/logout'>Logout</a>
        else
            return <a href='/login'>Login</a>
    }

    return <div> {link(this.props.user.session)} </div>
}

// Alternative Approach 2:
render(){
    return <div>{
        (sessionFlag) => { // defining a Immediately invoked function expression
            if (sessionFlag)
                return <a href='/logout'> Logout </a>
            else
                return <a href='/login'> Login </a>
        }(this.props.user.session)
    }</div>
}


// Approach 3: Ternary op
render() {
    return <div>
        { (this.props.user.session) 
            ? <a href='/logout'> Logout </a>
            : <a href='/login'> Login </a>
        }
    </div>
}

render(){
    let sessionFlag = this.props.user.session
    
    return <div>
        <a href={ (sessionFlag) ? '/logout' : '/login' }>
            { (sessionFlag) ? 'Logout' : 'Login' }
        </a>
    </div>
}

class MyComponent extends React.Component{

    render() {
        let link = (sessionFlag) => {
            if (sessionFlag)
                return <a href='/logout'>Logout</a>
            else
                return <a href='/login'>Login</a>
        }
    
        return <div> {link(this.props.user.session)} </div>
    }
}

// to dangerously set inner HTML
// not recommended

var specialChars = {__html: '&copy;&mdash;&ldquo;'}

<span dangerouslySetInnerHTML={specialChars}/>


// Css properties are differents in JSX
// write it in camelCase
background-image, backgroundImage
font-size, fontSize
font-family, fontFamily

/*
You can save the JavaScript object in a variable or render it inline with double curly
braces ( {{...}} ). The double braces are needed because one set is for JSX and the
other is for the JavaScript object literal.
*/

let smallFontSize = {frontSize : '10pt'}
<input style={smallFontSize} />

// or

<input style={{fontSize : '30pt'}} />

// gettting red border on span
<span style={{borderColor : 'red',
    borderWidth: 1,
    borderStyle: 'solid'}}> Hey </span>


// class and for, are reserved words, in JS and ECMAScript
// use instead,
// className and htmlFor

<div className="hidden">...</div>


// booleans will going to be insideo the curly braces
<input disabled={false} />

// If you omit the value, React will assume the value is true :
<input disabled />