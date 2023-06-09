const router = require("express").Router();
const User = require("./userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    var emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).json("email already exist");
    }
    var hash = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    var data = await user.save();
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }

  res.json(User);
});

router.post("/login", async (req, res) => {
  try {
    var userData = await User.findOne({ email: req.body.email });
    if (!userData) {
      return res.status(400).json("email not found");
    }
    var validpass = await bcrypt.compare(req.body.password, userData.password);
    if (!validpass) {
      return res.status(400).json("password not matched");
    }

    var userToken = jwt.sign({ email: userData.email }, "mysecrete");

    res.header("auth", userToken).send(userToken);
  } catch (err) {
    res.status(400).json(err);
  }
});

const validUser=(req, res, next)=> {
    var token= req.header("auth");
    req.token=token;
    next();
}
router.get("/getAll",validUser, async(req, res)=> {
    jwt.verify(req.token,"mysecrete",async (err,data)=>{
        if(err){
            res.sendStatus(403)
        }else{
            const users= await User.find().select(["-password"]);
            res.json(users);
        }
    })
    const data=await User.find();
    res.json(data)
})


module.exports = router;
