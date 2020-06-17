// Clock copmonent

class Clock extends React.Component{
    constructor(props) {
        super(props) // if not writed, is assumed under the hood
        this.state = { 
            currentTime : new Date().toLocaleString() 
        }
        this.launchClock()
    }

    // setState trigger render
    launchClock() {
        setInterval( () => {
            console.log('Updating time...')
            this.setState({ // updates only the properties you pass to it
                currentTime : new Date().toLocaleString()
            })
        }, 1000)
    }

    // render two chiled elements
    // how can i impport this (?)
    render(){
        console.log('Rendering clock...')
        return <div> 
            <AnalogDisplay time={this.state.currentTime}/>
            <DigitalDisplay time={this.state.currentTime}/>
        </div>
    }
}