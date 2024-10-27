import React from 'react'

export const Options = ({ image }) => {
    return (
        <div className="flex p-2 flex-col items-start justify-center bg-slate-200 rounded-[5px] text-[12px]">
            <button className=" text-black p-1 rounded focus:outline-none flex items-center text-nowrap hover:bg-slate-300 w-full">
                🗑️ Delete
            </button>
            <button className=" text-black p-1 rounded focus:outline-none flex items-center text-nowrap hover:bg-slate-300 w-full">
                ✏️ Edit
            </button>
            <a href={image.urls.regular} download className=" text-black p-1 rounded  focus:outline-none flex items-center text-nowrap hover:bg-slate-300 w-full">
                ⬇️ Download
            </a>
        </div>
    )
}
