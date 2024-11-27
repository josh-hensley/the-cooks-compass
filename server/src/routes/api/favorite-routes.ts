import express from 'express';
import {
  getAllFavorites,
  getFavoriteById,
  createFavorite,
  deleteFavorite,
} from '../../controllers/favorite-controller.js';

const router = express.Router();

// GET /Favoritess - Get all Favorites
router.get('/', getAllFavorites);

// GET /Favoritess/:id - Get a Favorite by id
router.get('/:id', getFavoriteById);

// POST /Favoritess - Create a new Favorite
router.post('/', createFavorite);

// DELETE /Favoritess/:id - Delete a Favorite by id
router.delete('/:id', deleteFavorite);

export { router as favoritesRouter };
