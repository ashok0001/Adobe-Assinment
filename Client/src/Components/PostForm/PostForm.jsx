import { Box, Button, FormControl, FormErrorMessage, Textarea } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Yup from "yup";
import { createPostAction } from '../../Redux/Post/Action'


const validationSchema = Yup.object().shape({
    
      content: Yup.string()
      
      .max(300,"content must be max 300 characters")
      .required("Required"),
  });

const PostForm = () => {
    const initialValues={content:""};
    const location=useLocation();
    const jwt=localStorage.getItem("jwt");
    const dispatch=useDispatch();
    const {user}=useSelector(store=>store);
    const navigate=useNavigate();


    const handleSubmit = (values, actions) => {
      const data={
        data:values,
        jwt:jwt,
      }
        console.log(location.pathname,values);

        if(location.pathname==="/create-post"){
          dispatch(createPostAction(data))
        }
        else{
          
        }
        
        actions.setSubmitting(false);
      };


  return (
    <div>
        <div className="mainBox">
        
        <div className="formContainer">
            
          <Box p={8} display="flex" flexDirection="column" alignItems="center">
          
          <h1 className="heading">{location.pathname==="/create-post"?"Create Post":"Update Post"}</h1>
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
                        <FormErrorMessage>{form.errors.content}</FormErrorMessage>
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
                   {location.pathname==="/create-post"?"Create Post":"Update Post"}
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

export default PostForm