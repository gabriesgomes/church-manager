import User, { IUser } from "../models/User"

class UserService {
  async getAllUsers() {
    return await User.find()
  }
  async findUser(email: string, userName: string) {
    return await User.findOne({ email, userName })
  }
  async createUsers(user: IUser) {
    return await user.save()
  }
  async deleteUser(id: any) {
    return await User.deleteOne(id);
  }
}

export default new UserService();