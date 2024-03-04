import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './commen/header';
import Leftsidebar from './commen/leftsidebar';
import Rightsidebar from './commen/rightsidebar';
import Footer from './commen/Footer';

import { userApiRedux } from '../store/actions/userAction';

const Datable = () => {
  const dispatch = useDispatch();
  const userListResponse = useSelector((state) => state.user || {}); // Update the state key

  // Extracting user list from the response
  const userLists = userListResponse.data?.data?.userList || [];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // You can change this based on your preference

  useEffect(() => {
    dispatch(userApiRedux());
  }, [dispatch]);

  // Paginate user list
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userLists.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <Leftsidebar />

      <div className="content-page">
        <h2>Userlist</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user._id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.mobile_number}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <ul className="pagination" style={{marginLeft:"90%"}}>
          {Array.from({ length: Math.ceil(userLists.length / itemsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Rightsidebar />
      <Footer />
    </>
  );
};

export default Datable;
