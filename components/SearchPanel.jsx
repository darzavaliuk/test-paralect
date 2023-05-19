import React, { useState } from 'react';
import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';


function SearchPanel({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value)
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
        <div style={{ position: 'relative', height: "48px" }}>
            <Input placeholder="Введите название вакансии" value={searchTerm}
                onChange={handleSearchTermChange}
                ref={inputRef}
                icon={<IconSearch />} size="lg" style={{
                    fontАamily: "Inter",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "21px",
                }} />
            <Button onClick={handleSearch}
            ref={buttonRef}
                style={{
                    top: '5px',
                    position: 'absolute',
                    right: '12px',
                    top: '8px',
                    height: '32px',
                    width: '83px',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    background: "#5E96FC",
                    borderRadius: "8px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    '&:hover': {
                        background: '#4c8300',
                        // color: '#fff',
                      },
                }}
            >Поиск</Button>
        </div>
    );
}

export default SearchPanel;