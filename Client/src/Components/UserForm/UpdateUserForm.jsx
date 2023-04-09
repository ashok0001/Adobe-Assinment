import { Box, Button, FormControl, FormErrorMessage, Input, Textarea } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import "./UserForm.css"
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "../../Redux/User/Action";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    bio: Yup.string()
    .max(200,"bio must be max 200 characters"),

    name: Yup.string()
    .min(1, "name must be at least 1 characters")
    .max(50,"name must be max 50 characters")
    .required("Required"),
});

const UpdateUserForm = () => {
    const initialValues = { email: "", password: "",name:"" };
    const dispatch=useDispatch();
    const {user}=useSelector(store=>store);
    const navigate=useNavigate();


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
          
<h1 className="heading">Update User</h1>
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
                    isLoading={formikProps.isSubmitting}
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
