import React, { useState, useEffect } from 'react';
import {
    createStyles,
    Text,
    Card,
} from "@mantine/core";
import { useRouter } from 'next/router';
import Star from './Star';
import locationSVG from '../public/location.svg'
import pointSVG from '../public/point.svg';
import NotFoundImg from '../public/frame.svg';
import Image from "next/image";

const SALARY = 'з/п';
const MINUS = '-';
const FROM = 'от';

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

        "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
        },

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
const nullFunction = () => {
};

const CardVacancy = ({ feature, onStarClick = nullFunction, isStarred }) => {

    const router = useRouter();

    const handleClick = async (feature) => {
        await router.push("/vacancies/" + feature.id);
    };

    const [filled, setFilled] = useState(false);

    useEffect(() => {
        const id = feature.id;
        const isFilled = localStorage.getItem(id);
        setFilled(!!isFilled);
    }, [feature.id]);

    const { classes } = useStyles();
    return (
        <Card
            data-elem={`vacancy-${feature["id"]}`}
            key={feature["profession"]}
            className={classes.card}
            p="24px"
            style={{
                border: "1px solid #EAEBED",
                borderRadius: "12px"
            }}
        >

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Text className={classes.cardTitle} onClick={() => handleClick(feature)}>
                    {feature["profession"]}
                </Text>
                <Star id={feature.id} onStarClick={onStarClick} isStarred={isStarred} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: "12.5px" }}>
                {(feature["payment_from"] !== 0 || feature["payment_to"] !== 0) ?
                    (<><Text className={classes.money}>
                        {(feature["payment_from"] !== 0 && feature["payment_to"] !== 0) ? (
                            <div style={{ display: "flex", textAlign:  "center" }}><Text className={classes.money}
                                style={{ marginRight: "4px" }}>{SALARY}</Text><Text className={classes.money}
                                    style={{ marginRight: "4px" }}>{feature["payment_from"]}</Text><Text className={classes.money}
                                        style={{ marginRight: "4px" }}>{MINUS}</Text><Text
                                            className={classes.money}>{feature["payment_to"]}</Text></div>) : (<></>)}
                    </Text>

                        {(feature["payment_from"] !== 0 && feature["payment_to"] === 0) ? (
                            <div><Text className={classes.money}>{SALARY} {FROM} {feature["payment_from"]}</Text>
                            </div>) : (<></>)}
                        {(feature["payment_from"] === 0 && feature["payment_to"] !== 0) ? (
                            <div><Text className={classes.money}
                                style={{ marginRight: "4px" }}>{SALARY} {feature["payment_to"]}</Text>
                            </div>) : (<></>)}

                        <Text className={classes.money} style={{ marginLeft: "2px" }}>
                            {feature["currency"]}
                        </Text>
                        <Image
                            src={pointSVG}
                            alt={'dot'}
                            style={{ marginRight: "12px", marginLeft: "12px" }} /></>) : (<></>)}
                <Text className={classes.workingHours}>
                    {feature["type_of_work"]["title"]}
                </Text>
            </div>

            <div style={{ display: "flex", marginTop: "13px" }}>
                <Image
                    src={locationSVG}
                    alt={"location"}
                />
                <Text style={{ marginLeft: "11px" }} className={classes.money}>
                    {feature["town"]["title"]}
                </Text>
            </div>
        </Card>
    )
}

export default CardVacancy