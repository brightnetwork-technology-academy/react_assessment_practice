import React from "react";

class LaunchDetails extends React.Component{

    render(){

        return(
            <>
                <h2>Launch Number {this.props.launch.flight_number}</h2>
                <p><b>Date:</b> {new Date(this.props.launch.date_unix * 1000).toDateString()}</p>
                <p><b>Successful Flight:</b> {this.props.launch.success ? "Yes" : "No"}</p>
                <p><b>Summary:</b> {this.props.launch.details}</p>
                <a href={this.props.launch.links.article}>Find out more</a>
            </>
        )
    }

}

export default LaunchDetails;