import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UnderConstructionBanner = () => {
  return (
    <div className="border-2 rounded m-4 p-4 border-orange-500 bg-orange-100 flex items-center gap-4">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        className="text-orange-500"
        height={20}
        width={20}
      />
      Demo project is currently under construction
    </div>
  );
};

export default UnderConstructionBanner;
