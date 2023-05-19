import React from 'react'
import {
    createStyles,
    Container,
    Group,
    Image,
    Button,
    Title
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles(() => ({
    footer: {
        marginTop: 40,
    },

    logo: {
        maxWidth: 240,
        margin: 'auto',
        marginTop: "120px",


    },

    description: {
        maxWidth: 200,
        textAlign: "justify",

    },

    inner: {
        display: "flex",
        justifyContent: "space-between",


    },

    groups: {
        display: "flex",
        flexWrap: "wrap",


    },

    wrapper: {
        width: 160,
    },

    link: {
        display: "block",
        paddingTop: 3,
        paddingBottom: 3,
        textDecoration: "none",
        cursor: "pointer",

        "&:hover": {
            textDecoration: "underline",
        },
    },

    title: {
        fontFamily: "Inter'",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "29px",
        /* Gray/Gray 900 */

        color: "#343A40",
        marginBottom: "32px"
    },

    afterFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    logoWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    button: {
        padding: "10px 24px",
        // gap: "10px",

        width: "164px",
        height: "42px",

        /* Blue 100 */

        background: "#DEECFF",
        borderRadius: "8px",
        fontFamily: "Open Sans",
fontWeight: "600",
fontSize: "14px",
lineHeight: "155%",
/* identical to box height, or 22px */


/* Blue 600 */

color: "#3B7CD3",
"&:hover": {
    background: "#92C1FF",
    cursor: "pointer",
},
"&:active": {
    background: "#3B7CD3",
    cursor: "pointer",
}
}
}));

const NoContent = () => {
    const { classes } = useStyles();
    const router = useRouter();
    return (
        <Container>
            <Image src={"../Frame.svg"} className={classes.logo} mb={32} />
            <Title style={{ textAlign: "center" }} mb={32} className={classes.title}>Упс, здесь еще ничего нет!</Title> <Group position="center">
                <Button
                    mt={32}
                    size="md"
                    className={classes.button}
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Поиск Вакансий
                </Button>
            </Group>
        </Container>
    )
}

export default NoContent