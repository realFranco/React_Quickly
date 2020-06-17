
// page 54
class Content extends React.Component{
    getUrl(){
        return 'http://app.com'
    }

    render(){
        return(
            <div>
                <p>
                    REST API URL is:
                    <a href={this.getUrl()} >
                        {this.getUrl()}
                    </a>
                </p>
            </div>
        )
    }
}


ReactDOM.render(
    <Content/>,
    document.getElementById('content')
)