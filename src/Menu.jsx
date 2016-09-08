import React from 'React';

export default class Menu extends React.PureComponent {
    render() {
        const cells = [];
        this.props.menu.forEach((item, index) => {
            const cell = (
                <td 
                    className={this.props.selected === index ? 'active' : '' }
                    key={index} 
                    onClick={this.props.handler.bind(this,index)}
                >
                    {item}
                </td>
            );

            cells.push(cell);
        });

        return(
            <table>
                <tbody>
                    <tr>{cells}</tr>
                </tbody>
            </table>
        );
    }
}

Menu.propTypes = {
    handler: React.PropTypes.func.isRequired,
    menu: React.PropTypes.arrayOf(React.PropTypes.string),
    selected: React.PropTypes.number
};

Menu.defaultProps = {
    menu: [],
    selected: 0
};
