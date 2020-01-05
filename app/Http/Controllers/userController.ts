
class UserController{

    index(req: any, res: any ) {
        res.status(200).json(req.body)
    }
}

const userController = new UserController();
export default userController;