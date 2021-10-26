import React from "react";

class Controls extends React.Component{

    constructor(props){
        super(props)
    }

    nextLaunch = () => {
        if (this.props.currentLaunch < this.props.maxLaunchNumber){
            this.props.updateCurrentLaunch(this.props.currentLaunch + 1);
        }
    }

    previousLaunch = () => {
        if (this.props.currentLaunch > 1) {
            this.props.updateCurrentLaunch(this.props.currentLaunch - 1);
        }
    }

    firstLaunch = () => {
        this.props.updateCurrentLaunch(1);
    }

    lastLaunch = () => {
        this.props.updateCurrentLaunch(this.props.maxLaunchNumber);
    }

    render(){
        return(
            <>
                <button onClick={this.firstLaunch}>First Launch</button>
                <button onClick={this.previousLaunch}>Previous Launch</button>
                <button onClick={this.nextLaunch}>Next Launch</button>
                <button onClick={this.lastLaunch}>Last Launch</button>
            </>
        )
    }

}

export default Controls;