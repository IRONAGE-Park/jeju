import React from 'react';
import { Link } from 'react-router-dom';

export default ({ onClick, item, language }) => {
    const selectEffect = item.checked ? 'on' : '';

    return (
        <li>
            <Link to={item.path} className={selectEffect} onClick={() => onClick(item.id)}>
                {language === 'en'
                    ? item.en
                    : language === 'ch'
                    ? item.ch
                    : language === 'ja'
                    ? item.ja
                    : item.ko}
            </Link>
        </li>
    );
};
