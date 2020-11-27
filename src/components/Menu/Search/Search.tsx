import React, {useState, useEffect, FC} from 'react';
import cn from 'classnames';
import styles from './Search.module.css';

type PropsType = {}

const Search: FC<PropsType> = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchInput, setSearchInput] = useState<null | HTMLElement>(null);

    useEffect(() => {
        if (isExpanded && searchInput) {
            searchInput.focus();
        }
    }, [isExpanded])

    const unexpandInput = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest('.' + styles.search)) {
            setIsExpanded(false);
        }
    }

    const onButtonClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement
        let searchButton = target.closest('.' + styles.search__button) as HTMLElement;
        let searchInput = searchButton && searchButton.previousElementSibling as HTMLElement;
        document.addEventListener('click', unexpandInput);
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