import { HttpContext } from '@adonisjs/core/http'
import Authentication from '../../backend/app/models/authentication.js'
import User from '../../backend/app/models/user.js'

export default class AuthenticationController {
  // Método para devolver todos los registros
    public async index({ response }: HttpContext) {
      try {
        const registros = await Authentication.all()

        // console.log('ID:', response.id);
        // console.log('Email:', response.email);
        // console.log('Password almacenado:', response.password);
        
        return response.status(200).json(registros)
      } catch (error) {
        return response.status(500).json({ message: 'Error al obtener los registros', error: error.message })
      }
    }

  /**
   * Handle form submission for the create action
   */
    public async store({ request, response }: HttpContext) {
      try {
        // Extraer datos del request
        const { nombreUsuario, correoElectronico, contrasenaHash } = request.only([
          'nombreUsuario',
          'correoElectronico',
          'contrasenaHash',
        ]);
    
        // Crear el registro en la base de datos
        const authentication = await Authentication.create({
          nombreUsuario,
          correoElectronico,
          contrasenaHash,
        });
    
        // Devolver el registro creado en la respuesta
        return response.status(201).json({
          message: 'Registro creado exitosamente',
          data: authentication,
        });
      } catch (error) {
        // Manejar errores y devolver una respuesta de error
        return response.status(500).json({
          message: 'Error al crear el registro',
          error: error.message,
        });
      }
    }

    public async user({ request, response }: HttpContext) {
      try {
        // Extraer datos del request
        const { name, email, password } = request.only([
          'name',
          'email',
          'password',
        ]);
    
        // Crear el registro en la base de datos
        const authentication = await User.create({
          name,
          email,
          password,
        });
    
        // Devolver el registro creado en la respuesta
        return response.status(201).json({
          message: 'Registro creado exitosamente',
          data: authentication,
        });
      } catch (error) {
        // Manejar errores y devolver una respuesta de error
        return response.status(500).json({
          message: 'Error al crear el registro',
          error: error.message,
        });
      }
    }
    
    public async test({ request, response }: HttpContext) {

      console.log(request.all());
      

    }
    



  
}

export default class Sesiones {

    async authorizeUser({ request }: HttpContext) {

        const simulatedRequest: { only: (keys: string[]) => Record<string, any> } = {
            only(keys: string[]) {
                const data: Record<string, string> = {
                    email: "administrator@example.com",
                    password: "hashed_password_3",
                    test1: "value1",
                    test2: "value2", // Añade más claves y valores aquí
                };
        
                return keys.reduce((result: Record<string, any>, key: string) => {
                    if (data[key] !== undefined) {
                        result[key] = data[key];
                    }
                    return result;
                }, {});
            },
        };
        const { email, password} = simulatedRequest.only([ 'email', 'password']);

        // const { email, password} = request.only([ 'email', 'password']);
        

        return await sesiones_.verificar_password(email, password);

    }