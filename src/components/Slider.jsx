import React from "react";
import dataPabrik from "../utility/dataPabrik";

const Slider = () => {
  const slides = [...dataPabrik, ...dataPabrik];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll gap-5">
        {slides.map((company, index) => (
          <div
            key={index} 
            className="flex-shrink-0 border-2 border-black rounded-lg p-4 w-[294px]"
          >
            <img
              src={company.img}
              alt={company.namaPerusahaan}
              className="w-full h-auto"
            />
            <div className="mt-4">
              <h2 className="text-lg font-bold">{company.namaPerusahaan}</h2>
              <p className="text-sm text-gray-600">
                Jumlah Pekerjaan: {company.jumlahPekerjaan}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
