import React from "react";
import { sections } from "../../data/directory.data";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: sections
    };
  }

  render() {
    const { sections } = this.state;
    return(
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory;