import React from "react";

class Counter extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            count: 0,
        };
        console.log('Constructor Counter');
    }

componentDidMount() {
    this.setState({count: 10});
    console.log('Component Did Mount Counter');
}

componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 10) {
        this.setState({count: 0});
    }
    console.log('Component Did Update Counter');
}


    render() {
        return (
            <div className="flex items-center mb-5">
                <h1 className="mr-5">{this.state.count}</h1>
                <button 
                    className="bg-black text-white p-3"
                    onClick={() => this.setState({count: this.state.count + 1})}>
                    +
                </button>
        {console.log('Render Counter')};

            </div>
        )
    }
}

export default Counter;