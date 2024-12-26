import { toast } from 'sonner';
import Cookies from 'js-cookie';

const getTokenFromCookies = () => {
    const cookieData = Cookies.get('user-data');
    if (!cookieData) return '';
    try {
        const parsedData = JSON.parse(cookieData);
        return parsedData?.token || '';
    } catch (error) {
        console.error('Error al parsear cookies:', error);
        return '';
    }
};

export const fetchGet = async (url) => {
    const token = getTokenFromCookies();

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Token': token,
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`Respuesta GET: ${data}`);
        return data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

export const fetchPost = async (url, bodyData) => {
    const token = getTokenFromCookies();

    console.log(`Datos Recibidos: ${JSON.stringify(bodyData)}`);

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Token': token,
            },
            body: JSON.stringify(bodyData),
        });

        response = await response.json();
        console.log(`Respuesta POST: ${response}`);
        return response;
    } catch (err) {
        toast.error('Error en la petición POST');
        return false;
    }
};
