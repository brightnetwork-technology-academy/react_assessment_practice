import React from "react";

class Controls extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            inputLaunch: 1
        }
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


    updateInputLaunch = (evt) => {
        this.setState({inputLaunch: parseInt(evt.target.value)});
    }

    handleSpecificLaunchChoice = (evt) => {
        console.log(evt);
        evt.preventDefault();
        this.props.updateCurrentLaunch(this.state.inputLaunch);
    }

    render(){
        return(
            <>
                <button onClick={this.firstLaunch}>First Launch</button>
                <button onClick={this.previousLaunch}>Previous Launch</button>
                <button onClick={this.nextLaunch}>Next Launch</button>
                <button onClick={this.lastLaunch}>Last Launch</button>
                <form onSubmit={this.handleSpecificLaunchChoice}>
                    <label>Go to Launch:</label>
                    <input 
                        type="number" 
                        id="input-launch" 
                        name="input-launch" 
                        value={this.state.inputLaunch}
                        min={1}
                        max={this.props.maxLaunchNumber}
                        onChange={this.updateInputLaunch}
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }

}

export default Controls;