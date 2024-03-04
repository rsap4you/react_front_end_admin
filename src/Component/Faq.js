import React from 'react'
import Header from './commen/header'
import Leftsidebar from './commen/leftsidebar'
import Rightsidebar from './commen/rightsidebar'
import Footer from './commen/Footer'

const Faq = () => {
  return (
    <>
      <Header />
      <Leftsidebar />



 <div className="content-page">


 
  <h2 className="mb-4">Frequently Asked Questions</h2>
  <div id="accordion">
    {/* Question 1 */}
    <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Question 1: What is Lorem Ipsum?
          </button>
        </h5>
      </div>
      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body">
          Answer 1: Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>
    </div>
    {/* Question 2 */}
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Question 2: Why do we use it?
          </button>
        </h5>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div className="card-body">
          Answer 2: It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout.
        </div>
      </div>
    </div>
    {/* Add more questions and answers as needed */}
  </div>
</div>







      <Rightsidebar />
<Footer/>
    </>
  )
}

export default Faq