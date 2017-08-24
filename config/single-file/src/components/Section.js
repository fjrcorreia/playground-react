import React, {Component} from 'react';
import Utils from '../scripts/utils';

export default class Section extends Component {

    render() {
        console.log("Render :: Section (" + Utils.getParent(this.props) + ")");
        console.log("Section :: Props => " + Utils.getLevelOne(this.props));

        const sectionLabel = (this.props.title ? this.props.title : "Unknown Content");
        return (
            <div className="app-section">
                <div className="app-section-label">
                    {sectionLabel}
                </div>
                <div className="app-section-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}