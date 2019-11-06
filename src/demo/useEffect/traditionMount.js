import React, {Component} from 'react'

class TraditionMount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log(`componentDidMount=>You Clicked ${this.state.count} times`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate=>You clicked ${this.state.count} times`);
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>You Clicked {this.state.count} times</p>
                <button
                    onClick={this.changeCount}
                >click me
                </button>
            </div>
        )
    }
}

export default TraditionMount