const { Schema, model } = require("mongoose");
const SalonSchema = new Schema(
  {
    salon: { type: String, required: true, trim: true },
    bloque: { type: String, required: true, trim: true }
    //sensores: { type: Array, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Salon", SalonSchema);
