import { Request, Response } from 'express';
import { Favorite } from '../models/favorite.js';

// GET /Favorites
export const getAllFavorites = async (_req: Request, res: Response) => {
  try {
    const Favorites = await Favorite.findAll();
    res.json(Favorites);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /Favorites/:id
export const getFavoriteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const favorite = await Favorite.findByPk(id);
    if (favorite) {
      res.json(favorite);
    } else {
      res.status(404).json({ message: 'Favorite not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /Favorites
export const createFavorite = async (req: Request, res: Response) => {
  const { name, id } = req.body;
  try {
    const newFavorite = await Favorite.create({ name, id });
    res.status(201).json(newFavorite);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /Favorites/:id
export const deleteFavorite = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const favorite = await Favorite.findByPk(id);
    if (favorite) {
      await favorite.destroy();
      res.json({ message: 'Favorite deleted' });
    } else {
      res.status(404).json({ message: 'Favorite not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
