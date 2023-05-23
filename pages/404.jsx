import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    Group,
} from "@mantine/core";
import {useRouter} from "next/router";

const SECRET_PLACE_LABEL = 'You have found a secret place.';
const NOT_FOUND_LABEL = 'Unfortunately, this is only a 404 page. You may have mistyped the\n' +
    '                address, or the page has been moved to another URL.';
const BUTTON_LABEL = 'Take me back to home page';
const NOT_FOUND = '404';

const useStyles = createStyles(() => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: "center",
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,

    },

    title: {

        textAlign: "center",
        fontWeight: 900,
        fontSize: 38,

    },

    description: {
        maxWidth: 500,
        margin: "auto",
    },
}));

export default function NotFound() {
    const {classes} = useStyles();
    const router = useRouter();

    return (
        <Container className={classes.root}>
            <div className={classes.label}>{NOT_FOUND}</div>
            <Title className={classes.title}>{SECRET_PLACE_LABEL}</Title>
            <Text
                color="dimmed"
                size="lg"
                align="center"
                className={classes.description}
            >
                {NOT_FOUND_LABEL}
            </Text>
            <Group position="center">
                <Button
                    radius={"lg"}
                    size="md"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    {BUTTON_LABEL}
                </Button>
            </Group>
        </Container>
    );
}
