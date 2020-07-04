// code
class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    /**
     * Performs a GET XHR request using the URL from the property
     * to fetch user data
     */
    componentDidMount() {

        /*
            Retrieves user info from the reponse and assigns it to the state
        */
        fetch(this.props['data-url']).then(response => response.json()).then(users => this.setState({ users: users }));
    }

    render() {

        // iterate over users state to create to create table rows
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "h1",
                null,
                " List of Users "
            ),
            React.createElement(
                "table",
                { className: "table-striped table-condensed table table-bordered table-hover" },
                React.createElement(
                    "tbody",
                    null,
                    this.state.users.map(user => React.createElement(
                        "tr",
                        { key: user.id },
                        React.createElement(
                            "td",
                            null,
                            " ",
                            user.first_name,
                            " ",
                            user.last_name,
                            " "
                        ),
                        React.createElement(
                            "td",
                            null,
                            " ",
                            user.email,
                            " "
                        ),
                        React.createElement(
                            "td",
                            null,
                            " ",
                            user.ip_address,
                            " "
                        )
                    ))
                )
            )
        );
    }

}