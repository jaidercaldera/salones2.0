const SalonSchema = new Schema(
  {
    salon: { type: String, required: true, trim: true },
    Bloque: { type: mongoose.Schema.Types.ObjectId, ref: "Bloque" },
    sensores: { type: Array, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Salon", SalonSchema);
