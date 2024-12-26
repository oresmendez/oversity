
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import * as apiRest from '@/app/utils/apiRest';

export const startSession = async (email, password, setUserData, router) => {
    const loadingToastId = toast.loading('Cargando datos...');

    try {
        
        

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = await apiRest.fetchPost('http://localhost:3333/ovacademy/auth/login', {
            email,
            password,
        });

        if (data.success) {
            const restante = 5 / 86400;
            console.log(restante);
            Cookies.set('user-data', JSON.stringify(data), {
                // expires: restante, // 5 segundos
                expires:  0.0833, // 2h, divide 2/24 =  0.0833
                // expires: 7, //7 dias
                secure: true,
                sameSite: 'Strict',
            });

            const cookieData = Cookies.get('user-data');
            if (cookieData) {
                const parsedData = JSON.parse(cookieData);
                setUserData(parsedData);
                console.log('Datos cargados desde la cookie:', parsedData);
            }

            toast.dismiss(loadingToastId);
            // window.location.href = 'http://localhost:3333/view-dashboard';

            const dataux = await apiRest.fetchGet('http://localhost:3333/view-dashboard');
            console.log(dataux);

            if (dataux.success) {
                router.push('/view-dashboard');
            }else{
                toast.error(dataux.message);
            }
            

        } else {
            toast.dismiss(loadingToastId);
            toast.error('Credenciales inválidas');
        }
    } catch (err) {
        toast.dismiss(loadingToastId);
        toast.error('Error al conectar con el servidor');
        console.error('Error:', err);
    }
};
