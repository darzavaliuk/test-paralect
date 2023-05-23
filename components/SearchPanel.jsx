import React, {useState} from 'react';
import {Input, Button} from '@mantine/core';
import {IconSearch} from '@tabler/icons-react';

const SEARCH = 'Поиск';
const ENTER_VACANCY_PLACEHOLDER = 'Введите название вакансии';

function SearchPanel({onSearch}) {
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

    return (
        <div style={{position: 'relative', height: "48px"}}>
            <Input placeholder={ENTER_VACANCY_PLACEHOLDER} value={searchTerm}
                   onChange={handleSearchTermChange}
                   ref={inputRef}
                   icon={<IconSearch/>} size="lg" style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "21px",
            }}/>
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