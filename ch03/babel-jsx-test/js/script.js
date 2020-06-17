// use the curly braces {} notation to output vars. dinamically
class Content extends React.Component {
    getUrl() {
        return 'http://app.com';
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'REST API URL is:',
                React.createElement(
                    'a',
                    { href: this.getUrl() },
                    this.getUrl()
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
