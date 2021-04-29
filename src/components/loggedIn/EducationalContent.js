import { React, Component } from 'react';
import NavigationButton from './NavigationButton';
import Quizzes from './quizzes/Quizzes';
import Courses from './courses/Courses';

class EducationalContent extends Component {
    constructor() {
        super();
        this.state = {
            selection: null
        };

        this.handleSelection = this.handleSelection.bind(this);
        this.back = this.back.bind(this);
    }

    handleSelection(e) {
        let selection = e.target.id;
        console.log(selection);
        this.setState({ selection });
    }

    back() {
        this.setState({
            selection: null
        });
    }

    render() {
        if (!this.state.selection) {
            return (
                <div id="educationalContentWindow">
                    <NavigationButton handleSelection={this.handleSelection} type='Quizzes'/>
                    <NavigationButton handleSelection={this.handleSelection} type='Courses'/>
                </div>
            )
        } else if (this.state.selection === 'Quizzes') {
            return (
                <div id="educationalContentWindow">
                    <Quizzes back={this.back}/>
                </div>
            )
        } else if (this.state.selection === 'Courses') {
            return (
                <div id="educationalContentWindow">
                    <Courses back={this.back}/>
                </div>
            )
        }
    }
};

export default EducationalContent;