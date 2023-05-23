import React, { useState, useEffect } from 'react';
import { Select, Button, createStyles, Title, Text, CloseButton, NumberInput } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const FILTERS = 'Фильтры';
const RESET_ALL = 'Сбросить все';
const INDUSTRY = 'Отрасль';
const CHOOSE_INDUSTRY_PLACEHOLDER = 'Выберите отрасль';
const FROM_PLACEHOLDER = 'От';
const TO_PLACEHOLDER = 'До';
const SUBMIT = 'Применить';

const useStyles = createStyles((theme) => ({
    wrapper: {

        display: "flex",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #EAEBED",
        borderRadius: "12px",
        // width: "315px",

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column-reverse",
            padding: "5px",
        },
    },

    body: {

        // paddingRight: theme.spacing.xl * 4,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            padding: "5px",
        },

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 0,
            // padding: "5px",
            marginTop: theme.spacing.xl,
        },
    },

    title: {
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "20px",
        color: "#232134",
        marginBottom: "25px",
        // marginLeft: "9px",
        marginTop: "-7px",
    },

    controls: {
        display: "flex",
        marginTop: theme.spacing.xl,
    },

    inputWrapper: {
        width: "100%",
        flex: "1",
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },

    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },

    gridSimple: {
        display: "flex", justifyContent: "space-between",
        [`@media (max-width:  880px)`]: {
            display: "block",
        },

    },

    reset: {
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        marginTop: "18px",
        display: "flex",
        alignItems: "center",
        color: "#ACADB9",

        "&:hover": {
            color: 'rgba(94, 150, 252, 1)',
            cursor: "pointer",
        }
    },

    inputPlace: {
        height: "42px",
        width: "275px",

        // background: "#FFFFFF",
        /* Grey 300 */

        border: "1px solid #D5D6DC",
        borderRadius: "8px"
    },

    help: {
        padding: 0,
        display: "flex",
        justifyContent: "center", height: "360px"
    },

    button: {
        width: "275px",
        height: "40px",

        /* Blue Main 500 */

        background: "#5E96FC",
        borderRadius: "8px",
        color: "#FFF",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "14px",
        "&:hover": {
            background: "#92C1FF",
            cursor: "pointer",
        },
        "&:active": {
            background: "#3B7CD3",
            cursor: "pointer",
        }
    },

    vacanciesList: {
        padding: 0,
        width: "54vw",
        // gridColumn: '2',
        [`@media (max-width:  ${theme.breakpoints.md}px)`]: {
            width: "90%",
            gridColumn: '2',
        },
        [`@media (max-width:  ${theme.breakpoints.sm}px)`]: {
            width: "90%",
            gridColumn: '1'
        },

        [`@media (max-width:  580px)`]: {
            width: "320px",
        },
    },
}
))

function FilterPanel({ onParameterChange }) {

    let [valueFrom, setValueFrom] = useState();
    let [valueTo, setValueTo] = useState();
    let [category, setCategory] = useState()

    const handleChangeInputFrom = (newValue) => {
        setValueFrom(newValue);
    };

    const handleChangeInputTo = (newValue) => {
        setValueTo(newValue);
    };

    const buttonRef = React.useRef(null);

    React.useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.setAttribute('data-elem', 'search-button');
        }
    }, []);

    function handleClick() {
        onParameterChange({ category, valueFrom, valueTo })
    }

    const [data, setData] = useState(null);

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer v3.r.137440105.a077cda7bfea7618cc08cc357d86d8d77d1c5f2e.c094dc2135eaa978b177f9543a72a5ac0cbfcb57',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
        };
        fetch("https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/", { headers })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const styles = {

        input: {
            // borderColor: "blue",
            ':hover': {
                borderColor: "#5E96FC",
            },
        },

        rightSection: {
            borderTop: 'none',
            borderRight: 'none',
            borderBottom: 'none',
            borderLeft: 'none',
        },
      
    };

    const handleResetButton = () => {
        console.log("hi")
        setValueFrom("");
        setValueTo("");
        setCategory(-1);
        category = ""
        valueFrom = ""
        valueTo = ''
        onParameterChange({ category, valueFrom, valueTo })
    };

    const { classes } = useStyles();
    const selectRef = React.useRef(null);

    React.useEffect(() => {
        if (selectRef.current) {
            selectRef.current.setAttribute('data-elem', 'industry-select');
        }
    }, []);

    const numberInputRef = React.useRef(null);

    React.useEffect(() => {
        if (numberInputRef.current) {
            numberInputRef.current.setAttribute('data-elem', 'salary-from-input');
        }
    }, []);

    const numberInputRef2 = React.useRef(null);

    React.useEffect(() => {
        if (numberInputRef2.current) {
            numberInputRef2.current.setAttribute('data-elem', 'salary-to-input');
        }
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <div style={{ display: "flex", width: "100%" }}>
                    <Title className={classes.title}>{FILTERS}</Title>
                    <div onClick={handleResetButton} style={{
                        display: "flex",
                        marginBottom: "auto",
                        marginTop: "-23px",
                        marginRight: "0",
                        marginLeft: "auto"
                    }}>
                        <Text className={classes.reset}>{RESET_ALL}</Text>
                        <CloseButton style={{
                            marginBottom: "auto",
                            marginTop: "15px",
                            marginRight: "0",
                            marginLeft: "auto"
                        }} />
                    </div>
                </div>
                <Text weight={500} size="lg" mb={5}>{INDUSTRY}</Text>
                <Select
                    id="industry-select"
                    mb={20}
                    // pr={0}
                    placeholder={CHOOSE_INDUSTRY_PLACEHOLDER}
                    rightSection={<div style={{ paddingRight: "17px", paddingTop: "5px", }}>
                        {isOpen ? <IconChevronUp color='#5E96FC' /> : <IconChevronDown color='#ACADB9' />}
                    </div>}
                    onClick={handleToggle}
                    rightSectionWidth={30}
                    opened={isOpen}
                    value={category}
                    onChange={(category) => {
                        setCategory(category)
                        setIsOpen(false)
                    }}
                    data={data && Array.isArray(data) ? data.map(el => ({
                        value: el["key"],
                        label: el["title"]
                    }), { value: -1, label: `${CHOOSE_INDUSTRY_PLACEHOLDER}` }) : []}
                    ref={selectRef}
                    inputref={(node) => initialValue.current = node.value}
                    styles={() => ({
                        description: {
                            width: "267px",
                            wordWrap: "break-word",
                            overflowWrap: "anywhere",

                        },
                        input: {
                            paddingRight: "28px",
                            overflowX: "hidden",
                            '&:hover': {
                                borderColor: "#5E96FC",
                            }
                        },
                        item: {
                            whiteSpace: "initial",
                            '&[data-selected]': {
                                '&, &:hover': {
                                    backgroundColor: 'rgba(59, 124, 211, 1)',
                                    color: 'white'
                                }
                            },
                            '&[data-hovered]': {
                                backgroundColor: 'rgba(222, 236, 255, 1)',
                            },

                        },
                        rightSection: { pointerEvents: 'none' },
                    })}
                />

                <Text weight={500} size="lg" mb={5}>Оклад</Text>
                <NumberInput
                    id="salary-from-input"
                    style={{ minWidth: "275px", width: "100%" }}
                    // inputref={(node) => initialValue.current = node.value}
                    value={valueFrom}
                    placeholder={FROM_PLACEHOLDER}
                    onChange={handleChangeInputFrom}
                    mt={8}
                    styles={styles}
                    ref={numberInputRef}
                    min={0}
                />
                <NumberInput
                    id="salary-to-input"
                    mt={8}
                    mb={25}
                    placeholder={TO_PLACEHOLDER}
                    onChange={handleChangeInputTo}
                    value={valueTo}
                    inputref={(node) => initialValue.current = node.value}
                    styles={styles}
                    ref={numberInputRef2}
                    min={0}
                />
                <Button className={classes.button} onClick={handleClick} ref={buttonRef}>{SUBMIT}</Button>
            </div>
        </div>
    );
}

export default FilterPanel;