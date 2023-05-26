import { useState, useEffect } from "react";
import NoContent from "./NoContent"
import { SimpleGrid } from "@mantine/core";
import ReactPaginate from 'react-paginate';
import CardVacancy from './CardVacancy';
import Loader from './Loader';

const ARROW_LEFT = '<';
const ARROW_RIGHT = '>';

function Favourites() {
    let [currentPage, setCurrentPage] = useState(0);
    let [totalPages, setTotalPages] = useState(0)
    const [data, setData] = useState(null);
    const [isStarred, setIsStarred] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (localStorage.length) {
            let ids = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                if (value === 'true') {
                    ids.push(Number(key))
                }
            }
            if (ids.length) {
                setTotalPages(localStorage.length / 4);
                setIsLoading(true);
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer v3.r.137440105.0efbadb77e441ec96576a594ac15b2c72bbfca35.9bcf938ada175efb487f7b8227b235f3aaf5a648',
                    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
                };
                let str = ""
                ids.map(id => {
                    str += "&ids[]=" + id
                })
                let req = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?published=1&count=4&" + `page=${currentPage.selected}` + str;

                fetch(req, {
                    headers
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setData(data);
                        setTotalPages(Math.ceil(data["total"] / 4));
                        setIsLoading(false);
                        if (currentPage.selected == totalPages) {
                            currentPage.selected -= 1
                        }
                    })
                    .catch((error) => console.error(error));
            } else {
                setData(null);
                setIsLoading(false);
            }
        } else {
            setData(null)
            setIsLoading(false);
        }
    }, [currentPage.selected, isStarred]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleStarClick = () => {
        setIsStarred(!isStarred);
    };

    return (
        <div>
            {(data && !isLoading) ? (<>
                <SimpleGrid
                    mt={16}
                    cols={1}
                    breakpoints={[{ maxWidth: "md", cols: 1 }]}
                >
                    {data["objects"].map((feature, key) => (
                        <CardVacancy key={key} feature={feature} onStarClick={handleStarClick} isStarred={isStarred} />
                    ))}
                </SimpleGrid>
            </>) : (isLoading) ? (<Loader isLoading={isLoading} />) : (<NoContent />)}
            <ReactPaginate
                pageCount={(isLoading) ? 0 : totalPages}
                pageRangeDisplayed={(currentPage.selected === 1) ? 2 : 3}
                marginPagesDisplayed={0}
                onPageChange={handlePageChange}
                containerClassName={(isLoading || !data) ? "hidden" : "pagination"}
                activeClassName={"active"}
                previousLabel={ARROW_LEFT}
                nextLabel={ARROW_RIGHT}
                forcePage={currentPage.selected}
                disableLastPage={true}
                onPageActive={page => currentPage = page.selected}
                disabledClassName={"disabled"}
                style={{ display: 'none' }}
            />
        </div>
    );

}

export default Favourites