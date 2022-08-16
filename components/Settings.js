import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

function Settings() {
  return (
    <div className="flex relative dark:bg-main-dark-bg">
<div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
  <TooltipComponent content="Settings" postion="Top">
    <button
      type="button"
      className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
      style={{ background: "blue", borderRadius: "50%" }}
    >
      <FontAwesomeIcon icon={faGear} />
    </button>
  </TooltipComponent>
</div>
</div>
  )
}

export default Settings
