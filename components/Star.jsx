import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon';

function Star(props) {
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        const id = props.id;
        const isFilled = localStorage.getItem(id);
        setFilled(isFilled);
    }, [props.id]);

    const handleClick = () => {
        const id = props.id;
        const onStarClick  = props.onStarClick; 
        const isStarred = props.isStarred;
        onStarClick();
        if (filled) {
            localStorage.removeItem(id);
            setFilled(false);
        } else {
            localStorage.setItem(id, 'true');
            setFilled(true);
        }
    };

    return (
        <div
            className="star"
            onClick={handleClick}
            data-elem={`vacancy-${props.id}-shortlist-button`}
        >
            <StarIcon filled={filled} />
        </div>
    );
}

export default Star;