const express = require("express");
const router = express.Router();
const Investment = require("../models/investmentModel");

/**
 * @swagger
 * tags:
 *   name: Investimentos
 *   description: Gerenciamento de investimentos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Investment:
 *       type: object
 *       required:
 *         - name
 *         - type
 *         - value
 *         - investmentDate
 *       properties:
 *         _id:
 *           type: string
 *           description: ID gerado automaticamente pelo MongoDB
 *         name:
 *           type: string
 *           description: Nome do investimento
 *         type:
 *           type: string
 *           enum: [Ação, Fundo, Título]
 *           description: Tipo do investimento
 *         value:
 *           type: number
 *           description: Valor investido
 *         investmentDate:
 *           type: string
 *           format: date
 *           description: Data do investimento
 *         __v:
 *           type: number
 *           description: Versão do documento (usado internamente pelo Mongoose)
 *       example:
 *         _id: 67b3bfc44cd613d3e360b9f6
 *         name: Fundo X
 *         type: Fundo
 *         value: 1000
 *         investmentDate: 2023-10-01T00:00:00.000Z
 *         __v: 0
 */

/**
 * @swagger
 * /api/investments:
 *   post:
 *     summary: Cria um novo investimento
 *     tags: [Investimentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Investment'
 *     responses:
 *       201:
 *         description: Investimento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Investment'
 *       400:
 *         description: Erro de validação
 *       500:
 *         description: Erro interno no servidor
 */
router.post("/investments", async (req, res) => {
  try {
    const { name, type, value, investmentDate } = req.body;
    const investment = new Investment({ name, type, value, investmentDate });
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/investments:
 *   get:
 *     summary: Retorna todos os investimentos
 *     tags: [Investimentos]
 *     responses:
 *       200:
 *         description: Lista de investimentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Investment'
 *       500:
 *         description: Erro interno no servidor
 */
router.get("/investments", async (req, res) => {
  try {
    const investments = await Investment.find();
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar investimentos." });
  }
});

/**
 * @swagger
 * /api/investments/{id}:
 *   put:
 *     summary: Atualiza um investimento existente
 *     tags: [Investimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do investimento a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Investment'
 *     responses:
 *       200:
 *         description: Investimento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Investment'
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Investimento não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.put("/investments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, value, investmentDate } = req.body;
    const investment = await Investment.findByIdAndUpdate(
      id,
      { name, type, value, investmentDate },
      { new: true }
    );
    if (!investment) return res.status(404).json({ message: "Investimento não encontrado." });
    res.status(200).json(investment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/investments/{id}:
 *   delete:
 *     summary: Remove um investimento
 *     tags: [Investimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do investimento a ser removido
 *     responses:
 *       200:
 *         description: Investimento removido com sucesso
 *       404:
 *         description: Investimento não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.delete("/investments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const investment = await Investment.findByIdAndDelete(id);
    if (!investment) return res.status(404).json({ message: "Investimento não encontrado." });
    res.status(200).json({ message: "Investimento removido com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;