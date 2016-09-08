import React from 'react';

import Menu from './Menu.jsx';
import Content from './Content.jsx';

const config = require('../config.json');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            week: (config.weeks.length -1)
        };
        
        this.selectWeek = this.selectWeek.bind(this);
    }
    
    selectWeek(index) {
        this.setState({week: index});
    }
    
    render() {
        const menues = config.weeks.map((item) => item.menu);
        const content = config.weeks[this.state.week].content;

        return (
            <div>
                <Menu
                    handler={this.selectWeek}
                    selected={this.state.week}
                    menu={menues}
                />
                <Content 
                    content={content}
                />
            </div>
        );
    }
}
