const mongoose = require("mongoose");

const WidgetSchema = mongoose.Schema(
    {
        name: String,
        developerId: { type: mongoose.Schema.Types.ObjectId, ref:
        "Usermodel" },
        description: String,
        dateCreated: { type: Date, default:
        Date.now }
    },
    { collection: "widget" }
);

module.exports = WidgetSchema;