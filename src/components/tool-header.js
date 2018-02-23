import * as React from "react";
import * as PropType from 'prop-types';

export const ToolHeader = props => 
    <header>
        <h1>{props.headerText}</h1>
    </header>

ToolHeader.PropType = {
    headerText: PropType.string
}

ToolHeader.defaultProps = {
    headerText: "This is Default"
  }

