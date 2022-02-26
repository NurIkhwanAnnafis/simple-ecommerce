import React, { useContext } from "react";
import { ContextApp } from "../../context/app/app-context-provider";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

const Directory = () => {
  const context = useContext(ContextApp);
  const {
    sections
  } = context.directoryContext;

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory;