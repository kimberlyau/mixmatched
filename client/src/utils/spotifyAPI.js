import qs from 'qs';
import { Buffer } from 'buffer';

// require('dotenv').config();

// Spotify Config Resource: https://ritvikbiswas.medium.com/connecting-to-the-spotify-api-using-node-js-and-axios-client-credentials-flow-c769e2bee818

const client_id = 'fe05e602a02340b7a752fcaca3552555'; // Your client id
const client_secret = '932a945dcbe647b6b482f8d3f5238418'; // Your secret

// const client_id = process.env.SPOTIFY_API_ID; // Your client id
// const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const auth_token = Buffer.from(
    `${client_id}:${client_secret}`,
    'utf-8'
).toString('base64');

// https://www.youtube.com/watch?v=4K33w-0-p2c
const getAuth = async () => {
    const promise = new Promise((resolve, reject) => {
        // make post request to SPOTIFY API for access token
        const token_url = 'https://accounts.spotify.com/api/token';
        const data = qs.stringify({ grant_type: 'client_credentials' });

        const xhr = new XMLHttpRequest();
        xhr.open('POST', token_url);
        xhr.setRequestHeader('Authorization', `Basic ${auth_token}`);
        xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        xhr.onload = () => {
            resolve(xhr.response);
        };

        xhr.send(data);
    });
    return promise;
};

const getSingleSpotifyArtist = async (callback, artistId) => {
    // let artistId = '0HthCchcL0kVLHTr113Vk1';
    const access_token = await getAuth();

    console.log(access_token);

    const api_url = `https://api.spotify.com/v1/artists/${artistId}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', api_url);
    console.log('Bearer ' + access_token);
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);

    xhr.onload = () => {
        console.log(xhr.response);
    };

    xhr.send();

    // xhr.open('GET', api_url, false);
    // xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    // xhr.send();
};

export default getSingleSpotifyArtist;
