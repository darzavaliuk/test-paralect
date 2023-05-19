import { useRouter } from "next/router";
import {
  createStyles,
  Drawer,
  Stack,
  Button,
  Group,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    padding: theme.spacing.lg,
  },

  links: {
    paddingTop: theme.spacing.xl,
  },

  footer: {
    padding: theme.spacing.lg,
    textAlign: "center",
    paddingBottom: theme.spacing.lg * 3,
  },
}));

export default function DrawerMenu({
  opened,
  setOpened,
  mainLinks,
}) {
  const router = useRouter();
  const { classes } = useStyles();
  const links = mainLinks.map((link) => {
    return (
      <Button
        key={link.link}
        onClick={() => {
          console.log(link.link)
          router.push(link.link);
          setOpened(false);
        }}
        variant="subtle"
        color="gray"
        radius="xs"
        size={"md"}
        uppercase
      >
        {link.label}
      </Button>
    );
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Stack h={"100vh"} >
          <Group className={classes.header} position={"right"}>
          </Group>
          <Stack h={"100%"} justify={"space-between"}>
            <Stack spacing={0} className={classes.links}>
              {links}
            </Stack>

          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
