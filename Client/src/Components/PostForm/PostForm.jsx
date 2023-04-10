import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createPostAction, setFieldToNull } from "../../Redux/Post/Action";
import { CREATE_NEW_POST } from "../../Redux/Post/ActionType";

const validationSchema = Yup.object().shape({
  content: Yup.string()

    .max(300, "content must be max 300 characters")
    .required("Required"),
});

const PostForm = () => {
  const initialValues = { content: "" };
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { user,post } = useSelector((store) => store);
  const navigate = useNavigate();
const toast=useToast();

  useEffect(()=>{
   

    if(!post.createdPost?.error && post.createdPost){
      navigate("/post-list")
      toast({
        title: "Post Created...",

        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(setFieldToNull(CREATE_NEW_POST))
    }
  },[post.createdPost])

  const handleSubmit = (values, actions) => {
    const data = {
      ...values,
      jwt,
      userId: user.reqUser?.id,
    };
    console.log(location.pathname, data, "ashok");

    if (location.pathname === "/create-post") {
      dispatch(createPostAction(data));
    }

    actions.setSubmitting(false);
  };

  



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
              initialValues={initialValues}
              onSubmit={handleSubmit}
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
                        <Textarea
                          className="contentInput"
                          {...field}
                          id="content"
                          placeholder="Content"
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
