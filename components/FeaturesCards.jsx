import {
    createStyles,
    Card,
    SimpleGrid,
    Container,
} from "@mantine/core";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import CardVacancy from "./CardVacancy";

const useStyles = createStyles(() => ({
    title: {
        fontSize: 34,
        fontWeight: 900,
    },

    description: {
        maxWidth: 770,


        "&::after": {
            content: '""',
            display: "block",
            width: 45,
            height: 2,
            marginLeft: "auto",
            marginRight: "auto",
        },
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

export default function FeaturesCards() {
    const {classes} = useStyles();
    const [data, setData] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer v3.r.137440105.a077cda7bfea7618cc08cc357d86d8d77d1c5f2e.c094dc2135eaa978b177f9543a72a5ac0cbfcb57',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
        };
        let req = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/" + router.asPath.substr(11) + "/";
        fetch(req, {headers})
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error(error));
    }, []);


    return (
        <Container size="773px" className={classes.help}>
            {data ? (
                <div>
                    <SimpleGrid
                        mt={16}
                        cols={1}
                        breakpoints={[{maxWidth: "md", cols: 1}]}
                    >
                        <CardVacancy feature={data}/>

                        <Card className="container"
                              p="24px"
                              style={{
                                  border: "1px solid #EAEBED",
                                  borderRadius: "12px"
                              }}>
                            <div dangerouslySetInnerHTML={{__html: data["vacancyRichText"]}}></div>
                        </Card>
                    </SimpleGrid>

                </div>
            ) : (
                <></>
            )}
        </Container>
    );
}
