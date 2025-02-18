import { ReactNode } from "react";

interface IconButtonProps{
    children: ReactNode
}

function IconeButton(props: IconButtonProps){
    return (
        <button className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300 flex justify-between items-center">
            {props.children}
        </button>
    )
}

export default IconeButton