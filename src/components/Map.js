import React from 'react'
// import { useSelector } from 'react-redux'
import { Container, Button, Box, Card,  makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
      border: '2px solid',
      width: '90%',
      margin: 'auto',
      display: 'grid',
      gridTemplateColumns: '1fr',
    },
    mainButtonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
        marginBottom: '20px'
    },
    mainButton: {
        fontSize: '1.5rem',
        fontWeight: 700

    },
    subButtonWrapper: {
        display: 'flex',
        // border: '3px solid red',
        margin: '10px 0',
    },
     subButton: {
         display: 'inline-block',
         textAlign: 'center',
         padding: '5px',
        //  border: '1px solid blue'
     }
  }))

const Map = ({mainCategory, subCategory, onclick}) => {
    const classes = useStyles()
    
    return (
        <Container className={classes.container}>
            <Card className={classes.mainButtonWrapper}>
                <Box className={classes.mainButton}>
                    {mainCategory}
                </Box>
            </Card>
            {subCategory.map((item, index ) => (
            <Card key={item} className={classes.subButtonWrapper} onClick={onclick}>
                {
                    index === 0 ?  <Button className={classes.subButton}  >
                    {item}
                </Button> :  <Button className={classes.subButton} disabled >
                    {item}
                </Button>
                }
               
            </Card>
            ))}
        </Container>
    )
}


export default Map