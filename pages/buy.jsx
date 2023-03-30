import Head from 'next/head'
import Header from './layout/header'
import Footer from './layout/footer'
import {FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

let placeholderEvent = {
    "event_id": "Loading...",
    "venue_id": "Loading...",
    "name": "Loading...",
    "description": "Loading...",
    "date": "Loading...",
    "min_age": -1,
    "num_attendees": -1,
    "price": -1
}

let placeHolderVenue = {
    "venue_id": "Loading...",
    "name": "Loading...",
    "description": "Loading...",
    "address": "Loading...",
    "max_capacity": -1
}

function updateWindowTitle(title) {
    document.title = title;
}

export function QuantitySelect() {
    const [quantity, setQuantity] = useState('');

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="quantity-label">Quantity</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export function getPurchase() {
    const [eventInfo, setEventInfo] = useState([]);
    const [venueInfo, setVenueInfo] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch(`http://localhost:8000/api/get/event/${new URLSearchParams(window.location.search).get('id')}`, {method: 'GET', headers: {'Content-Type': 'application/json', 'Alow-Control-Allow-Origin': '*'}})
                .then(data => data.json())
                .then(data => {
                    setEventInfo(data);
                    if (data.result !== undefined) {
                        placeholderEvent.event_id = data.result.event_id;
                        placeholderEvent.venue_id = data.result.venue_id;
                        placeholderEvent.name = data.result.name;
                        placeholderEvent.description = data.result.description;
                        placeholderEvent.date = data.result.date;
                        placeholderEvent.min_age = data.result.min_age;
                        placeholderEvent.num_attendees = data.result.num_attendees;
                        placeholderEvent.price = data.result.price;
                        updateWindowTitle(`${placeholderEvent.name} | Ticketbass-Turd`)

                        fetchVenue();
                    } else {
                        placeholderEvent.name = "Event Not Found";
                    }
                });
        };
        const fetchVenue = () => {
            fetch(`http://localhost:8000/api/get/venue/${placeholderEvent.venue_id}`, {method: 'GET', headers: {'Content-Type': 'application/json', 'Alow-Control-Allow-Origin': '*'}})
                .then(data => data.json())
                .then(data => {
                    setVenueInfo(data);
                    if (data.result !== undefined) {
                        placeHolderVenue.venue_id = data.result.venue_id;
                        placeHolderVenue.name = data.result.name;
                        placeHolderVenue.description = data.result.description;
                        placeHolderVenue.address = data.result.address;
                        placeHolderVenue.max_capacity = data.result.max_capacity;
                    }
                })
        }
        fetchData();
    }, []);

    if (placeholderEvent.name === "Event Not Found") {
        return (
            <div>
                <Stack alignItems={'center'} sx={{mt:10}}>
                    <Typography variant={'h1'}>{placeholderEvent.name}</Typography>
                    <Button style={{maxWidth: '5iem'}} sx={{m:5}} variant={'contained'}
                            onClick={() => {
                                window.location.href = '/'
                            }}
                    >Back to search</Button>
                </Stack>
            </div>);
    }

    return (
        <div>
            <Box>
                <Stack alignItems={'center'} spacing={4} sx={{mt:7}}>
                    <Typography variant={'h2'}>{`Checkout`}</Typography>

                    <Grid2 container spacing={3} sx={{m: 10}}>
                        <Grid2 xs={6}>
                            <Stack align={'left'} spacing={0} sx={{m:5}}>


                                <Typography sx={{mb:3}}variant={'h4'}>{`${(placeholderEvent.name)}`}</Typography>

                                <Typography variant={'h6'}>{`Date: ${(placeholderEvent.date)}`}</Typography>
                                <Typography variant={'body1'}>{`Per Ticket: $${(placeholderEvent.price)}`}</Typography>
                                <Typography sx={{mb:3}} variant={'body1'}>{`Minimum Age: ${(placeholderEvent.min_age)}`}</Typography>

                                <Typography variant={'h6'}>{`${(placeHolderVenue.name)}`}</Typography>
                                <Typography variant={'body1'}>{`${(placeHolderVenue.address)}`}</Typography>

                            </Stack>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Stack align={'left'} spacing={2} sx={{m:5}}>
                                <Typography variant={'h4'}>Purchase</Typography>
                                {QuantitySelect()}
                                <Button style={{maxWidth: '20iem', marginBottom: '10%'}} sx={{m:5}} variant={'contained'}
                                        onClick={
                                            () => {
                                                window.location.href = `/buy?id=${placeholderEvent.event_id}`
                                            }
                                        }>Checkout</Button>
                            </Stack>
                        </Grid2>
                    </Grid2>

                </Stack>

            </Box>

        </div>
    )
}

export default function Checkout() {
    return (
        <>
            <Head>
                <title id={'title'}>Checkout | Ticketbass-Turd</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                {getPurchase()}
                <Footer/>
            </main>
        </>
    )
}
