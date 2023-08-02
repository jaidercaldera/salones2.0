const { Schema, model } = require("mongoose");

const BloqueSchema = new Schema(
  {
    bloque: { type: String, required: true, trim: true },
    salones: [{ type: Schema.Types.ObjectId, ref: "Salon" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Bloque", BloqueSchema);
