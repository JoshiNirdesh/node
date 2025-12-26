import { userList } from "../model/userModel.js";

export function getUser(req,res){
    const list = userList();
    res.render("user",{users:list});
}