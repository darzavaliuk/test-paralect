import { useEffect, useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  MediaQuery,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import DrawerMenu from "./DrawerMenu.jsx";
import Logo from "./Logo";

const mainLinks = [
  {
    link: "/vacancies",
    label: "Поиск Вакансий",
  },
  {
    link: "/favourite",
    label: "Избранное",
  },

];

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: "none",
    backgroundColor: "",
    padding: "0px !important",
    display: "flex",
    justifyContent: "space-between",
  },

  inner: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "-61px",
    marginRight: "auto",
    justifyContent: "end",
    [theme.fn.largerThan("sm")]: {
      marginLeft: 0,
      justifyContent: "space-around",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    // paddingTop: 16,
    marginLeft: "-63px",
    [theme.fn.largerThan("md")]: {
      // paddingTop: 36,

    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  mainLink: {
    textDecoration: "none",
    // textTransform: "uppercase",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
    /* identical to box height, or 125% */

    /* Black */

    color: "#232134",
    marginRight: "60px",


    [theme.fn.largerThan("md")]: {
      fontSize: "16px",
    },
  },

  mainLinkActive: {
    color: "#5E96FC",
  },

  link: {
    textDecoration: "none",
  },
}));

export default function HeaderNavigation() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    setActive(currentPath.includes("/vacancies") ? "/vacancies" : currentPath);
  }, [router.pathname, setActive]);

  const mainItems = mainLinks.map((item, index) => (
    <Link
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: item.link === active,
      })}
    >
      {item.label}
    </Link>
  ));

  return (
    <Header height={ 84 } p="md" className={classes.header}>
      <Logo />
      <DrawerMenu opened={opened} setOpened={toggle} mainLinks={mainLinks} />
      <Container className={classes.inner}>
        <div className={classes.links}>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </MediaQuery>
      </Container>
    </Header>
  );
}
