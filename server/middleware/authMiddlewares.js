import User from "../models/User.js";

export const authUser = async (req, res, next) => {
  try {
    const { userId } = req.auth();
    if (!userId) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // auto promote to owner if email matches env owner email
    const ownerEmail = process.env.ADMIN_EMAIL;
    const newRole = ownerEmail && user.email === ownerEmail ? "owner" : "user";

    if (user.role !== newRole) {
      // return the uppdated doc immediately
      user = await User.findByIdAndUpdate(
        userId,
        { role: newRole },
        { new: true }
      );
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    
    res.json({ success: false, message: error.message });
  }
};
export default authUser;