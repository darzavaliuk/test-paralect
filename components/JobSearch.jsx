import {createStyles, Container} from "@mantine/core";
import {useState} from "react";
import {SimpleGrid} from '@mantine/core';
import RequestComponent from './RequestComponent';
import FilterPanel from "./FilterPanel";

const useStyles = createStyles((theme) => ({

        gridSimple: {
            display: "flex", justifyContent: "space-between",
            [`@media (max-width:  880px)`]: {
                display: "block",
            },

        },

        help: {
            padding: 0,
            display: "flex",
            justifyContent: "center", height: "360px"
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

    const {classes} = useStyles();

    return (
        <SimpleGrid
            spacing={28}
            mt={0}
            cols={3}
            breakpoints={[{maxWidth: "md", cols: 1},]}
            className={classes.gridSimple}
        >
            <Container className={classes.help} mb={15}>
                <FilterPanel parameter={parameter} onParameterChange={handleParameterChange}/>
            </Container>
            <div className={classes.vacanciesList}>
                <RequestComponent parameter={parameter}/>
            </div>
        </SimpleGrid>
    );
}
