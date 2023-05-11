module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "contactUs",
      mongoose.Schema(
        {
          name: String,
          email: String,
          message: String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };