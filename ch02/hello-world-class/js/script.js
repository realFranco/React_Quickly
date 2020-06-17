
/*
React.createElement(
    name,
    {key1: value1, key2: value2, ...},
    child1, child2, child3, ..., childN
)
*/

// global (?)
let h1 = React.createElement('h1', null, 'Hello World')

class  HelloWorld extends React.component{

    render () {
        // console.log(Object.isFrozen(this.props))
        /**
         * The second parameter to createElement(), is an object whose
         * properties are accessible via the this.props object inside
         * the component's render() method.
         */
        // return React.createElement('div', null, h1, h1)
        return React.createElement(
            'h1', 
            // null,
            this.props, // any properties passed into the hello world
            'Hello ' + this.props.frameworkName + ' World.'
        )
    }

}

/*
ReactDOM.render(
    React.createElement(HelloWorld, null),
    document.getElementById('content')
)*/

ReactDOM.render(

    // can nest React elements using third, fourth, and so on args.
    React.createElement(
        'div',
        null,
        React.createElement( HelloWorld, {
            id              : 'ember',
            frameworkName   : 'Ember.js', // is not a standard attr, not render
            title           : 'A framwework for creaetinh ambitious web apps.'
        }),
        React.createElement( HelloWorld, {
            id              : 'backbone',
            frameworkName   : 'Backbone.js',
            title           : 'Backbone.js gives structure to web apps...'
        }),
        React.createElement( HelloWorld, {
            id              : 'angular',
            frameworkName   : 'Angular.js',
            title           : 'Superheroic js MVM Framework'
        })
    ),
    document.getElementById('content')

)
