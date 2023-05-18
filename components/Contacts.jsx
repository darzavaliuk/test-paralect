import { useState, useEffect } from "react";
import NoContent from "./NoContent"
import { SimpleGrid } from "@mantine/core";
import ReactPaginate from 'react-paginate';
import CardVacancy from './CardVacancy';
import Loader from './Loader';
function Contacts() {
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
        if (value == 'true') {
          ids.push(Number(key))
        }
      }
      if (ids.length) {
        setTotalPages(localStorage.length / 4);
        setIsLoading(true);
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer v3.r.137440105.a077cda7bfea7618cc08cc357d86d8d77d1c5f2e.c094dc2135eaa978b177f9543a72a5ac0cbfcb57',
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
        };
        let str = ""
        ids.map(id => { str += "&ids[]=" + id })
        let req = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=4&" + `page=${currentPage.selected}` + str;

        fetch(req, {
          headers
        })
          .then((response) => response.json())
          .then((data) => {
            setData(data); data["objects"].map(el => console.log(el["profession"]));
            setTotalPages(Math.ceil(data["total"] / 4));
            setIsLoading(false);
          })
          .catch((error) => console.error(error));
        console.log(data)
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
          {data["objects"].map((feature) => (
            <CardVacancy feature={feature} onStarClick={handleStarClick} isStarred={isStarred} />
          ))}
        </SimpleGrid>
      </>) : (isLoading) ? (<Loader isLoading={isLoading} />) : (<NoContent />)}
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
        style={{ display: 'none' }}
      />
    </div>
  );

}

export default Contacts