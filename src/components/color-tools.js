import * as React from 'react';

import { ToolHeader } from './tool-header';
import { UnorderedList } from './unordered-list';
import { ColorForm } from './color-form';
import * as PropTypes from 'prop-types';

export class ColorTool extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { colors: props.colors.concat() };
  }

  saveColor = (newColor) => {
    this.setState({ colors: this.state.colors.concat(newColor) });
  }

  render() {
    return <div>
      {/* <ToolHeader headerText="Color Tool" /> */}
      <ToolHeader />
      <UnorderedList listItems={this.state.colors.map(c => c.name)} />
      <ColorForm onSubmitColor={this.saveColor} />
    </div>;
  }
}