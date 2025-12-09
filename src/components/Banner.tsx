import React from "react";

export default function Banner({
  beforeTitle,
  title1,
  title2,
  subtitle,
}: {
  beforeTitle?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center bg">
      <h3 className="text-white text-xl md:text-2xl font-bold p-4">
        {beforeTitle}
      </h3>
      <h1 className="text-quaternary text-2xl md:text-4xl font-bold p-4">
        {title1}
      </h1>
      <h1 className="text-white text-2xl md:text-4xl font-bold p-4">
        {title2}
      </h1>
      <h3 className="text-white text-xl md:text-2xl font-bold p-4">
        {subtitle}
      </h3>
    </div>
  );
}
