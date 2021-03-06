// Clock copmonent

class Clock extends React.Component{
    constructor(props) {
        super(props) // if not writed, is assumed under the hood
        this.state = { currentTime : new Date().toLocaleString() }
        this.launchClock()
    }

    // setState trigger render
    launchClock() {
        setInterval( () => {
            console.log('Updating time...')
            this.setState({
                currentTime : new Date().toLocaleString()
            })
        }, 1000)
    }

    /*
    The mnanual approach use bind(this)

    setInterval( function() {
        this.setState({
            currentTime: new Date().toLocaleStrings()
        })
    }.bind(this), 1000)
     */

    render(){
        console.log('Rendering clock...')
        return <div> {this.state.currentTime} </div>
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('content')
)