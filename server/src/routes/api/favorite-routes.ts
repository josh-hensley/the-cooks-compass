import express from 'express';
import {
  getAllFavorites,
  getFavoriteById,
  createFavorite,
  deleteFavorite,
} from '../../controllers/favorite-controller.js';

const router = express.Router();

// GET /Favoritess - Get all Favoritess
router.get('/', getAllFavorites);

// GET /Favoritess/:id - Get a Favorites by id
router.get('/:id', getFavoriteById);

// POST /Favoritess - Create a new Favorites
router.post('/', createFavorite);

// DELETE /Favoritess/:id - Delete a Favorites by id
router.delete('/:id', deleteFavorite);

export { router as FavoritesRouter };
