import { ImgHTMLAttributes, ReactNode } from "react";

type ImageType = ImgHTMLAttributes<"img"> & {
  src: ReactNode;
  className: ReactNode;
};

export const Image = ({ className, src, ...props }: ImageType) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" className={className} />;
};
