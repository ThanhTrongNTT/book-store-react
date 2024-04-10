import React, { useState } from "react";
type ImageCustomProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

const DefaultImageSrc = "https://covers.openlibrary.org/b/id/12818862-M.jpg";
const ImageCustom = (props: ImageCustomProps) => {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // Hàm xử lý khi hình ảnh không tải được
  const handleImageLoadError = () => {
    setLoadError(true); // Đánh dấu rằng đã xảy ra lỗi khi tải ảnh
  };
  // Kiểm tra nếu đã xảy ra lỗi khi tải ảnh, sử dụng ảnh mặc định
  const imageSrc = loadError ? DefaultImageSrc : props.src;
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
        src={imageSrc}
        alt={props.alt}
        className={`h-90 w-48 object-cover rounded-md`}
        onLoad={() => setLoaded(true)}
        onError={handleImageLoadError}
      />
    </div>
  );
};

export default ImageCustom;
