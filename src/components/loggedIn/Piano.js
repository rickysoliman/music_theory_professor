import React, { Component } from 'react';
import styled from 'styled-components';
import Key from './Key';

const Board = styled.div`
    display: flex;
    box-shadow: 5px 10px;
    border-radius: 5px;
`;

const Button = styled.button`
    float: right;
    color: ${props => props.clickable ? '#f7ecdb' : '#cccccc'};
    background-color: ${props => props.clickable ? '#1a1515' : 'light-grey'};
    text-decoration: ${props => props.clickable ? 'none' : 'line-through'};
    border-radius: 5px;
    border: transparent;
    padding: 20px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    transition: box-shadow 0.25s;
    margin: 20px;
    ${props => props.clickable ? `
        &:hover {
            cursor: pointer;
            text-decoration: ${props => props.clickable ? 'underline' : 'line-through'};
            box-shadow: 5px 5px 5px black;
        }
    ` : ''}
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
        let selectionLimit = this.props.selectionLimit;
        let areAnySelected = this.areAnySelected();

        if (selectionLimit > 1) {
            if (areAnySelected) {
                if (areAnySelected.includes(note)) return null;
                if (areAnySelected.length === selectionLimit) {
                    this.resetBoard(() => this.props.deselect(note));
                };
            };
        } else {
            if (areAnySelected) {
                this.resetBoard(() => this.props.deselect(note));
            };
        };
        this.setState({ [note]: true });

        this.props.onClick(note);
        let audio = document.getElementById(`${note}note`);
        audio.play();
    };

    areAnySelected = () => {
        let selectedNotes = [];
        let notes = Object.keys(this.state);
        for (let i = 0; i < notes.length; i++) {
            let note = notes[i];
            if (this.state[note]) selectedNotes.push(note);
        }
        return selectedNotes.length > 0 ? selectedNotes : false;
    };

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
                <Button clickable={this.areAnySelected().length === this.props.selectionLimit} onClick={this.handleSubmit}>Submit</Button>
            </>
        )
    }
}

export default Piano;