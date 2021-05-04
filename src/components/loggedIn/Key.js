import React from 'react';
import styled from 'styled-components';

const WhiteKey = styled.div`
    width: 100px;
    height: 400px;
    background-color: ${props => props.selected ? '#563a07' : '#f1e4cf'};
    border: 2px solid black;
    border-radius: ${props => {
        if (props.id === 'C') return '5px 0px 0px 5px';
        else if (props.id === 'B') return '0px 5px 5px 0px';
    }};
    &:hover {
        cursor: pointer;
        background-color: ${props => props.selected ? '#563a07' : '#D3D3D3'};
    }
`;

const BlackKey = styled.div`
    width: 60px;
    height: 240px;
    background-color: ${props => props.selected ? '#563a07' : '#191414'};
    margin-left: -30px;
    margin-right: -30px;
    z-index: 2;
    border: 3px solid black;
    border-radius: 0px 0px 7px 7px;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.selected ? '#563a07' : '#424242'};
    }
`;

class Key extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            selected: false
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: nextProps.selected
        });
    }

    handleClick() {
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        return (this.props.color === 'white') ?
            <WhiteKey selected={this.state.selected} onClick={this.props.onClick} id={this.props.id} className={`key ${this.props.color}`}></WhiteKey> :
            <BlackKey selected={this.state.selected} onClick={this.props.onClick} id={this.props.id} className={`key ${this.props.color}`}></BlackKey>;

    }
}

export default Key;