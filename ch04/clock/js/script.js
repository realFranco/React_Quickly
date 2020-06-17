// Anti pattern: Stay away from it!

let inputValue = 'Texas';

class Autocomplete extends React.Component {
    updateValues() {
        this.props.inputValue = 'California';
        inputValue = 'California';
        this.inputValue = 'California';
    }

    render() {
        return React.createElement(
            'div',
            null,
            this.props.inputValue,
            inputValue,
            this.inputValue
        );
    }
}

ReactDOM.render(React.createElement(Autocomplete, null), document.getElementById('content'));