import axios from 'axios';
import React, { Component } from 'react';

const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

// Card
export class Card extends Component {
    render() {
        return (
            <div className="github-profile">
                <img alt="avatar" src={this.props.avatar_url} />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        );
    }
}

// List of cards 
const CardList = (props) => {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    );
};


export class Form extends Component {
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(response.data);
        this.setState({ userName: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} onChange={(event) => this.setState({
                    userName: event.target.value
                })} placeholder="Github Username" required />
                <button>Add Card</button>
            </form>
        );
    }
}

export default class GitHub extends Component {
    state = {
        profiles: testData
    };

    addNewUserProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    };

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewUserProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}