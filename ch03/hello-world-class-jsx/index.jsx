let helloWorldReactElement = <h1> Hello World </h1>

class HelloWorld extends React.Component {

    render() {
        return <div>
            {helloWorldReactElement}
            {helloWorldReactElement}
        </div>
    }

}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)


class ProfileLink extends React.Component{

    render() {
        return <a href={this.props.url}
            title={this.props.label}
            target="_blank"> Profile
        </a>
    }

}

ReactDOM.render(
    <ProfileLink url='/users/azat' label='Profile for Azat'/>,
    document.getElementById('content')
)


/*
storing data in custom html atrs. in the dom is generally considered an
antipattern, because you don't want the DOM to be your database or a 
front-end data store.

Getting data from the DOM is slower than getting it from a 
virtual/in-memory store.

In cases when you must store data as elems. attrs., and you use JSX,
you nned to use the data-NAME prefix.



let reactISAwesome = true
<li data-react-is-awesome={this.reactIsAwesome}>React is awesome!</li>

// render:
<li data-react-is-awesome="true">React is awesome!</li>

<li react-is-awesome={this.reactIsAwesome}>React is orange</li>
<li reactIsAwesome={this.reactIsAwesome}>React is orange</li>

// both render:
<li>React is orange</li>
*/

// With {...this.props} , you can pass every property to the child
class HelloWorld extends React.Component{
    render(){
    return <h1 {...this.properties} >
        Hello {this.props.frameworkName} world!!!
    </h1>
    }
}

ReactDOM.render(
    <div>
        <HelloWorld
            id='ember'
            frameworkName='Ember.js'
            title='A framwork for creating ambitious web apps.' />,
        <HelloWorld
            id='backbone'
            frameworkName='Backbone.js'
            title='Backbone.js gives structure to web apps.' />,
        <HelloWorld
            id='angular'
            frameworkName='Angular.js'
            title='Superheroic JS MVM framework.' />,
    </div>,
    docuemnt.getElementById('content')
)


// file: ch03/method/jsx/scrch03/meipt.jsx
class Content extends React.Component{
    getUrl(){
        return 'http://app.com'
    }

    render(){
        return(
            <div>
                <p>
                    REST API URL is:
                    <a href={this.getUrl()} >
                        {this.getUrl()}
                    </a>
                </p>
            </div>
        )
    }
}


ReactDOM.render(
    <Content/>,
    document.getElementById('content')
)
