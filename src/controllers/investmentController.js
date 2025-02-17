const Investment = require("../models/investmentModel");

// Criar um novo investimento
const createInvestment = async (req, res) => {
  try {
    const { name, type, value, investmentDate } = req.body;
    const investment = new Investment({ name, type, value, investmentDate });
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar todos os investimentos
const getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find();
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar investimentos." });
  }
};

// Atualizar um investimento
const updateInvestment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, value, investmentDate } = req.body;

    const investment = await Investment.findByIdAndUpdate(
      id,
      { name, type, value, investmentDate },
      { new: true }
    );
    if (!investment) return res.status(404).json({ message: "Investimento não encontrado." });

    res.json(investment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletar um investimento
const deleteInvestment = async (req, res) => {
  try {
    const { id } = req.params;
    const investment = await Investment.findByIdAndDelete(id);
    if (!investment) return res.status(404).json({ message: "Investimento não encontrado." });

    res.json({ message: "Investimento removido com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createInvestment, getInvestments, updateInvestment, deleteInvestment };