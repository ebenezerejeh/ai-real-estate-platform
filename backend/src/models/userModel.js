import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema(
    {
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email address",

        ],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]

    },
    role:{
        type: String,
        enum: ["admin", "agent", "user"],
        default: "user",
    },
    phoneNumber:{
        type: String,
        required: [true, "phhone Number is required"],
        match: [
            /^\+?\d{10,15}$/,
            "Please provide a valid phone number with counntry code"

        ],
    },
    profilePicture: {
        type: String,
    },
    favoriteProperties: [{ type: Schema.Types.ObjectId, ref:"property"}],
    notifications: [{
        message: { type: String, required: true },
        read: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },

    }]

},
    {
        timestamps: true
    }
    );

    const User = mongoose.model("User", userSchema);
    export default User;