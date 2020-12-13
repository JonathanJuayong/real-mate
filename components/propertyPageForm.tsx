import { FormControl, FormLabel, Input, Grid, Text, FormErrorMessage, NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper, Box, Select, Button } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage, useField, FieldAttributes, FieldArray } from 'formik';
import { PropertyFormType } from '../components';
import * as yup from 'yup';

export const PropertyPageForm: React.FC = () => {
  const initialValues: PropertyFormType = {
    name: "",
    price: 1000,
    currency: "php",
    address: {
      line: "",
      city: "",
      country: "",
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
    line: yup.string().required().max(50),
    city: yup.string().required().max(30),
    country: yup.string().required().max(30),
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
    })).max(8),
  });

  const validationSchema = yup.object({
    name: yup.string().lowercase().required().max(20),
    price: yup.number().min(1).required(),
    currency: yup.string().required(),
    address: addressSchema,
    details: detailsSchema,    
  })
  
  interface FormFieldProps {
    formField: string,
    label?: string
  }

  const MyTextField: React.FC<FormFieldProps> = ({ formField, label }) => (
    <Field name={formField}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[formField] && form.touched[formField]}>
          <FormLabel htmlFor={formField}>{label}</FormLabel>
          <Input {...field} id={formField} />
          <FormErrorMessage>{form.errors[formField]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
  
  const MyNumberInput: React.FC<FormFieldProps & {asString?: boolean}> = ({formField, label, asString}) => (
    <Field name={formField}>
      {({ field, form }) => (
        <FormControl id={formField}>
          <FormLabel htmlFor={formField}>{label}</FormLabel>
          <NumberInput value={field.value} onChange={val => {
            const newValue = asString ? `${val}` : parseInt(val); //convert to string if asString is true
            form.setFieldValue(field.name, newValue);
          }} min={1}>
            <NumberInputField/>
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      )}
    </Field>
  )

  const MySelectInput: React.FC<FormFieldProps & {valuesArray: Array<string>}> = ({formField, label, valuesArray}) => (
    <Field name={formField}>
      {({ field, form }) => (
        <FormControl id={formField}>
          <FormLabel htmlFor={formField}>{label}</FormLabel>
          <Select placeholder={label} {...field}>
            {valuesArray.map((value, i) => (
              <option key={`${value} ${i}`} value={value}>{value}</option>
            ))}
          </Select>
          <FormErrorMessage>{form.errors[formField]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )

  const MyAmenitiesFieldArray = ({ formField, label, values }) => {
    const objectPaths = formField.split(".");
    const nestedValueObject = objectPaths.reduce((acc, cur) => acc[cur], values)
    return (
      <FieldArray name={formField}>
        {arrayHelpers => (
          <FormControl id={formField}>
            <FormLabel htmlFor={formField}>{label}</FormLabel>
            {nestedValueObject.map((value, i) => (
              <Grid key={`${value} ${i}`}>
                <MyTextField
                  formField={`${formField}.${i}.type`}
                />
                <MyNumberInput
                  formField={`${formField}.${i}.qty`}
                />
                <Button onClick={() => {
                  arrayHelpers.remove(i);
                }}>
                  &times;
                </Button>
              </Grid>
            ))}
            <Button
              onClick={() => {
                arrayHelpers.push({
                  type: "amenties",
                  qty: 1
                })
              }}
            >
              + add amenities
            </Button>
          </FormControl>
        )}
      </FieldArray>
    )
  }

  return (
    <Grid
      gap="1em"
      w="6em"
    >
      <Text>details:</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors }) => (
          <Form>
            <Grid
              gap="1em"
            >
              <MyTextField
                formField="name"
                label="property name"
              />
              <MyNumberInput
                formField="price"
                label="price"
              />
              <MySelectInput
                formField="currency"
                label="currency"
                valuesArray={["php", "usd", "sgd", "aud", "nzd"]}
              />
              <MyTextField
                formField="address.line"
                label="address line"
              />
              <MyTextField
                formField="address.city"
                label="city"
              />
              <MyTextField
                formField="address.country"
                label="country"
              />
              <MyTextField
                formField="address.provinceStateRegion"
                label="province/state/region"
              />
              <MyNumberInput
                formField="address.zipCode"
                label="zip code"
                asString
              />
              <MyAmenitiesFieldArray
                formField="details.amenities"
                label="amenities"
                values={values}
              />
              <pre>values: {JSON.stringify(values, null, 2)}</pre>
              <pre>errors: {JSON.stringify(errors, null, 2)}</pre>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  )
}