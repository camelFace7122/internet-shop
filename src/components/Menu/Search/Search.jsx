import React, {useState, useEffect} from 'react';
import cn from 'classnames';
import styles from './Search.module.css';

const Search = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchInput, setSearchInput] = useState(null);

    useEffect(() => {
        if (isExpanded && searchInput) {
            searchInput.focus();
        }
    }, [isExpanded])

    const unexpandInput = (e) => {
        if (!e.target.closest('.' + styles.search)) {
            setIsExpanded(false);
        }
    }

    const onButtonClick = (e) => {
        document.addEventListener('click', unexpandInput);
        let searchButton = e.target.closest('.' + styles.search__button);
        let searchInput = searchButton.previousSibling;
        if (searchButton) { 
            if (!isExpanded) {
                setSearchInput(searchInput);
                setIsExpanded(true);
            }
            searchInput.focus();
        }
    }   
    return (
        <div className={cn(styles.search, { [styles.search__expanded]: isExpanded })}>
            <input className={styles.search__input} type="text" autoComplete="off" placeholder="Поиск" />
            <div className={styles.search__button} onClick={onButtonClick}>
                <div className={styles.search__button_logo}>
                </div>
            </div>
        </div>
    )
}

export default Search;