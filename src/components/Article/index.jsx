import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <article className="mt-90">
  <header className="text-center mb-40">
    <h3>
      <a href="blog-single.html">New features will add to dashboard soon</a>
    </h3>
    <div className="link-color-default fs-12">
      <a href="#">News</a>,
      <time>May 13, 2017</time>
    </div>
  </header>
  <a href="blog-single.html">
    <img className="rounded" src="assets/img/blog-1.jpg" alt="..." />
  </a>
  <div className="card-block">
    <p className="text-justify">Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let
      may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit
      creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us
      behold. Saying above moving second a subdue likeness after also second.</p>
    <p className="text-center mt-40">
      <Link className="btn btn-primary btn-round" to="/article/some-title-slug">Read more</Link>
    </p>
  </div>
</article>

  );
};

export default Article;