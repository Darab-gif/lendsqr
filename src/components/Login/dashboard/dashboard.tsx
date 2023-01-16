import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import UserDetails from "../userDetails/UserDetails";
import { BsFilter } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import "./dashboard.scss";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

let PageSize = 10;
let siblingCount = 1;
const Dashboard = () => {
  const person = useSelector((state: any) => state.sub);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return person.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  console.log(person);
  return (
    <div className="dashboard_wrapper">
      <Sidebar />
      <Header />
      <div>USERS</div>

      <UserDetails />
      <div className="table_wrapper">
        <table>
          <thead>
            <tr>
              <th>
                ORGANIZATION{" "}
                <span>
                  <BsFilter />
                </span>{" "}
              </th>
              <th>
                USERNAME{" "}
                <span>
                  <BsFilter />
                </span>
              </th>
              <th>
                EMAIL
                <span>
                  <BsFilter />
                </span>
              </th>
              <th>
                PHONE NUMBER{" "}
                <span>
                  <BsFilter />
                </span>
              </th>
              <th>
                DATE JOINED{" "}
                <span>
                  <BsFilter />
                </span>
              </th>
              <th>
                STATUS{" "}
                <span>
                  <BsFilter />
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item: any) => {
              return (
                <tr>
                  <td>
                    <Link to={`/post/${item.id}`} className="link">
                      {item.orgName.substring(0, 10)}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/post/${item.id}`} className="link">
                      {item.userName}
                    </Link>
                  </td>

                  <td>
                    <Link to={`/post/${item.id}`} className="link">
                      {item.email}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/post/${item.id}`} className="link">
                      {item.phoneNumber}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/post/${item.id}`} className="link">
                      {item.createdAt.substring(0, 16)}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/post/${item.id}`} className="link"></Link>
                  </td>
                  <td>
                    <FiMoreVertical />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={person.length}
          pageSize={PageSize}
          siblingCount={siblingCount}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
