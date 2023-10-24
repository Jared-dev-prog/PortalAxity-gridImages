import * as React from "react";

const CardImage: React.FC<any> = (props) => {
  return (
    <div>
      {props.label}{" "}
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
};

export default CardImage;
