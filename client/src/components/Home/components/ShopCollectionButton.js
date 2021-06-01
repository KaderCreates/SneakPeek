import React from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';


export default function ShopCollectionButton() {

    const styles = {
        button: {
            fontSize: '14px',
            border: '1px black solid'        },
        buttonContainer: {
            paddingTop: '2rem'
        }
    };  

    return (
        <div>
            <Box 
            display="flex" 
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            
            >
             <div style={styles.buttonContainer}>   
            <Link style={{textDecoration: 'none'}} to='/sneakers'>
            <Button style={styles.button}> 
                View All Time Collection
            </Button>
            </Link>
            </div>
            </Box>
        </div>
    )
}
