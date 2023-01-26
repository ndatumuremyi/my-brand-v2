import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactQuill from 'react-quill';
import swal from 'sweetalert';
import Footer from '../../../components/Footer';
import '../../../css/popupButtons.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-quill/dist/quill.snow.css';
import AdminTopNav from '../../../components/AdminTopNav';
import AdminSideBar from '../../../components/AdminSideBar';
import useRouter from '../../../system/utils/useRouter';
import {
  add, deleteItem, getOneBlog, update,
} from '../../../system/utils/backend';
import endpoints from '../../../system/constants/endpoints';
import { getHeaders } from '../../../system/utilities';
import pagesPath from '../../../system/constants/pagesPath';
import { createBlogFields } from '../../../system/constants/fields';
import { checkValidation, setAttributes, validate } from '../../../system/utils/validation';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];
function isDescriptionValid(text) {
  return text.length > 20;
}
function getDescriptionErrorMessage(text) {
  if (!isDescriptionValid(text)) {
    return 'min length is 20';
  }
  return '';
}
function NewBlogActivity() {
  const imageNameRef = useRef();
  const router = useRouter();
  const [convertedText, setConvertedText] = React.useState('');
  const [id] = React.useState(router.query.id);
  const [blog, setBlog] = React.useState(undefined);
  const [descriptionError, setDescriptionError] = useState('');
  useEffect(() => {
    setDescriptionError(getDescriptionErrorMessage(convertedText));
  }, [convertedText]);
  useEffect(() => {
    if (id) {
      getOneBlog(endpoints.BLOGS, id).then((result) => {
        setBlog(result);
      });
    }
  }, [id]);
  useEffect(() => {
    if (blog) {
      setConvertedText(blog.description);
      if (imageNameRef?.current) {
        imageNameRef.current.textContent = blog.image;
      }
    }
  }, [blog]);
  useEffect(() => {
    createBlogFields.forEach((eachField) => {
      setAttributes(eachField);
      validate(eachField);
    });
  }, []);
  useEffect(() => {
    try {
      const imageField = document.getElementById('image_field');
      imageField.onchange = () => {
        console.log(imageField.value);
        const split = imageField.value.split('\\');
        if (imageNameRef?.current) {
          imageNameRef.current.textContent = split[split.length - 1];
        }
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteBlog = (event) => {
    event.preventDefault();
    if (!id) {
      return;
    }
    try {
      deleteItem(`${endpoints.BLOGS}/${id}`, getHeaders()).then(() => {
        swal('Delete successful!', 'deleting blog complete', 'success').then(() => {
          router.push(pagesPath.dashboardBlogs);
        });
      });
    } catch (error) {
      swal('Something went wrong!', `${error.message}`, 'error');
    }
  };
  const onSubmit = (event) => {
    const formData = new FormData(event.target);
    formData.append('description', convertedText);

    const copyForm = new FormData(event.target);
    // eslint-disable-next-line no-restricted-syntax
    for (const each of copyForm) {
      if (each[0] === 'image') {
        if (each[1].name === '') {
          formData.delete(each[0]);
        }
      } else if (each[1] === '') {
        formData.delete(each[0]);
      }
    }
    try {
      if (id) {
        update(`${endpoints.BLOGS}/${id}`, formData, getHeaders()).then(() => {
          swal('Blog Updated!', 'you will be directed to dashboard', 'success').then(() => {
            router.push(pagesPath.dashboardBlogs);
          });
        });
      } else {
        add(endpoints.BLOGS, formData, getHeaders()).then(() => {
          swal('Blog saved!', 'go to dashboard to view them', 'success').then(() => {
            router.push(pagesPath.dashboardBlogs);
          });
        });
      }
    } catch (e) {
      console.error(e);
      swal('Something went wrong!', 'It looks like, '
        + 'there is something not going well', 'error');
    }
  };
  return (
    <div id="main_content" className="flex flex-col page-content">
      <AdminTopNav />
      <div className="flex">
        <AdminSideBar />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const isFormValid = checkValidation(createBlogFields);
            const isDescriptionV = isDescriptionValid(convertedText);
            if ((!isFormValid || !isDescriptionV) && !id) {
              swal('Something went wrong!', 'Enter valid values for all fields', 'error');
              return;
            }
            onSubmit(event);
          }}
          id="create_edit_blog"
          className="flex-1 flex justify-between gap-4 flex-wrap items-start py-5 px-9 bg-F1F3F9"
          noValidate
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 items-center justify-center">
              <a
                className="material-symbols-outlined appearance-none no-underline text-center bg-white_blue_light text-brand-color p-4 rounded-full"
                href="/dashboard"
              >
                arrow_back
              </a>
              <h2 className="text-brand-color text-3xl">
                <span id="title_blog">{id ? 'Edit' : 'Create a new '}</span>
                Blog
              </h2>
            </div>

            <p>BLOG</p>

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="flex flex-col gap-3">
              <span className="text-brand-color">Title</span>
              <input
                defaultValue={blog?.title}
                name="title"
                id="title_field"
                className="bg-white border-none rounded-lg px-9 py-4 w-full"
                placeholder="title"
                type="text"
              />
              <span id="title_error" className="max-w-xs text-red-light left-3 bottom-0 error" />
            </label>
            <div className="flex flex-col gap-3">
              <span className="text-brand-color">Description</span>
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={convertedText}
                onChange={setConvertedText}
                className="bg-white border-none rounded-lg px-9 h-full py-4 w-full"
              />
              <span id="description_error" className="max-w-xs text-red-light error active">
                {descriptionError}
              </span>
            </div>

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="flex flex-col gap-3">
              <span className="text-brand-color">Blog category</span>
              <select
                id="category_field"
                name="category"
                defaultValue="tech"
                className="bg-white border-none rounded-lg px-9 py-4 w-full"
              >
                <option value="tech" className="bg-white">Tech</option>
                <option value="life" className="bg-white">Life</option>
                <option value="others" className="bg-white">Others</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <span className="text-brand-color"> Featured Image</span>
              <span ref={imageNameRef} id="image_name" className="text-brand-color overflow-wrap max-w-sm" />

              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                className="cursor-pointer flex items-center space-x-3 w-full border-2 border-dashed border-brand rounded-lg px-4 py-6 "
              >
                <span className="material-symbols-outlined text-brand-color text-3xl">
                  upload
                </span>
                <span className="flex flex-col">
                  Click to select file(s)
                </span>
                <input
                  name="image"
                  id="image_field"
                  accept=".jpg,.png,.jpeg"
                  className="hidden"
                  type="file"
                />
                <span id="image_error" className="max-w-xs text-red-light left-3 bottom-0 error" />
              </label>
            </div>
            <div className="flex-col flex py-9 px-9 rounded-lg border-2 w-20 solid border-brand" id="saving_div">
              <button
                type="submit"
                className="text-white no-underline text-center px-5 py-5 bg-brand_bold rounded-xl"
              >
                Save changes
              </button>
              <span className="line mt-12 mb-2" />
              <button onClick={deleteBlog} type="button" id="delete_blog" className="text-red px-5 py-5 bg-white_blue_light rounded-xl">
                Delete post
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-brand_bold w-full bottom-0 fixed z-10 -md:flex justify-evenly py-4 px-5 md:hidden">
        <a className="appearance-none text-white-light" href="/dashboard">
          Dashboard
        </a>
        <a className="appearance-none no-underline text-white-light" href="/dashboard/blogs">
          blog
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default NewBlogActivity;
