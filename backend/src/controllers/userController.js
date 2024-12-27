import User from "../models/userModel.js";

// logic for creating new user
export const registerUser = async (req, res)=>{
    const {name, email, password, phoneNumber} = req.body;
    // console.log(req.body)

    try {
        // check to see if user exixts
        const userExists = await User.findOne({email});

        if (userExists){
            return res.status(400).json({message: "User already exists"});
        }

        const user = await User.create({name, email, password, phoneNumber});
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role
        });
        
    } catch (error) {
        res.status(500).json({message: "Error registering, user", error: error.message});
    }
}

export const loginUser = async(req, res)=>{
    const {email, password} = req.body
    console.log(req.body)

    try {
        const user = await User.findOne({email});

        //validate user and password
    
        if(user && user.password === password){
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            });
        }else{
            res.status(401).json({message: "Invalid email or password"});
        }
        
    } catch (error) {
        res.status(500).json({message: "Error loggin in", error: error.message})
        
    }

}

export const getUserDetails = async (req, res)=>{
    console.log(req.params.id)
    try {
        const user = await User.findById(req.params.id);
        if(user) {
            res.status(200).json(user);

        }else {
            res.status(404).json({message:"User not found"});
        }
        
    } catch (error) {
        res.status(500).json({message: "Error fetching user details", error: error.message})
        
    }

};