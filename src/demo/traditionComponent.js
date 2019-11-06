import React, {Component} from 'react'

class TraditionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    addCount = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <p>traditionComponent</p>
                <button onClick={this.addCount}>Click me</button>
            </div>
        )
    }
}

export default TraditionComponent;