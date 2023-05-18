import { createStyles, Container } from "@mantine/core";
import { useState } from "react";
import { SimpleGrid } from '@mantine/core';
import RequestComponent from './RequestComponent';
import FilterPanel from "./FilterPanel";

const useStyles = createStyles((theme) => ({
  wrapper: {

    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderRadius: theme.radius.md,
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
    /* identical to box height, or 143% */
    marginTop: "18px",
    display: "flex",
    alignItems: "center",

    /* Grey 500 */

    color: "#ACADB9",
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
    fontSize: "14px"
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


export default function JobSearch() {
  let [parameter, setParameter] = useState();

  function handleParameterChange(newParameter) {
    setParameter(newParameter);
  }

  const { classes } = useStyles();
  
  return (
    <SimpleGrid
      spacing={28}
      mt={0}
      cols={3}
      breakpoints={[{ maxWidth: "md", cols: 1 },]}
      className={classes.gridSimple}
    >
      <Container className={classes.help} mb={15}>
        <FilterPanel parameter={parameter} onParameterChange={handleParameterChange} ></FilterPanel>
      </Container >
      <div className={classes.vacanciesList}  >
        <RequestComponent parameter={parameter} />
      </div>
    </SimpleGrid>
  );
}
