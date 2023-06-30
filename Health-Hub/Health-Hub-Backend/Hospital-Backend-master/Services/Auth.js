const {User} = require("../Models/")
const bcrypt = require("bcrypt")

const login = async (email,password)=>{
    const response={}
    try{
          
        const data = await User.findAll({where:{email}})

        if (data[0] != null) {
            comparering = await bcrypt.compare(password, data[0].password);
        }

        if (comparering) {
            console.log("data",data,comparering)
            response.status = 200,
            response.data = { msg: "Login Successfull", data: data}
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
            response.data = { msg: "Login failed" }
            return response

        }
    }catch(err){ 
        console.log(err);
        response.status=400
        response.data={status: false, message: "Error "+err.message}
        return response;
    }
}

module.exports = {login}