import { Box, Button, FormControl, FormErrorMessage, Textarea } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    
      content: Yup.string()
      
      .max(50,"content must be max 300 characters")
      .required("Required"),
  });

const CreatePostForm = () => {
    const initialValues={content:""};

    const dispatch=useDispatch();
    const {user}=useSelector(store=>store);
    const navigate=useNavigate();


    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      };


  return (
    <div>
        <div className="mainBox">
        
        <div className="formContainer">
            
          <Box p={8} display="flex" flexDirection="column" alignItems="center">
          
<h1 className="heading">Create Post</h1>
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
                        isInvalid={form.errors.bio && form.touched.bio}
                        mb={4}
                      >
                        <Textarea
                          className="contentInput"
                          {...field}
                          id="content"
                          placeholder="Content"
                        />
                        <FormErrorMessage>{form.errors.bio}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                 
                  <Button
                    className="updateButton"
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
  )
}

export default CreatePostForm