import React from "react";
// import Button from "../components/Button";
import InputBox from "../components/InputBox";

export default class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            newText: ""
        }
    }

    //

    render() {
        const value = "dgfbbdggb";

        return(
            <InputBox value={value} onChange={() => this.onChange}/>
        );
    }

    onChange = () => {
        
    }
    
}




