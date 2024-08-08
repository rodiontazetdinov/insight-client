import { type FC } from "react";

interface FilterButtonsProps {
    onFilter: (filterBy: string) => void
}

export const FilterButtons: FC<FilterButtonsProps> = ({ onFilter }) => {
    return (
        <ul className="flex gap-1 p-2 flex-row flex-wrap">
            <li className="bg-sky-500  flex flex-col rounded-md  border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('Bot')}>Bot</button>
            </li>
            <li className="bg-rose-500  flex flex-col rounded-md border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('Frontend')}>Frontend</button>
            </li>
            <li className="bg-gray-900  flex flex-col rounded-md border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('Backend')}>Backend</button>
            </li>
            <li className="bg-yellow-300  flex flex-col rounded-md  border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('Blockchain')}>Blockchain</button>
            </li>

            <li className="bg-green-400  flex flex-col rounded-md border p-1">
                <button className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center" onClick={() => onFilter('Design')}>Design</button>
            </li>
        </ul>
    )
}