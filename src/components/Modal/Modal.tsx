import React from "react";

const Modal = () => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          className="peer fixed appearance-none opacity-0"
        />

        <label
          htmlFor=""
          className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:scale-10"
        ></label>
      </div>
    </>
  );
};

export default Modal;
