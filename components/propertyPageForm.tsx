import { Grid, Text } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const PropertyPageForm: React.FC = () => {
  const initialValues = {}
  const handleOnSubmit = () => {}

  return (
    <Grid>
      <Text>details:</Text>
      <Grid className="form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
        >
          {props => (
            <Form>
              <Field>
                
              </Field>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}