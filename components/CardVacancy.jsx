import React, { useState, useEffect } from 'react';
import {
    createStyles,
    Text,
    Card,
} from "@mantine/core";
import { useRouter } from 'next/router';
import Star from './Star';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 34,
        fontWeight: 900,
        [theme.fn.smallerThan("sm")]: {
            fontSize: 24,
        },
    },

    description: {
        maxWidth: 770,


        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },

    card: {
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "24px",

        color: "#5E96FC",
        "&::after": {
            content: '""',
            display: "block",
        },
    },

    money: {
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "20px",
        color: "#232134"
    },

    workingHours: {
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
        color: "#232134"
    },

    help: {
        padding: 0,
    },
    logo: {
        maxWidth: 60,


    },
}));
const nullFunction = () => { };

const CardVacancy = ({ feature, onStarClick = nullFunction, isStarred }) => {

    const handleClick = (feature) => {
        router.push("/vacancies/" + feature.id);
    };

    const [filled, setFilled] = useState(false);

    useEffect(() => {
        const id = feature.id;
        const isFilled = localStorage.getItem(id);
        setFilled(!!isFilled);
    }, [feature.id]);

    const { classes, theme } = useStyles();
    const router = useRouter();
    return (
        <Card
            key={feature["profession"]}
            className={classes.card}
            p="24px"
            style={{
                border: "1px solid #EAEBED",
                borderRadius: "12px"
            }}
        >

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Text className={classes.cardTitle} onClick={() => handleClick(feature)} >
                    {feature["profession"]}
                </Text>
                <Star id={feature.id} onStarClick={onStarClick} isStarred={isStarred} />
            </div>
            <div style={{ display: "flex", marginTop: "12.5px" }}>
                {(feature["payment_from"] != 0 || feature["payment_to"] != 0) ?
                    (<><Text className={classes.money} >
                        {(feature["payment_from"] != 0 && feature["payment_to"] != 0) ? (<div style={{ display: "flex" }}><Text className={classes.money} style={{ marginRight: "4px" }}>з/п {feature["payment_from"]}</Text><Text className={classes.money} >-  {feature["payment_to"]}</Text></div>) : (<></>)}
                    </Text>

                        {(feature["payment_from"] != 0 && feature["payment_to"] == 0) ? (<div><Text className={classes.money} >з/п от {feature["payment_from"]}</Text></div>) : (<></>)}
                        {(feature["payment_from"] == 0 && feature["payment_to"] != 0) ? (<div><Text className={classes.money} style={{ marginRight: "4px" }}>з/п {feature["payment_to"]}</Text></div>) : (<></>)}

                        <Text className={classes.money} style={{ marginLeft: "2px" }}>
                            {feature["currency"]}
                        </Text><Text style={{ marginRight: "12px", marginLeft: "12px" }}>•</Text></>) : (<></>)}
                <Text className={classes.workingHours} >
                    {feature["type_of_work"]["title"]}
                </Text>
            </div>

            <div style={{ display: "flex", marginTop: "13px" }}>
                <img src={"../location.svg"} />
                <Text style={{ marginLeft: "11px" }} className={classes.money} >
                    {feature["town"]["title"]}
                </Text>
            </div>


        </Card>
    )
}

export default CardVacancy