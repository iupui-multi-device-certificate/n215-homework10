import { formatMonth, formatDay } from "../helpers.js";
const renderBlog = (blog) => `
<article class="blog-post">
  <div class="blog-date-block">
    <div class="day">${formatDay(blog.datePublished)}</div>
    <div class="month upper">${formatMonth(blog.datePublished)}</div>
  </div>
  <div class="blog-content">
    <img
      src="${blog.relativeImagetPath}"
      alt=""
      class="blog-image"
    />
    <div class="blog-text">
      <h1 class="blog-title">
        ${blog.title}
      </h1>
      <div class="blog-paragraph">
        ${blog.content}
    </div>
  </div>
</article>`;

const renderBlogs = (blogs) => ` ${blogs
  .map((blog) => renderBlog(blog))
  .join("")}
`;

export const blogView = (blogs) => `
<section class="blog">
<!-- TODO: check w/ designer -- why is blog title different proportionate length than rest? -->
<h1 class="font-size-60 title upper underline">BLOG:</h1>
<div class="blogs">
  ${renderBlogs(blogs)}
</div>
</section>
`;
