import type { HttpContext } from '@adonisjs/core/http'

export default class EjemplosController {
  /**
   * Mostrar una lista de recursos
   */
  async index({}: HttpContext) {}

  /**
   * Mostrar el formulario para crear un nuevo registro
   */
  async create({}: HttpContext) {}

  /**
   * Manejar el envío del formulario para la acción de creación
   */
  async store({ request }: HttpContext) {}

  /**
   * Mostrar un registro individual
   */
  async show({ params }: HttpContext) {}

  /**
   * Editar un registro individual
   */
  async edit({ params }: HttpContext) {}

  /**
   * Manejar el envío del formulario para la acción de edición
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Eliminar un registro
   */
  async destroy({ params }: HttpContext) {}
}
