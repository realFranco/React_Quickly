// code
class Users extends React.Component {

    constructor( props ){
        super( props )
        this.state = {
            users : []
        }
    }

    /**
     * Performs a GET XHR request using the URL from the property
     * to fetch user data
     */
    componentDidMount() {

        /*
            Retrieves user info from the reponse and assigns it to the state
        */
        fetch( this.props['data-url'] )
            .then( response => response.json() )
            .then( users => this.setState( { users : users }) );

    }

    render () {

        // iterate over users state to create to create table rows
        return <div className="container">
                <h1> List of Users </h1>
                <table className="table-striped table-condensed table table-bordered
                    table-hover">
                        
                        <tbody>
                            
                            {this.state.users.map( user =>
                                
                                <tr key={user.id}>
                                    <td> {user.first_name} {user.last_name} </td>
                                    <td> {user.email} </td>
                                    <td> {user.ip_address} </td>
                                </tr>
                            )}

                        </tbody>
                </table>
        </div>

    }

}