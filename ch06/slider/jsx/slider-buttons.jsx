class SliderButtons extends React.Component{

    constructor( props ){
        super(props);
        this.state = {sliderValue : 0};
        this.handleSlide = this.handleSlide.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /*
        jquery will pass two arguments: a jquery event and the ui object with
        the current value, which you use to update the state.
    */
    handleSlide(event, ui){
        this.setState({sliderValue: ui.value});
    }

    /*
        Defines a method to update the slider when a button is clicked
    */
    handleChange(value){
        return () => {
            $('#slider').slider('value', this.state.sliderValue + value);
            this.setState({sliderValue : this.state.sliderValue + value});
        }
    }

    componentDidMount() {
        // Update the state to a new value
        $('#slider').on('slide', this.handleSlide);
    }

    componentWillUnmount() {
        // Removes the event listener on unmount
        $('#slider').off('slide', this.handleSlide);
    }

    render () {
        return <div>

            <button disabled={ (this.state.sliderValue < 1) ? true : false }
                className="btn default-btn"
                onClick={ this.handleChange(-1) }>
                1 Less ({ this.state.sliderValue-1 })
            </button>

            <button disabled={ (this.state.sliderValue > 99) ? true : false }
                className="btn default-btn"
                onClick={ this.handleChange(1) }>
                1 More ({ this.state.sliderValue+1 })
            </button>

        </div>
    }
}