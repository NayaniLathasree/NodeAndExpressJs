const employeeModel = require('../models/employee')
const departmentModel = require('../models/department')

const saveEmployeeDetails = async(req,res,next)=>{
    const {ename,salary,gender,department} = req.body
    try{
        const emp = new employeeModel({
            ename,salary,gender
        })
        const employeeData= await emp.save()
        const dept = new departmentModel({
            dname:department.dname,
            dLoc:department.dLoc,
            empid:department.empid
        })
        const departmentData = await dept.save()
        res.json({
            error:false,
            message:"employee data saved Successfully",
            data:{
                departmentData,employeeData
            }
        })
    }catch(err){
        next(err)
    }
}
const getEmployeeDataUsingDepatmentModel = async(req,res,next)=>{
    const {empid}=req.body
    try{
            const employeeData = await departmentModel.find({empid}).populate('employee')
            res.json({
                error:false,
                message:'fetch Successful',
                data:employeeData
            })

    }catch(err){
        next(err)
    }
}
module.exports =  {
    saveEmployeeDetails,getEmployeeDataUsingDepatmentModel
}