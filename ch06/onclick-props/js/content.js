class Content extends React.Component {

    constructor(props) {

        super(props);

        // Binds the context in the constructor so you can use this.setState(),
        // which refers to the instances of this Content class

        this.handleClick = this.handleClick.bind(this);
        this.state = { counter: 0 };
    }

    handleClick(event) {
        this.setState({ counter: ++this.state.counter });
    }

    // counter in ClickCounterButton is a property and thus immutable; 
    // but in the Content parent, it’s a state and thus mutable.

    /*render () {
        // ClickCounterButton and Counter talk through Content
        // ClickCounterButton <-> Content <-> Counter
        return (
            <div>
                <ClickCounterButton 
                    // counter={this.state.counter}
                    handler={this.handleClick}/>
            </div>
        )
    }*/

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(ClickCounterButton, { handler: this.handleClick }),
            React.createElement("br", null),
            React.createElement(Counter, { value: this.state.counter })
        );
    }

}