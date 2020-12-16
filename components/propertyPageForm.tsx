import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  Text,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Divider,
  Select,
  Button,
} from '@chakra-ui/react';
import {
  Formik,
  Form,
  Field,
  FieldArray
} from 'formik';
import { PropertyFormType } from '../components';
import * as yup from 'yup';
import { theme } from '../lib/theme';

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
        area: 1,
        floors: 1,
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
  }).required();

  const detailsSchema = yup.object({
    size: yup.object({
      area: yup.number().required().min(1),
      floors: yup.number().required().min(1),
      unit: yup.string().required()
    }),
    amenities: yup.array(yup.object({
      type: yup.string().required().max(20),
      qty: yup.string().required().min(1),
    })).max(8),
  });

  const validationSchema = yup.object({
    name: yup.string().required().max(20),
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
      {({ field, form }) => {
        // for fields that have nested properties
        const objectPaths = formField.split(".");
        const formError = objectPaths.reduce((acc, cur) => {
          if (typeof acc !== "undefined") { // handle undefined in runtime
            return acc[cur];
          } else {
            return;
          }
        }, form.errors);
        const formTouched = objectPaths.reduce((acc, cur) => {
          if (typeof acc !== "undefined") {
            return acc[cur];
          } else {
            return;
          }
        }, form.touched);

        return(
          <FormControl isInvalid={formError && formTouched} isTruncated>
            <FormLabel htmlFor={formField}>{label}</FormLabel>
            <Input {...field} id={formField} />
            <FormErrorMessage>{formError}</FormErrorMessage>
          </FormControl>
        )
      }}
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
            <FormLabel htmlFor={formField}>{label} (max of 8 items)</FormLabel>
            <Grid
              gap="1em"
              alignItems="center"
            >
              {nestedValueObject.map((value, i) => (
                <Grid
                  key={`${value} ${i}`}
                  gridTemplateColumns="4fr 1fr 1fr"
                  gap="1em"

                  alignContent="flex-start"
                >
                  <MyTextField
                    formField={`${formField}.${i}.type`}
                  />
                  <MyNumberInput
                    formField={`${formField}.${i}.qty`}
                  />
                  {nestedValueObject.length > 1 && (
                    <Button
                      mt="9px"
                      onClick={() => {
                      arrayHelpers.remove(i);
                      }}
                    >
                      &times;
                    </Button>
                  )}
                </Grid>
              ))}
              {nestedValueObject.length < 8 && (
                <Button
                  fontWeight="400"
                  w="100%"
                  onClick={() => {
                    arrayHelpers.push({
                      type: "amenties",
                      qty: 1
                    })
                  }}
                >
                  + add amenities
                </Button>
              )}
            </Grid>
          </FormControl>
        )}
      </FieldArray>
    )
  }

  return (
    <Grid
      gap="1em"
    >
      <Text>details:</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Grid
              className="first part"
              gap="1em"
            >
              <Grid
                gap="1em"
              >
                <MyTextField
                  formField="name"
                  label="property name"
                />
                <Grid
                  gridTemplateColumns="1fr 4fr"
                  gap="1em"
                >
                  <MySelectInput
                    formField="currency"
                    label="currency"
                    valuesArray={["php", "usd", "sgd", "aud", "nzd"]}
                  />
                  <MyNumberInput
                    formField="price"
                    label="price"
                  />
                </Grid>
              </Grid>
              <Divider/>
              <Grid
                className="second part"
                gap="1em"
              >
                <MyTextField
                  formField="address.line"
                  label="address line"
                />
                <Grid
                  gridTemplateColumns="1fr 1fr"
                  gap="1em"
                >
                  <MyTextField
                    formField="address.city"
                    label="city"
                  />
                  <MyTextField
                    formField="address.provinceStateRegion"
                    label="province/state/region"
                  />
                </Grid>
                <Grid
                  gridTemplateColumns="3fr 1fr"
                  gap="1em"
                >
                  <MyTextField
                    formField="address.country"
                    label="country"
                  />
                  <MyNumberInput
                    formField="address.zipCode"
                    label="zip code"
                    asString
                  />
                </Grid>
              </Grid>
              <Divider />
              <Grid
                className="third part"
                gap="1em"
              >
                <Grid
                  gap="1em"
                  gridTemplateColumns="1fr 1fr 1fr"
                >
                  <MySelectInput
                    formField="details.size.unit"
                    label="unit"
                    valuesArray={["square meter", "square feet"]}
                  />
                  <MyNumberInput
                    formField="details.size.area"
                    label="lot area"
                  />
                  <MyNumberInput
                    formField="details.size.floors"
                    label="floors"
                  />
                </Grid>
                <MyAmenitiesFieldArray
                  formField="details.amenities"
                  label="amenities"
                  values={values}
                />
              </Grid>
              <Divider />
              <Button
                type="submit"
                isLoading={isSubmitting}
                bg={theme.colors.blue[900]}
                color="white"
              >
                update details
              </Button>
              <pre>values: {JSON.stringify(values, null, 2)}</pre>
              {/* <pre>errors: {JSON.stringify(errors, null, 2)}</pre> */}
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  )
}