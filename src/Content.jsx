import React from 'react';
import ReactMakdown from 'react-markdown';

export default class Content extends React.PureComponent {    
    render() {
        const decodedContent = atob(this.props.content);
        return (<ReactMakdown source={decodedContent} />);
    }
}

Content.propTypes  = {
    content: React.PropTypes.string 
};

Content.defaultProps = {
    content: '**No content available yet.**'
};
