import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "./UserForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserAction,
  findUserByIdAction,
  updateUserAction,
} from "../../Redux/User/Action";
import { useNavigate, useParams } from "react-router-dom";

const validationSchema = Yup.object().shape({
  bio: Yup.string().max(200, "bio must be max 200 characters"),

  name: Yup.string()
    .min(1, "name must be at least 1 characters")
    .max(50, "name must be max 50 characters")
    .required("Required"),
});

const UpdateUserForm = () => {
  const [initialValues, setInitialValue] = useState({ bio: "", name: "aa" });
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { userId } = useParams();

  const toast = useToast();

  useEffect(() => {
    const data = { userId: +userId, jwt };
    if (userId != null || userId !== undefined) {
      dispatch(findUserByIdAction(data));
    }
  }, [userId]);

  useEffect(() => {
    const newValue = { name: "", bio: "" };

    for (let item in newValue) {
      if (user.findById && user.findById[item]) {
        newValue[item] = user.findById[item];
      }
    }

    formik.setValues(newValue);
  }, [user.findById]);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      const data = {
        jwt,
        data: values,
        userId,
      };

      dispatch(updateUserAction(data));

      toast({
        title: "Account updated...",

        status: "success",
        duration: 5000,
        isClosable: true,
      });
      actions.setSubmitting(false);
      navigate("/user-list");
    },
  });

  return (
    <div>
      <div className="mainBox">
        <div className="formContainer w-[60%] lg:[40%]">
          <Box p={8} display="flex" flexDirection="column" alignItems="center">
            <h1 className="heading">Update User</h1>
            <Formik
              initialValues={formik.values}
              onSubmit={formik.handleSubmit}
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
                          {...formik.getFieldProps("name")}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="bio">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.bio && form.touched.bio}
                        mb={4}
                      >
                        <Textarea
                          className="bioInput"
                          {...field}
                          id="bio"
                          placeholder="Bio"
                          {...formik.getFieldProps("bio")}
                        />
                        <FormErrorMessage>{form.errors.bio}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button
                    className="signinButton"
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                  >
                    Update
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

export default UpdateUserForm;
