import React, { useState } from 'react';


const SwipeableCheckbox = () => {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked);
    };

    return (
        <div className={`checkbox-container ${checked ? 'checked' : ''}`} onClick={handleToggle}>
            <div className="switch"></div>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleToggle}
                style={{ display: 'none' }} // Скрываем стандартный чекбокс
            />
        </div>
    );
};

export default SwipeableCheckbox;