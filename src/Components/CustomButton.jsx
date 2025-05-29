import React from "react";

const CustomButton = ({
  title = "default title",
  onClick,
  width = "auto",
  height = "2.7rem",
  color = "black",
  textColor = "white",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width, height, backgroundColor: color, color: textColor }}
      className="p-[0.2rem] pl-[1rem] pr-[1rem] gap-[0px] border-none rounded-[8px] Inter text-sm"
    >
      {title}
    </button>
  );
};

export default CustomButton;
