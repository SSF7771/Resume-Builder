import React from 'react'

const TemplateCard = ({ thumbnailImg, isSelected, onSelect }) => {
  return <div 
    className={`h-auto md:h-[300px] flex flex-col items-center justify-between bg-white rounded-lg border border-gray-300 overflow-hidden cursor-pointer
        ${isSelected ? "border-purple-500 border-2" : ""}`}
        onClick={onSelect}
  >
    {thumbnailImg ? (
        <img src={thumbnailImg} className='w-[100vw] rounded' />
    ) : (
        <div></div>
    )}
  </div>
}

export default TemplateCard