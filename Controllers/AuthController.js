

module.exports={
    // add user 

    AddUser :async(req, res, next)=>{
        try{
            const {Email, Password} = req.body;
            const exists = await user.findOne({where: {Email}})
            if (exists) {
                throw createHttpError.Conflict(`${Email} has already been reqistered`)
            }
            const newUser = new user({Email, Password})
            const savedUser = await newUser.save()

            const accessToken = await signAccessToken(savedUser.user_id)
            res.status(200).send({accessToken})
        } catch (error) {
            next(error)
        }
    },
}