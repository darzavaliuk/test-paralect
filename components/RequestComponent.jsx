import React, { useState, useEffect } from 'react';
import {
    createStyles,
    SimpleGrid,
    Container
} from "@mantine/core";
import ReactPaginate from 'react-paginate';

import SearchPanel from './SearchPanel';
import CardVacancy from './CardVacancy';
import Loader from './Loader';

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

        /* Blue Main 500 */

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
        /* identical to box height, or 125% */
        /* Black */
        color: "#232134"
    },

    workingHours: {
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
        /* identical to box height, or 125% */
        /* Black */
        color: "#232134"
    },

    help: {
        padding: 0,
    },
    logo: {
        maxWidth: 60,


    },
}));



function RequestComponent({ parameter }) {
    let [currentPage, setCurrentPage] = useState(1);
    let [totalPages, setTotalPages] = useState(0)

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const [data, setData] = useState(null);
    let [change, setChangeNew] = useState('');

    const handleSearch = (searchTerm) => {
        setChangeNew(searchTerm)
    };

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer v3.r.137440105.50dc4d55a09502fea22e76765ac5d3a3e2d1149f.2047bea389aa50ea5d5d2129534db084575a47c8',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
        };
        let req
        if (parameter)
            req = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=4&" + `page=${currentPage.selected}&` + "keyword=" + ((change) ? (change) : ("")) + "&catalogues=" + ((parameter.category != -1) ? (parameter.category) : ("")) + "&payment_from=" + ((parameter.valueFrom) ? (parameter.valueFrom) : ("")) + "&payment_to=" + ((parameter.valueTo) ? (parameter.valueTo) : ("")) + "/";
        else
            req = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=4&" + `page=${currentPage.selected}&` + "keyword=" + ((change) ? (change) : (""));
        // console.log((change) ? (change) : ("") + "&catalogues="+ (parameter.category) ? (parameter.category) : ("") + "&payment_from=" +  (parameter.valueFrom) ? (parameter.valueFrom) : ("") +"&payment_to=" +  (parameter.valueTo) ? (parameter.valueTo) : ("") + "/")
        console.log(req)

        fetch(req, { headers })
            .then((response) => response.json())
            .then((data) => { setData(data); setTotalPages(Math.ceil(data["total"] / 4)); data["objects"].map(el => console.log(el["profession"])); setIsLoading(false); })
            .catch((error) => console.error(error));

    }, [change, parameter, currentPage.selected]);
    const { classes } = useStyles();


    return (
        <Container size="lg" padding={0} className={classes.help} >
            <SearchPanel onSearch={handleSearch} />
            {(data && !isLoading) ? (
                <div>
                    {data ? (
                        <SimpleGrid
                            mt={16}
                            cols={1}
                            breakpoints={[{ maxWidth: "md", cols: 1 }]}

                        >
                            {data["objects"].map((feature) => (
                                <CardVacancy feature={feature} />
                            ))}

                        </SimpleGrid>
                    ) : (
                        <p style={{ color: '#000000' }}>Loading...</p>
                    )}
                </div>
            ) : (
                <div>
                    {isLoading && <Loader isLoading={isLoading} />}
                </div>
            )}
            <ReactPaginate
                pageCount={(isLoading) ? 0 : totalPages}
                pageRangeDisplayed={(currentPage.selected == 1) ? 2 : 3}
                marginPagesDisplayed={0}
                onPageChange={handlePageChange}
                containerClassName={(isLoading || !data) ? "hidden" : "pagination"}
                activeClassName={"active"}
                previousLabel={"<"}
                nextLabel={">"}
                disableLastPage={true}
                onPageActive={page => currentPage = page.selected}
                disabledClassName={"disabled"}
            />
        </Container>

    );
}

export default RequestComponent;