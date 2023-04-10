import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  createPostAction,
  findPostByIdAction,
  setFieldToNull,
  updatePostAction,
} from "../../Redux/Post/Action";
import { CREATE_NEW_POST, UPDATE_POST } from "../../Redux/Post/ActionType";

const validationSchema = Yup.object().shape({
  content: Yup.string()
    .min(1, "content must be min 1 characters")
    .max(300, "content must be max 300 characters")
});

const PostForm = () => {
  const initialValues = { content: "" };
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { user, post } = useSelector((store) => store);
  const navigate = useNavigate();
  const toast = useToast();

  const { postId } = useParams();

  useEffect(() => {
    if (!post.createdPost?.error && post.createdPost) {
      navigate("/post-list");
      toast({
        title: "Post Created...",

        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(setFieldToNull(CREATE_NEW_POST));
    }

    if (!post.updatedPost?.error && post.updatedPost) {
      navigate("/post-list");
      toast({
        title: "Post updated",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(setFieldToNull(UPDATE_POST));
    }
  }, [post.createdPost, post.updatedPost]);

  const handleSubmit = (values, actions) => {
    const data = {
      ...values,
      jwt,
      userId: user.reqUser?.id,
    };
    console.log(location.pathname, data, "ashok");

    if (location.pathname === "/create-post") {
      dispatch(createPostAction(data));
    } else {
    }

    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (postId) {
      const data = {
        postId: +postId,
        jwt,
      };
      dispatch(findPostByIdAction(data));
    }
  }, [postId]);

  useEffect(() => {
    const newValue = { content: "" };

    for (let item in newValue) {
      if (post.findById && post.findById[item]) {
        newValue[item] = post.findById[item];
      }
    }
    if (postId) {
      formik.setValues(newValue);
    }
  }, [post.findById]);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      if (location.pathname === "/create-post") {
        const data = {
          ...values,
          jwt,
          userId: user.reqUser?.id,
        };

        dispatch(createPostAction(data));
      } else {
        const data = {
          ...values,
          jwt,
          postId: +postId,
        };
        dispatch(updatePostAction(data));
      }

      actions.setSubmitting(false);
    },
  });

  console.log("postId ", postId);

  return (
    <div>
      <div className="mainBox ">
        <div className="formContainer w-[60%] lg:w-[40%]">
          <Box p={8} display="flex" flexDirection="column" alignItems="center">
            <h1 className="heading">
              {location.pathname === "/create-post"
                ? "Create Post"
                : "Update Post"}
            </h1>
            <Formik
              initialValues={formik.values}
              onSubmit={formik.handleSubmit}
              validationSchema={validationSchema}
            >
              {(formikProps) => (
                <Form className="formWrapper">
                  <Field name="content">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.content && form.touched.content}
                        mb={4}
                      >
                        <Input
                          className="contentInput"
                          {...field}
                          id="content"
                          placeholder="Content"
                          {...formik.getFieldProps("content")}
                        />
                        <FormErrorMessage>
                          {form.errors.content}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button
                    className=""
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                    isLoading={formikProps.isSubmitting}
                  >
                    {location.pathname === "/create-post"
                      ? "Create Post"
                      : "Update Post"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
