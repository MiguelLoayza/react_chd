import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

const Navbar =() => {
    return (
        <div className="navbar">
            <input 
                type="text"
                className="form-control"
                placeholder="Search"
            />

            <div>
                <p className="btn btn-primary">Prueba</p>
                <p className="btn btn-primary">Prueba 2</p>
            </div>

            <div>
                <Box sx={{
                    '& > :not(style)': {
                        m: 2,
                        },
                    }}
                    >
                    <Icon>add_circle</Icon>
                    
                </Box>

            </div>      

        </div>
    )    
}

export default Navbar;

