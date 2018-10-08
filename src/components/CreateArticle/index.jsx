import React from 'react';
import Banner from './../Banner';

const CreateArticle = () => {
  return (
    <div>

  <Banner
  backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
  title="Write an Article"
  />
  {/* END Header */}
  {/* Main container */}
  <main className="main-content">
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <form className="p-30 bg-gray rounded" method="POST" data-form="mailer">
              <div className="row">
                <div className="form-group col-md-12 my-5">
                  <input type="file" className="form-control" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input className="form-control form-control-lg" type="text" name="name" placeholder="Title" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <select name id className="form-control form-control-lg">
                    <option value>Select category</option>
                    <option value>Vuejs</option>
                    <option value>Reactjs</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-control form-control-lg" rows={4} placeholder="Content" name="message" defaultValue={""} />
              </div>
              <div className="text-center">
                <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* END Main container */}
</div>

  );
};
export default CreateArticle;