import React, { useState } from 'react';
import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SEARCH = 'Поиск';
const ENTER_VACANCY_PLACEHOLDER = 'Введите название вакансии';

function SearchPanel({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setAttribute('data-elem', 'search-input');
        }
    }, []);

    const buttonRef = React.useRef(null);

    React.useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.setAttribute('data-elem', 'search-button');
        }
    }, []);


    const styles = {
        input: {
            fontFamily: 'Inter',
            display: "block",
            fontWeight: 400,
            fontSize: '14px',
            height: '48px',
            ":hover": {
                borderColor: "#5E96FC"
            }
        },
    };

    return (
        <div style={{ position: 'relative', height: "48px", }}>
            <Input placeholder={ENTER_VACANCY_PLACEHOLDER} value={searchTerm}
                onChange={handleSearchTermChange}
                ref={inputRef}
                className='inputStyle'
                styles={styles}
                icon={<IconSearch height={15}/>} />
            <Button
                onClick={handleSearch}
                ref={buttonRef}
                className='btn'
            >
                {SEARCH}
            </Button>
        </div>
    );
}

export default SearchPanel;