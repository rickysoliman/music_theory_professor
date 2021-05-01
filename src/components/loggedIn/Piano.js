import React, { Component } from 'react';
import styled from 'styled-components';
import Key from './Key';

const Board = styled.div`
    display: flex;
    box-shadow: 5px 10px;
`;

const Button = styled.button`
    border-radius: 10px;
    background-color: light-gray;
    border: 2px solid black;
    color: black;
    padding: 15px 32px;
    margin-top: 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`;

class Piano extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'C': false,
            'Db': false,
            'D': false,
            'Eb': false,
            'E': false,
            'F': false,
            'Gb': false,
            'G': false,
            'Ab': false,
            'A': false,
            'Bb': false,
            'B': false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.areAnySelected = this.areAnySelected.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    handleClick = e => {
        let note = e.target.id;
        let areAnySelected = this.areAnySelected();
        if (areAnySelected) {
            if (note === areAnySelected) {
                this.resetBoard(this.props.deselect);
            } else {
                this.resetBoard();
                this.setState({
                    [note]: true
                });
            }
        } else {
            this.setState({
                [note]: true
            });
        }

        this.props.onClick(note);
        let audio = document.getElementById(`${note}note`);
        audio.play();
    }

    areAnySelected = () => {
        for (let note in this.state) {
            if (this.state[note]) return note;
        }
        return false;
    }

    resetBoard = cb => {
        this.setState({
            'C': false,
            'Db': false,
            'D': false,
            'Eb': false,
            'E': false,
            'F': false,
            'Gb': false,
            'G': false,
            'Ab': false,
            'A': false,
            'Bb': false,
            'B': false
        }, cb);
    }

    handleSubmit() {
        this.resetBoard();
        this.props.submitAnswer();
    }

    render() {
        return (
            <>
                <Board>
                    <Key color={'white'} selected={this.state['C']} onClick={this.handleClick} id="C" className="key white"/>
                    <Key color={'black'} selected={this.state['Db']} onClick={this.handleClick} id="Db" className="key black"/>
                    <Key color={'white'} selected={this.state['D']} onClick={this.handleClick} id="D" className="key white"/>
                    <Key color={'black'} selected={this.state['Eb']} onClick={this.handleClick} id="Eb" className="key black"/>
                    <Key color={'white'} selected={this.state['E']} onClick={this.handleClick} id="E" className="key white"/>
                    <Key color={'white'} selected={this.state['F']} onClick={this.handleClick} id="F" className="key white"/>
                    <Key color={'black'} selected={this.state['Gb']} onClick={this.handleClick} id="Gb" className="key black"/>
                    <Key color={'white'} selected={this.state['G']} onClick={this.handleClick} id="G" className="key white"/>
                    <Key color={'black'} selected={this.state['Ab']} onClick={this.handleClick} id="Ab" className="key black"/>
                    <Key color={'white'} selected={this.state['A']} onClick={this.handleClick} id="A" className="key white"/>
                    <Key color={'black'} selected={this.state['Bb']} onClick={this.handleClick} id="Bb" className="key black"/>
                    <Key color={'white'} selected={this.state['B']} onClick={this.handleClick} id="B" className="key white"/>

                    <audio id="Cnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/C.mp3"></audio>
                    <audio id="Dbnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/Db.mp3"></audio>
                    <audio id="Dnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/D.mp3"></audio>
                    <audio id="Ebnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/Eb.mp3"></audio>
                    <audio id="Enote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/E.mp3"></audio>
                    <audio id="Fnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/F.mp3"></audio>
                    <audio id="Gbnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/Gb.mp3"></audio>
                    <audio id="Gnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/G.mp3"></audio>
                    <audio id="Abnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/Ab.mp3"></audio>
                    <audio id="Anote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/A.mp3"></audio>
                    <audio id="Bbnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/Bb.mp3"></audio>
                    <audio id="Bnote" src="https://rickyspianonotes.s3-us-west-1.amazonaws.com/B.mp3"></audio>
                </Board>
                {/* <Button onClick={this.resetAnswer}>Reset</Button> */}
                <Button onClick={this.handleSubmit}>Submit</Button>
            </>
        )
    }
}

export default Piano;