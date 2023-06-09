import Head from 'next/head'
import Header from './layout/header'
import Footer from './layout/footer'
import {Typography} from '@mui/material';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const get_User = async (user_id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/get/user/${user_id}`, {method: 'GET', headers: {'Content-Type': 'application/json', 'Alow-Control-Allow-Origin': '*'}})
    const data = await response.json();
    return data.result.first_name;
}

const login = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    const response = await fetch(`http://127.0.0.1:8000/api/login/${email}/${pass}`, {method: 'GET', headers: {'Content-Type': 'application/json', 'Alow-Control-Allow-Origin': '*'}})
    const data = await response.json();
    if (data.success !== false && data.success !== undefined) {
        localStorage.setItem('first_name', await get_User(data.success));
        localStorage.setItem('user', data.success);
        alert('Login Successful, redirecting to home page.');

        window.location.href = 'http://localhost:3000/';
    } else {
        alert('Login Failed. Please check your email and password and try again.');
        }

}

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login | Ticketbass-Turd</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <Stack alignItems={'center'} justifyContent={'center'} sx={{pt:15, backgroundColor: 'white', p:3, m: '20%', border: '5px solid grey', borderRadius: '25px'}}>
                    <Typography sx={{m:1, color: 'black'}} variant={'h4'}>Login</Typography>
                    <TextField sx={{m:1}} id={'email'} label={'Email'} variant={'outlined'}></TextField>
                    <TextField sx={{m:1}} id={'pass'} label={'Password'} variant={'outlined'}></TextField>
                    <Button sx={{m:1}} variant={'contained'}
                        onClick={() => {
                            login();
                        }}
                        >Login</Button>
                    <Typography sx={{m:1, color: 'black'}} variant={'body1'}>Don't have an account? <a style={{color: 'blue'}} href={'/register'}>Register now</a></Typography>
                </Stack>
                <Footer/>
            </main>
        </>
    )
}
