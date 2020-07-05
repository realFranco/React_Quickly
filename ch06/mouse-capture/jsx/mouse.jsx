class Mouse extends React.Component{

    // on Chrome console:
    // > $0
    // > getEventListeners($0)
    // > getEventListeners(document)

    handleMouseOver( event ){
        // console.log('mouse is over with event');
        // console.dir(event.target);

        console.log('mouse is over with event');
        window.e = event; // Anti-pattern
        console.dir(event.target);
        setTimeout( ()=> {
            console.table(event.target)
            console.table(window.e.target)
            // By default, you can not use an event in an asynchronous
            // callback or by calling window.e
        }, 2345 )
    }

    render() {
        return <div>
            <div
                style={{border: '1px solid red'}}
                // onMouseOverCapture={(event => {
                //     console.log('mover over on capture event')
                //     console.dir(event, this)}).bind(this)}
                // onMouseOver={((event)=>{
                //     console.log('mouse over on bubbling event')
                //     console.dir(event, this)}).bind(this)} 

                // onMouseOver={( event =>{
                //     console.log('mouse over with event')
                //     // Accesses the SyntheticEvent object to log interactively
                //     console.dir( event )})} 

                onMouseOver={this.handleMouseOver.bind(this)}
                >
                Open DevTools and move your mouse cursor over here
            </div>
        </div>
    }

}