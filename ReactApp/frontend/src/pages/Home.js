import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, CardMedia, Button, CssBaseline, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import ReactMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        h2: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 600,
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 140,
    },
    section: {
        margin: theme.spacing(4, 0),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.grey[200],
    },
}));

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <HomeContent />
        </ThemeProvider>
    );
}

const HomeContent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Get Active
                    </Typography>
                    <Button color="inherit" href="#home">Home</Button>
                    <Button color="inherit" href="#about">About Us</Button>
                    <Button color="inherit" href="#features">Features</Button>
                    <Button color="inherit" href="#contact">Contact</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Get Active
                </Typography>
                <section id="about" className={classes.section}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body1">
                        Get Active is your go-to platform for staying fit and healthy.
                    </Typography>
                </section>
                <section id="features" className={classes.section}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Features
                    </Typography>
                    <ul>
                        <li>Track your workouts</li>
                        <li>Join fitness challenges</li>
                        <li>Connect with friends</li>
                    </ul>
                </section>
                <section id="workouts" className={classes.section}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Courts
                    </Typography>
                    <ReactMultiCarousel responsive={responsive}>
                        {['Basketball', 'Tennis', 'Squash', 'Badminton', 'Volleyball'].map((sport) => (
                            <Card className={classes.card} key={sport}>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://via.placeholder.com/345x140?text=${sport}`}
                                    title={sport}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {sport}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Play {sport.toLowerCase()} on our top-notch courts.
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </ReactMultiCarousel>
                </section>
                <section id="community" className={classes.section}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Sports Rooms
                    </Typography>
                    <ReactMultiCarousel responsive={responsive}>
                        {['Yoga', 'Spinning', 'Dance', 'Pilates', 'Boxing'].map((activity) => (
                            <Card className={classes.card} key={activity}>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://via.placeholder.com/345x140`}
                                    title={activity}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {activity}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Join our {activity.toLowerCase()} sessions to improve your fitness.
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </ReactMultiCarousel>
                </section>
            </Container>
            <footer className={classes.footer}>
                <Container>
                    <Typography variant="body1">&copy; 2025 Get Active. All rights reserved.</Typography>
                </Container>
            </footer>
        </Box>
    );
}

export default Home;