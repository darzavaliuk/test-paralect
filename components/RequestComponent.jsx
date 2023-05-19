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
import NoContent from "./NoContent";


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
            'Authorization': 'Bearer v3.r.137440105.a077cda7bfea7618cc08cc357d86d8d77d1c5f2e.c094dc2135eaa978b177f9543a72a5ac0cbfcb57',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
        };
        let req
        if (parameter) {
            // handlePageChange(0)
            req = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?published=1&count=4&" + `page=${currentPage.selected}&` + "keyword=" + ((change) ? (change) : ("")) + "&catalogues=" + ((parameter.category !== -1) ? (parameter.category) : ("")) + "&payment_from=" + ((parameter.valueFrom) ? (parameter.valueFrom) : ("")) + "&payment_to=" + ((parameter.valueTo) ? (parameter.valueTo) : ("")) + "/";
         } else
            req = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?published=1&count=4&" + `page=${currentPage.selected}&` + "keyword=" + ((change) ? (change) : (""));
        // console.log((change) ? (change) : ("") + "&catalogues="+ (parameter.category) ? (parameter.category) : ("") + "&payment_from=" +  (parameter.valueFrom) ? (parameter.valueFrom) : ("") +"&payment_to=" +  (parameter.valueTo) ? (parameter.valueTo) : ("") + "/")
        console.log(req)

        fetch(req, { headers, })
            .then((response) => response.json())
            .then((data) => { setData(data); setTotalPages(Math.ceil(data["total"] / 4)); data["objects"].map(el => console.log(el["profession"])); console.log(data.total); setIsLoading(false);  })
            .catch((error) => console.error(error));

    }, [change, parameter, currentPage.selected]);


    return (
        <Container size="lg" padding={0} >
            <SearchPanel onSearch={handleSearch} />
            {(data && !isLoading && data.total) ? (
                <div>

                    <SimpleGrid
                        mt={16}
                        cols={1}
                        breakpoints={[{ maxWidth: "md", cols: 1 }]}

                    >
                        {data["objects"].map((feature, key) => (
                            <CardVacancy key={key} feature={feature} />
                        ))}

                    </SimpleGrid>

                </div>
            ) : 

                (isLoading) ? (<Loader isLoading={isLoading}/>)  : (<NoContent /> ) 


            }
            <ReactPaginate
                pageCount={(isLoading) ? 0 : totalPages}
                pageRangeDisplayed={(currentPage.selected == 1) ? 2 : 3}
                marginPagesDisplayed={0}
                onPageChange={handlePageChange}
                containerClassName={(isLoading || !data || !data.total) ? "hidden" : "pagination"}
                activeClassName={"active"}
                previousLabel={"<"}
                nextLabel={">"}
                // forcePage={currentPage.selected}
                disableLastPage={true}
                onPageActive={page => currentPage = page.selected}
                disabledClassName={"disabled"}
            />
        </Container>

    );
}

export default RequestComponent;