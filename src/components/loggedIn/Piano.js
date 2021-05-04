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

        // all notes will toggle their state when clicked
        // regardless of the state of the rest of the board

        // when a note is clicked, we have to check if 
        // any other notes have been previously clicked

        // if they have:
        if (areAnySelected) {
            // check if the number of selected notes is equal to
            // the selectionLimit
            // if we've reached the selectionLimit:
            if (areAnySelected.length === selectionLimit) {
                // reset the board
                // select note as selected
                this.resetBoard();
                this.setState({
                    [note]: true
                });
            // if we haven't reached the selectionLimit:
            } else {
                // toggle the state of the selected note
                this.setState({
                    [note]: !this.state[note]
                });
            };
        // if they have not:
        } else {
            // toggle the state of the selected note
            this.setState({
                [note]: !this.state[note]
            });
        };


















        // // note is equal to the note that was clicked
        // let note = e.target.id;
        // // selectionLimit is equal to the number of notes a user is allowed to select
        // let selectionLimit = this.props.selectionLimit;
        // // determines if any other notes have been previously selected (array of notes if true, false if false)
        // let areAnySelected = this.areAnySelected();
        // // if any notes have been selected
        // if (areAnySelected) {
        //     // if we've reached the selection limit, return out of function
        //     if (areAnySelected.length === selectionLimit) return null;
        //     // if the note that's been selected has already been previously selected
        //     if (areAnySelected.includes(note)) {
        //         // if it's the only note that's been selected
        //         if (areAnySelected.length === 1) {
        //             // reset the board
        //             this.resetBoard(this.props.deselect);
        //         // otherwise: the selected note has been previously selected along with at least one other note
        //         } else {
        //             // deselect just the selected note
        //             this.setState({ [note]: false });
        //             this.props.deselect();
        //         }
        //     // otherwise: the note that's been selected was not previously selected
        //     } else {
        //         this.resetBoard();
        //         this.setState({
        //             [note]: true
        //         });
        //     }
        // } else {
        //     this.setState({
        //         [note]: true
        //     });
        // }

        this.props.onClick(note);
        // let audio = document.getElementById(`${note}note`);
        // audio.play();
    }

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