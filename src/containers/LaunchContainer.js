import React from "react";
import LaunchDetails from "../components/LaunchDetails";
import Controls from "../components/Controls";

class LaunchContainer extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            launches: [],
            currentLaunch: 1
        }
    }

    componentDidMount(){
        fetch("https://api.spacexdata.com/v4/launches")
            .then(response => response.json)
            .then(data => this.setState({launches: data}));
    }

    updateCurrentLaunch = (newFlightNumber) => {
        this.setState({currentLaunch: newFlightNumber});
    }

    render(){
        return(
            <>
                <Controls 
                    currentLaunch={this.state.currentLaunch} 
                    updateCurrentLaunch={this.updateCurrentLaunch}
                />
                <LaunchDetails launch={this.state.launches[this.state.currentLaunch]}/>
            </>
        )
    }

}

export default LaunchContainer;