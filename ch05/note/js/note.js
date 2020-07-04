class Note extends React.Component {

    constructor(props) {
        super(props);
    }

    confirmLeave(e) {
        let confirmationMessage = 'Do you really want to close?';

        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    componentDidMount() {

        console.log('Attaching confirmLeave event listener for beforeunload');
        window.addEventListener('beforeunload', this.confirmLeave);
    }

    componentWillUnmount() {

        console.log('Removing confirmLeave event listerner for beforeunload');
        window.removeEventListener('beforeunliad', this.confirmLeave);
    }

    render() {
        console.log('Render');
        return React.createElement(
            'div',
            null,
            'Here will be our input field for notes (parent will remove in  ',
            this.props.secondsLeft,
            ' seconds )'
        );
    }
}