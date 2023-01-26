import React, { useEffect, useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import Footer from '../../components/Footer';
import endpoints from '../../system/constants/endpoints';
import useRouter from '../../system/utils/useRouter';
import { getOneBlog } from '../../system/utils/backend';
import CommentView from '../../components/_Parties/blogsPage/CommentView';
import AddNewCommentForm from '../../components/_Parties/blogsPage/AddNewCommentForm';
import LikeBlog from '../../components/_Parties/blogsPage/LikeBlog';

function BlogView() {
  const router = useRouter();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const { id } = router.query;
    if (!id) {
      return;
    }
    getOneBlog(endpoints.BLOGS, id).then((result) => {
      setBlog(result);
      setComments(result.comments);
      // title.textContent = result.title;
      // description.innerHTML = result.description;
      // if (result.image) {
      //   image.src = result.image;
      // }
      // if (result.comments) {
      //   comment_counts.innerText = `${result.comments.length}`;
      //   result.comments.forEach((each) => addCommentInView(each));
      // }
      // if (result.likes?.count) {
      //   setLikesToView(result.likes.count);
      // }
    });
  }, [router.query.id]);
  return (
    <>
      <TopNav />
      <main className="flex flex-col gap-12 contact_main relative my-9 items-center">
        <div className="blog_image_container">
          <img
            id="image"
            src={blog.image || 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'}
            className="w-full rounded-xl"
            alt=""
          />
        </div>
        <div className="flex justify-evenly w-full px-9">
          <div>
            <h3 id="title" className="text-4xl">{blog.title}</h3>
            <div className="flex gap-2">
              <span>Written by paterneN</span>
              <span>Monday May 20</span>
            </div>
          </div>
          <LikeBlog likeCount={blog.likes?.count} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.description }} id="description" className="max-w-2xl flex flex-col gap-4 text-black-light" />

        <h1 className="comment_header relative w-full mb-2">
          Comments (
          <span id="comment_counts">{comments.length}</span>
          )
        </h1>
        <div id="comment_section" className="flex flex-col gap-12 self-start ml-20 px-20 relative comment_timeline">
          {
            comments.map((each) => (
              // eslint-disable-next-line no-underscore-dangle
              <React.Fragment key={`${each._id}`}>
                <CommentView comment={each} />
              </React.Fragment>
            ))
          }
        </div>

        <div className="w-full md:px-20">

          <AddNewCommentForm
            id={
              /* eslint-disable-next-line no-underscore-dangle */
            blog._id
          }
            addComment={(comment) => {
              setComments((i) => [...i, comment]);
            }}
          />
        </div>

      </main>
      <BottomNav />
      <Footer />
    </>
  );
}

export default BlogView;
