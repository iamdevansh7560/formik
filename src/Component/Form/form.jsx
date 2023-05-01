
import Box from '@mui/material/Box';
import { useFormik } from "formik";
import * as yup from 'yup'



import { TextField, Typography, Stack, FormControlLabel, Checkbox, Button } from '@mui/material';

const Form = () => {


    const taskSchema = yup.object({
        firstName: yup
            .string()
            .required('First name is required'),
        lastName: yup
            .string()
            .required("Last name is required")
            .min(8, "Last name should be more than 8 words"),
        addressLine_1: yup
            .string()
            .required("Address is required")
            .min(32, "Address should be more than 32 words"),
        addressLine_2: yup
            .string(),
        enterCity: yup
            .string()
            .required("City is required"),
        enterState: yup
            .string(),
        enterZip: yup
        .string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, 'Must be exactly 5 digits')
        .max(6, 'Must be exactly 5 digits'),
        enterCountry: yup
            .string()
            .required("Coutry is required"),
        terms_and_condition: yup.boolean()
            .oneOf([true], "You must accept the pricing policy terms and conditions"),


    })




    const taskFormik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            addressLine_1: "",
            addressLine_2: "",
            enterCity: "",
            enterState: "",
            enterZip: "",
            enterCountry: "",
            terms_and_condition: false
        },
        validationSchema: taskSchema,
        onSubmit: (values) => {
            //console.log("sucess");
            console.log(JSON.stringify(values));
        }
    })






    return (

        <Box sx={{
            m: "2em"
        }}>

            <Typography variant="h4" mt="2em" fontWeight="bold" textAlign={{ xs: 'center', sm: "start" }}>
                Shipping Address
            </Typography>

            <form onSubmit={taskFormik.handleSubmit}
                style={{
                    padding: "20px 0"
                }}>

                <Stack spacing={5}>


                    <Stack direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 3, md: 6 }}>
                        <TextField
                            fullWidth
                            id="standard-basic" label="First Name *" variant="standard"
                            name="firstName"
                            value={taskFormik.values.firstName}
                            onChange={taskFormik.handleChange}
                            error={taskFormik.touched.firstName && Boolean(taskFormik.errors.firstName)}
                            helperText={taskFormik.touched.firstName && taskFormik.errors.firstName}
                        >


                        </TextField>

                        <TextField
                            fullWidth
                            id="standard-basic" label="Last Name *" variant="standard"
                            name="lastName"
                            value={taskFormik.values.lastName}
                            onChange={taskFormik.handleChange}
                            error={taskFormik.touched.lastName && Boolean(taskFormik.errors.lastName)}
                            helperText={taskFormik.touched.lastName && taskFormik.errors.lastName}
                        >
                        </TextField>

                    </Stack>

                    <TextField
                        fullWidth
                        id="standard-basic" label="Address line 1 *" variant="standard"
                        name="addressLine_1"
                        value={taskFormik.values.addressLine_1}
                        onChange={taskFormik.handleChange}
                        error={taskFormik.touched.addressLine_1 && Boolean(taskFormik.errors.addressLine_1)}
                        helperText={taskFormik.touched.addressLine_1 && taskFormik.errors.addressLine_1}
                    ></TextField>

                    <TextField
                        fullWidth
                        id="standard-basic" label="Address line 2" variant="standard"
                        name="addressLine_2"
                        value={taskFormik.values.addressLine_2}
                        onChange={taskFormik.handleChange}
                        error={taskFormik.touched.addressLine_2 && Boolean(taskFormik.errors.addressLine_2)}
                        helperText={taskFormik.touched.addressLine_2 && taskFormik.errors.addressLine_2}
                    ></TextField>

                    <Stack direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 3, md: 6 }}>

                        <TextField
                            fullWidth
                            id="standard-basic" label="City *" variant="standard"
                            name="enterCity"
                            value={taskFormik.values.enterCity}
                            onChange={taskFormik.handleChange}
                            error={taskFormik.touched.enterCity && Boolean(taskFormik.errors.enterCity)}
                            helperText={taskFormik.touched.enterCity && taskFormik.errors.enterCity}
                        ></TextField>

                        <TextField
                            fullWidth
                            id="standard-basic" label="City/Province/Region" variant="standard"
                            name="enterState"
                            value={taskFormik.values.enterState}
                            onChange={taskFormik.handleChange}
                            error={taskFormik.touched.enterState && Boolean(taskFormik.errors.enterState)}
                            helperText={taskFormik.touched.enterState && taskFormik.errors.enterState}
                        ></TextField>

                    </Stack>

                    <Stack direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 3, md: 6 }}>

                        <TextField

                            fullWidth
                            id="standard-basic" label="Zip/ Postal code *" variant="standard"
                            name="enterZip"
                            value={taskFormik.values.enterZip}
                            onChange={taskFormik.handleChange}
                            error={taskFormik.touched.enterZip && Boolean(taskFormik.errors.enterZip)}
                            helperText={taskFormik.touched.enterZip && taskFormik.errors.enterZip}
                        ></TextField>

                        <TextField

                            fullWidth
                            id="standard-basic" label="Country *" variant="standard"
                            name="enterCountry"
                            value={taskFormik.values.enterCountry}
                            onChange={taskFormik.handleChange}
                            error={taskFormik.touched.enterCountry && Boolean(taskFormik.errors.enterCountry)}
                            helperText={taskFormik.touched.enterCountry && taskFormik.errors.enterCountry}
                        ></TextField>



                    </Stack>

                    <FormControlLabel fulid
                    control={<Checkbox
                        required
                        name="terms_and_condition"
                        onChange={taskFormik.handleChange}
                    />} label="Use this address for payment details" />
                    <Stack
                        alignItems={{ xs: 'center', sm: 'end' }}

                    >
                        <Button variant="contained"
                            sx={{ width: "30px" }}
                            type="submit">submit</Button>
                    </Stack>

                </Stack>

            </form>
        </Box>
    )
}
export default Form