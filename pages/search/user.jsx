import Head from 'next/head'
import Header from '../layout/header'
import Footer from '../layout/footer'
import {Card, grid2Classes, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";

export function getSearch() {
    const [data, setData] = useState([]);
    useEffect(() => {
        document.getElementById('query_placeholder').innerHTML = localStorage.getItem('query');
        const fetchData = () => {
            fetch(`http://localhost:8000/api/search/users/${localStorage.getItem('query')}`, {method: 'GET', headers: {'Content-Type': 'application/json', 'Alow-Control-Allow-Origin': '*'}})
                .then(data => data.json())
                .then(data => data.result)
                .then(data => {
                    setData(data);
                })
        };
        fetchData();
    }, []);
    return (
        data.map((item) => {
                return (
                    <Grid2 item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Card sx={{m: 1, p: 1, border: '1px solid grey', borderRadius: '25px', boxShadow: 2, width: '40em'}}>
                            <Stack alignItems={'left'} justifyContent={'left'} sx={{pt: 1, backgroundColor: 'white', p: 3, m: 1, border: '1px solid grey', borderRadius: '25px', boxShadow: 2}}>
                                <Typography sx={{m: 1, color: 'black'}} variant={'h6'}>{`${item.first_name} ${item.last_name}`}</Typography>
                                <Typography sx={{m: 1, color: 'black'}} variant={'body1'}>{`Email: ${item.email}`}</Typography>
                                <Link href={`/user?id=${item.user_id}`}>
                                    <Button sx={{m: 1, color: 'black'}} variant={'contained'}>View Host</Button>
                                </Link>
                            </Stack>
                        </Card>
                    </Grid2>
                )
            }
        ))
};


export default function UserSearch() {
    return (
        <>
            <Head>
                <title>Search Host | Ticketbass-Turd</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <Stack id='results' alignItems={'center'} spacing={2} sx={{mt: 5}}>
                    <Typography variant={'h5'}>Host Results for:</Typography>
                    <Typography id='query_placeholder' variant={'h4'}>N/A</Typography>
                </Stack>
                <Stack id='results' alignItems={'center'} spacing={2} sx={{mt: 5}}>
                    {getSearch()}
                </Stack>
                <Footer />
            </main>
        </>
    )
}
