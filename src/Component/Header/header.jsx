import { AppBar, Box, Typography } from "@mui/material"

let Header = () => {
    return (
        
            <Box sx={{
                flexGrow:1
            }} >
                <AppBar position="static" elevation={0} >
                    <Typography variant="h2" sx={{
                        color:"Black",
                         bgcolor:"white",
                          p:"10px",
                          textAlign:"center",
                    }}>
                        Checkout
                    </Typography>
                </AppBar>
            </Box>

    
    )
}


export default Header