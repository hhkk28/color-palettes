import React, { Component } from "react";
import ColorBox from "./ColorBox";
import InputSlider from "./InputSlider/InputSlider";
import "../styles/PaletteView.css";

class PaletteView extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorsList = colors[level].map((color) => (
      <ColorBox
        background={color.hex}
        name={color.name}
        key={`${color.name}-${color.color}`}
      />
    ));
    return (
      <div className='paletteview'>
        <InputSlider level={level} changeLevel={this.changeLevel} />
        <div className='colors-container'> {colorsList}</div>
      </div>
    );
  }
}

export default PaletteView;
