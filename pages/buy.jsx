import Head from 'next/head'
import Header from './layout/header'
import Footer from './layout/footer'
import {FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

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



export function PaymentForm(eventID) {
    const [quantity, setQuantity] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [name, setName] = useState('');
    const [cvv, setCVV] = useState('');

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const handleChangeExpMonth = (event) => {
        setExpiryMonth(event.target.value);
    }

    const handleChangeExpYear = (event) => {
        setExpiryYear(event.target.value);
    }

    const handleChangeCardNum = (event) => {
        setCardNum(event.target.value);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeCVV = (event) => {
        setCVV(event.target.value);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="quantity-label">Quantity</InputLabel>
                <Select
                    labelId="quantity-label"
                    id="quantity"
                    value={quantity}
                    label="Age"
                    onChange={handleChangeQuantity}
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
            <Box component={'form'} autoComplete={'off'}>
                <div>
                    <TextField required id='cardNum' label={'Card Number'}  onChange={handleChangeCardNum} fullWidth={'100%'} sx={{mt: 3}}/>
                    <Stack direction={'row'} spacing={2} sx={{mt: 3}}>
                        <TextField onChange={handleChangeName} required id={'name'} label={'Name on Card'} fullWidth={'100%'}/>
                        <TextField onChange={handleChangeCVV} required id={'cvv'} label={'CVV'}/>
                    </Stack>

                    <Stack direction={'row'} spacing={2} sx={{mt: 3}}>
                        <FormControl sx={{width: '45%'}}>
                            <InputLabel id="expiryMonth-label">Expiry Month</InputLabel>
                            <Select
                                labelId='expiryMonth-label'
                                id="expiryMonth"
                                value={expiryMonth}
                                label="Expiry Month"
                                onChange={handleChangeExpMonth}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField onChange={handleChangeExpYear} required id={'expiryYear'} label={'Expiry Year'} s/>
                    </Stack>
                </div>
            </Box>
            <Link href={`/checkout?eventID=${eventID}&quantity=${quantity}&cardNum=${cardNum}&cvv=${cvv}&name=${name}&expMonth=${expiryMonth}&expYear=${expiryYear}`}>
                <Button style={{minWidth: '100%', marginTop: '10%'}} variant={'contained'}
                >Checkout</Button>
            </Link>

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
                                {PaymentForm(placeholderEvent.event_id)}
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
