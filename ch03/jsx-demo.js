// Alternative shortcuts


React.createElement('h1', null, 'Hey')

// Alias
React.DOM.h1(null, 'Hey')


/**
 * You have access to all the standard HTML elements in the React.DOM 
 * object, whichyou can inspect like any other object:
 */
console.log(React.DOM)

// React.DOM and ReactDOM are different objects

/*
React.createElement(
    name,
    {key1: value1, key2: value2, ...},
    child1, child2, child3, ..., childN
)

// you can write this JSX :

<name key1=value1 key2=value2 ...>
    <child1/>
    <child2/>
    <child3/>
    ...
    <childN/>
</name>
*/