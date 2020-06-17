// stateless component
// the value returned is not a component it is window Ref. page #88

const DigitalDisplay = function(props){
    return <div> {props.time} </div>
}
/*
// Good Pattern

const DigitalDisplay = function(props){
    const locale = time => (new Date(time)).toLocaleString('EU')
    return <div> {locale(props.time)} </div>
}

// Keep your statules components simple: no states and no methods

// Stateless components are the preferred way of working with React.
*/