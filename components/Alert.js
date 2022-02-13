import propTypes from "prop-types";
import React, { Component } from "react";
import autobind from "autobind-decorator";
import DataUtils from ""

class Alert extends Component {

    static propTypes = {
        options : propTypes.object,
        timeout : propTypes.number,
        visible : propTypes.bool,
    };

    static defaultTypes = {
        options : {},
        visible : true,
    };

    constructor(props) {
        super(props);

        this.state = {
            visible : this.props.visible,
        };
    }

    @autobind
    afterClose() {
        this.setState({visible : false});
    }

    @autobind
    onClose() {
        this.setState({visible : false});
    }
    
    render() {

        const options = DataUtils
    }
}