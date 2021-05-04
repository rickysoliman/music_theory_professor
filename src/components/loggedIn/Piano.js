import React, { Component } from 'react';
import styled from 'styled-components';
import Key from './Key';

const Board = styled.div`
    display: flex;
    box-shadow: 5px 10px;
    border-radius: 5px;
    width: 50%;
    height: 10%;
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
            'C1': false,
            'Db1': false,
            'D1': false,
            'Eb1': false,
            'E1': false,
            'F1': false,
            'Gb1': false,
            'G1': false,
            'Ab1': false,
            'A1': false,
            'Bb1': false,
            'B1': false,
            'C2': false,
            'Db2': false,
            'D2': false,
            'Eb2': false,
            'E2': false,
            'F2': false,
            'Gb2': false,
            'G2': false,
            'Ab2': false,
            'A2': false,
            'Bb2': false,
            'B2': false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.areAnySelected = this.areAnySelected.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    handleClick = e => {
        let id = e.target.id, note;
        note = id.includes('b') ? id.slice(0,2) : id[0];
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
        this.setState({ [id]: true });

        this.props.onClick(note);
        // let audio = document.getElementById(`${note}note`);
        // audio.play();
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
            'C1': false,
            'Db1': false,
            'D1': false,
            'Eb1': false,
            'E1': false,
            'F1': false,
            'Gb1': false,
            'G1': false,
            'Ab1': false,
            'A1': false,
            'Bb1': false,
            'B1': false,
            'C2': false,
            'Db2': false,
            'D2': false,
            'Eb2': false,
            'E2': false,
            'F2': false,
            'Gb2': false,
            'G2': false,
            'Ab2': false,
            'A2': false,
            'Bb2': false,
            'B2': false
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
                    <Key position={'start'} color={'white'} selected={this.state['C1']} onClick={this.handleClick} id="C1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['Db1']} onClick={this.handleClick} id="Db1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['D1']} onClick={this.handleClick} id="D1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['Eb1']} onClick={this.handleClick} id="Eb1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['E1']} onClick={this.handleClick} id="E1" className="key white"/>
                    <Key position={null} color={'white'} selected={this.state['F1']} onClick={this.handleClick} id="F1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['Gb1']} onClick={this.handleClick} id="Gb1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['G1']} onClick={this.handleClick} id="G1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['Ab1']} onClick={this.handleClick} id="Ab1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['A1']} onClick={this.handleClick} id="A1" className="key white"/>
                    <Key position={null} color={'black'} selected={this.state['Bb1']} onClick={this.handleClick} id="Bb1" className="key black"/>
                    <Key position={null} color={'white'} selected={this.state['B1']} onClick={this.handleClick} id="B1" className="key white"/>
                    <Key position={null} color={'white'} selected={this.state['C2']} onClick={this.handleClick} id="C2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['Db2']} onClick={this.handleClick} id="Db2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['D2']} onClick={this.handleClick} id="D2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['Eb2']} onClick={this.handleClick} id="Eb2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['E2']} onClick={this.handleClick} id="E2" className="key white" />
                    <Key position={null} color={'white'} selected={this.state['F2']} onClick={this.handleClick} id="F2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['Gb2']} onClick={this.handleClick} id="Gb2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['G2']} onClick={this.handleClick} id="G2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['Ab2']} onClick={this.handleClick} id="Ab2" className="key black" />
                    <Key position={null} color={'white'} selected={this.state['A2']} onClick={this.handleClick} id="A2" className="key white" />
                    <Key position={null} color={'black'} selected={this.state['Bb2']} onClick={this.handleClick} id="Bb2" className="key black" />
                    <Key position={'end'} color={'white'} selected={this.state['B2']} onClick={this.handleClick} id="B2" className="key white" />

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