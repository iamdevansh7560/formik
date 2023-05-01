import { AppBar, Box, Link, Typography } from "@mui/material"

let Footer = () => {
    return (

        <Box sx={{
            flexGrow: 1
        }} >

            <Typography variant="subtitle1" sx={{
                color: "Black",
                bgcolor: "white",
                p: "10px",
                textAlign: "center",
            }}>
                Copyright ©️<Link sx={{
                    color: "black",
                    cursor:"pointer"
                }}>Your website </Link> 2022
            </Typography>
        </Box>


    )
}


export default Footer