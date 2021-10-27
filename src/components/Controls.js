import React from "react";

class Controls extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            inputLaunch: 1
        }
    }

    nextLaunch = () => {
        this.props.updateCurrentLaunch(this.props.currentLaunch + 1);
    }

    previousLaunch = () => {
        this.props.updateCurrentLaunch(this.props.currentLaunch - 1);
    }

    firstLaunch = () => {
        this.props.updateCurrentLaunch(1);
    }

    lastLaunch = () => {
        this.props.updateCurrentLaunch(999);
    }


    updateInputLaunch = (evt) => {
        this.setState({inputLaunch: evt.target.value});
    }

    handleSpecificLaunchChoice = (evt) => {
        this.props.updateCurrentLaunch(this.state.inputLaunch);
    }

    render(){
        return(
            <div className="controls">
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
                        max={999}
                        onChange={this.updateInputLaunch}
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default Controls;