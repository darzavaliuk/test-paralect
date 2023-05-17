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
        fontWeight: 700,
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
}));

const NoContent = () => {
    const { classes } = useStyles();
    const router = useRouter();
    return (
        <Container>
            <Image src={"../Frame.svg"} className={classes.logo} />
            <Title style={{ textAlign: "center" }}>Упс, здесь еще ничего нет!</Title> <Group position="center">
                <Button

                    size="md"
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