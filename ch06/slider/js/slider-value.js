class SliderValue extends React.Component {

    constructor(props) {
        super(props);
        this.handleSlide = this.handleSlide.bind(this);
        this.state = { sliderValue: 0 };
    }

    handleSlide(event) {
        this.setState({ sliderValue: event.detail.ui.value });
    }

    /*
        attaches the slide event listener ot the windows object to
        thigger handleSlide()
    */
    componentDidMount() {
        window.addEventListener('slide', this.handleSlide);
    }

    /*
        removes slide from  window to avoid orphan event handlers and
        memory leaks
    */
    componentWillUnmount() {
        window.removeEventListener('slide', this.handleSlide);
    }

    render() {
        return React.createElement(
            'div',
            { className: '' },
            'Value: ',
            this.state.sliderValue
        );
    }

}