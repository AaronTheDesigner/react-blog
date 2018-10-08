import React from 'react';
import Banner from './../Banner';
import Article from './../Article';

const Welcome = () => {
  return (
    <div>
      <Banner 
      backgroundImage="url(assets/img/bg-gift.jpg)"
      title="Latest Blog Posts"
      subtitle="Read and get updated on the latest posts"
      />
        
       
    
    <main className="main-content bg-gray">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
          <Article/>
          <hr/>
          <Article/>
          <hr/>
          <Article/>
          <nav className="flexbox mt-50 mb-50">
          <a className="btn btn-white disabled">
            <i className="ti-arrow-left fs-9 mr-4" /> Newer</a>
          <a className="btn btn-white" href="#">Older
            <i className="ti-arrow-right fs-9 ml-4" />
          </a>
</nav>
        </div>
      </div>
    </main>

    </div>
  );
};

export default Welcome;