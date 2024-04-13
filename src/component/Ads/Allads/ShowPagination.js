import React, { useEffect, useState } from "react";

const ShowPagination = ({ showPerPage, onPaginationChange }) => {
  const [count, setCount] = useState(1);
  console.log(count)
  const[totalPage,setTotalPage]=useState()

  useEffect(() => {
    const currentVal = showPerPage * count;
    onPaginationChange(currentVal - showPerPage, currentVal);
  }, [count]);

  return (
    <>
      <nav aria-label="Page navigation example">
        <div className="col-lg-12">
          {/* <ul class="pagination justify-content-center"> */}
          <ul class="d-flex justify-content-between">
            <li class="page-item">
              <button disabled={count <= 1} className="btn btn-dark" onClick={() => setCount(count - 1)}>
                &larr;
              </button>
            </li>
            {/* <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li> */}
            <li class="page-item">
              <button className="btn btn-dark" onClick={() => setCount(count + 1)} disabled={count.length-1}>
              &rarr;
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ShowPagination;

/* <div className="col-lg-12">
                  <div className="">
                    <p className="">Showing 12 of 60 Results</p>
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fas fa-long-arrow-alt-left" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link active"
                          onClick={() => {
                            setPrev(prev * 8);
                            setNext(next * 2);
                          }}
                        >
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          onClick={() => {
                            setPrev(prev * 2);
                            setNext(next * 2);
                          }}
                        >
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          onClick={() => {
                            setPrev(prev * 2);
                            setNext(next * 2);
                          }}
                        >
                          3
                        </a>
                      </li>
                      <li className="page-item">...</li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          6
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */
