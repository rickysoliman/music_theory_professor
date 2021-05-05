import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultState from './DefaultPianoState';
import Key from './Key';

const Board = styled.div`
    display: flex;
    box-shadow: 5px 10px;
    border-radius: 5px;
    width: 50%;
    height: 10%;
    z-index: 9;
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
    z-index: 9;
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

        this.state = DefaultState

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.areAnySelected = this.areAnySelected.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    handleClick = e => {
        let id = e.target.id, note, octave;
        note = id.includes('♭') ? id.slice(0, 2) : id[0];
        octave = id[id.length - 1];

        let audioId = `${note}${octave}note`;
        let audio = document.getElementById(audioId);
        audio.play();

        if (this.state[id]) return null;

        let selectionLimit = this.props.selectionLimit,
            areAnySelected = this.areAnySelected();

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
        this.setState({ [id]: true });

        this.props.onClick(note);
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
        this.setState(DefaultState, cb);
    }

    handleSubmit() {
        this.resetBoard();
        this.props.submitAnswer();
    }

    render() {
        return (
            <>
                <Board>
                    <Key position={'start'} color={'white'} selected={this.state['C1']} onClick={this.handleClick} id="C1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['D♭1']} onClick={this.handleClick} id="D♭1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['D1']} onClick={this.handleClick} id="D1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['E♭1']} onClick={this.handleClick} id="E♭1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['E1']} onClick={this.handleClick} id="E1" className="key white"/>
                    <Key position={null} color={'white'} selected={this.state['F1']} onClick={this.handleClick} id="F1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['G♭1']} onClick={this.handleClick} id="G♭1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['G1']} onClick={this.handleClick} id="G1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['A♭1']} onClick={this.handleClick} id="A♭1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['A1']} onClick={this.handleClick} id="A1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['B♭1']} onClick={this.handleClick} id="B♭1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['B1']} onClick={this.handleClick} id="B1" className="key white"/>
                    <Key position={null} color={'white'} selected={this.state['C2']} onClick={this.handleClick} id="C2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['D♭2']} onClick={this.handleClick} id="D♭2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['D2']} onClick={this.handleClick} id="D2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['E♭2']} onClick={this.handleClick} id="E♭2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['E2']} onClick={this.handleClick} id="E2" className="key white" />
                    <Key position={null} color={'white'} selected={this.state['F2']} onClick={this.handleClick} id="F2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['G♭2']} onClick={this.handleClick} id="G♭2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['G2']} onClick={this.handleClick} id="G2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['A♭2']} onClick={this.handleClick} id="A♭2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['A2']} onClick={this.handleClick} id="A2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['B♭2']} onClick={this.handleClick} id="B♭2" className="key black" />
                    <Key position={'end'} color={'white'} selected={this.state['B2']} onClick={this.handleClick} id="B2" className="key white" />

                    <audio id="C1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/C1.mp3"></audio>
                    <audio id="D♭1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Db1.mp3"></audio>
                    <audio id="D1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/D1.mp3"></audio>
                    <audio id="E♭1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Eb1.mp3"></audio>
                    <audio id="E1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/E1.mp3"></audio>
                    <audio id="F1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/F1.mp3"></audio>
                    <audio id="G♭1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Gb1.mp3"></audio>
                    <audio id="G1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/G1.mp3"></audio>
                    <audio id="A♭1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Ab1.mp3"></audio>
                    <audio id="A1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/A1.mp3"></audio>
                    <audio id="B♭1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Bb1.mp3"></audio>
                    <audio id="B1note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/B1.mp3"></audio>
                    <audio id="C2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/C2.mp3"></audio>
                    <audio id="D♭2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Db2.mp3"></audio>
                    <audio id="D2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/D2.mp3"></audio>
                    <audio id="E♭2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Eb2.mp3"></audio>
                    <audio id="E2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/E2.mp3"></audio>
                    <audio id="F2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/F2.mp3"></audio>
                    <audio id="G♭2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Gb2.mp3"></audio>
                    <audio id="G2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/G2.mp3"></audio>
                    <audio id="A♭2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Ab2.mp3"></audio>
                    <audio id="A2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/A2.mp3"></audio>
                    <audio id="B♭2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/Bb2.mp3"></audio>
                    <audio id="B2note" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/pianoNotes/B2.mp3"></audio>
                </Board>
                <Button clickable={this.areAnySelected().length === this.props.selectionLimit} onClick={this.handleSubmit}>Submit</Button>
            </>
        )
    }
}

export default Piano;