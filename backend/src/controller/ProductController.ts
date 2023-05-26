import { Request, Response } from 'express'
import { prismaClient } from '../utils/prismaClient'

export class ProductController {
  async store(req: Request, res: Response) {
    try {
      const { id, name, price } = req.body

      const product = await prismaClient.product.create({
        data: {
          id,
          name,
          price
        }
      })

      return res.json({ product })
    } catch (error) {
      console.log(error)
    }
  }

  async index(req: Request, res: Response) {
    const products = await prismaClient.product.findMany()

    return res.json({ products })
  }
}
