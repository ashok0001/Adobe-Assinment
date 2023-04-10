import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import "./UserForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserAction,
  getUsersProfileAction,
} from "../../Redux/User/Action";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  name: Yup.string()
    .min(1, "name must be at least 1 characters")
    .max(50, "name must be max 50 characters")
    .required("Required"),
});

const UserForm = () => {
  const initialValues = { email: "", password: "", name: "" };
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUsersProfileAction(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (user.reqUser) {
      navigate("/user-list");
    }
  }, [user.reqUser]);


  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(createUserAction(values));
    actions.setSubmitting(false);
  };
  return (
    <div>
      <div className="mainBox">
        <div className="formContainer">
          <Box p={8} display="flex" flexDirection="column" alignItems="center">
            <h1 className="heading">Social App</h1>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(formikProps) => (
                <Form className="formWrapper">
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                        mb={4}
                      >
                        <Input
                          className="nameInput"
                          {...field}
                          id="name"
                          placeholder="Full Name"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                        mb={4}
                      >
                        <Input
                          className="emailInput"
                          {...field}
                          id="email"
                          placeholder=" Email"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                        mb={4}
                      >
                        <Input
                          {...field}
                          type="password"
                          id="password"
                          placeholder="Password"
                          className="passwordInput"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button
                    className="signinButton"
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                    isLoading={formikProps.isSubmitting}
                  >
                    Sign Up
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

export default UserForm;
