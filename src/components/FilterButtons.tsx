import { type FC } from "react";

interface FilterButtonsProps {
    onFilter: (filterBy: string) => void
}

const buttons = [
    { label: 'Bot', color: 'bg-sky-500' },
    { label: 'Frontend', color: 'bg-rose-500' },
    { label: 'Backend', color: 'bg-gray-900' },
    { label: 'Blockchain', color: 'bg-yellow-300' },
    { label: 'Design', color: 'bg-green-400' },
    { label: 'All', color: 'bg-green-400' } // Возможно, здесь должен быть другой цвет
];

export const FilterButtons: FC<FilterButtonsProps> = ({ onFilter }) => {
    return (
        <ul className="flex gap-1 p-2 flex-row flex-wrap">
            {buttons.map((button) => (
                <li key={button.label} className={`${button.color} flex flex-col rounded-md border p-1`}>
                    <button
                        className="p-1 text-[18px] font-bold text-white flex items-center gap-2 w-full h-full justify-center"
                        onClick={() => onFilter(button.label)}
                    >
                        {button.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}