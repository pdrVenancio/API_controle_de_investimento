const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ["Ação", "Fundo", "Título"] },
    value: { type: Number, required: true, min: [0, "O valor investido deve ser maior que 0."] },
    investmentDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "A data do investimento não pode estar no futuro."
        }
    },
});

const Investment = mongoose.model("Investment", InvestmentSchema);
module.exports = Investment;
