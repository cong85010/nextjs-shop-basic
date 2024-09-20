import React from "react";

export default function Title({
  title,
  subTitle,
  right = <></>,
  left = <></>,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex w-full md:w-1/5">{left}</div>
      <div className="flex-1 ">
        <div className="flex-1 text-2xl md:text-[48px] font-bold text-center">
          {title}
        </div>
        <div className="text-base text-center mt-4">{subTitle}</div>
      </div>
      <div className="flex w-full md:w-1/5 justify-end">{right}</div>
    </div>
  );
}
