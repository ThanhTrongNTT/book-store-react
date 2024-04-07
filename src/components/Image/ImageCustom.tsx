import React, { useState } from "react";
type ImageCustomProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
};
const ImageCustom = (props: ImageCustomProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      {loaded ? null : (
        <div className="h-full flex justify-center items-center content-center">
          <div
            className={`border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600`}
          />
        </div>
      )}
      <img
        src={props.src}
        alt={props.alt}
        className={`h-90 w-48 object-cover rounded-md`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageCustom;
