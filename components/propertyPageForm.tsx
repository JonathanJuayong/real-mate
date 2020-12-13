import { FormControl, FormLabel, Input, Grid, Text, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PropertyFormType } from '../components';
import * as yup from 'yup';

export const PropertyPageForm: React.FC = () => {
  const initialValues: PropertyFormType = {
    name: "",
    price: 0,
    currency: "php",
    address: {
      city: "",
      country: "",
      line: "",
      provinceStateRegion: "",
      zipCode: ""
    },
    details: {
      size: {
        area: 0,
        floors: 0,
        unit: ""
      },
      amenities: [
        { type: "bedroom", qty: 1 },
        { type: "bathroom", qty: 1 },
      ]
    }
  }

  const addressSchema = yup.object({
    city: yup.string().required().max(30),
    country: yup.string().required().max(30),
    line: yup.string().required().max(30),
    provinceStateRegion: yup.string().required().max(30),
    zipCode: yup.string().required().max(10),
  });

  const detailsSchema = yup.object({
    size: yup.object({
      area: yup.number().required().min(0),
      floors: yup.number().required().min(0),
      unit: yup.string().required()
    }),
    amenities: yup.array(yup.object({
      type: yup.string().required(),
      qty: yup.string().required().min(1),
    }))
  });

  const validationSchema = yup.object({
    name: yup.string().lowercase().required().max(20),
    price: yup.number().min(0).required(),
    currency: yup.string(),
    address: addressSchema,
    details: detailsSchema,    
  })

  return (
    <Grid>
      <Text>details:</Text>
      <Grid className="form">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({values, errors}) => (
            <Form>
              <Field type="input" name="name" as={Input}/>
              <pre>values: {JSON.stringify(values, null, 2)}</pre>
              <pre>errors: {JSON.stringify(errors, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}