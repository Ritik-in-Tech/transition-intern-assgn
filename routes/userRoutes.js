const express = require("express");
const router = express.Router();
const {
  addUser,
  editUser,
  updateUser,
} = require("../controllers/userController");

/**
 * @swagger
 * /api/add-user:
 *   post:
 *     summary: Add a new user
 *     description: Endpoint to add a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 newuser:
 *                   type: object
 *       '404':
 *         description: Invalid request body or missing fields
 *       '400':
 *         description: User with this email already exists
 *       '500':
 *         description: Internal server error
 */
router.post("/add-user", addUser); // to add new user

/**
 * @swagger
 * /api/edit-user:
 *   put:
 *     summary: Edit user details
 *     description: Endpoint to edit user details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User edited successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 editedUser:
 *                   type: object
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.put("/edit-user", editUser); // to edit the user details

/**
 * @swagger
 * /api/update-user:
 *   patch:
 *     summary: Update user details
 *     description: Endpoint to update user details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 updateduser:
 *                   type: object
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.patch("/update-user", updateUser); // to update the user details

module.exports = router;
