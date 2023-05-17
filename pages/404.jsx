import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import { useRouter } from "next/router";

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
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position="center">
        <Button
          radius={"lg"}
          size="md"
          onClick={() => {
            router.push("/");
          }}
        >
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
