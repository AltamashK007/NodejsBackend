const Employee = require("../model/EmployeeSchema");

const createEmployee = async (req, res) => {
  console.log("adhjaddhkjdhk", req.body);
  try {
    const employee = await new Employee(req.body);
    await employee.save();

    console.log(employee);

    res.json({
      status: true,
      message: "Employee Created",
      data: employee,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: false,
      message: "Failed To create Employee",
      data: null,
    });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({});
    console.log(employees, "dshadjdhkjha");

    res.json({
      success: true,
      message: "data fetched successfully",
      data: employees,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "failed to fetched data",
      data: null,
    });
  }
};

// const updateEmployee = async (req, res) => {
//   console.log(req.query?.id);
//   const userData = req.body;

//   console.log(userData, "userData");
//   try {
//     // const data = Employee.findById({_id:req.body._id})findByIdAndUpdate
//     const data = await Employee.findByIdAndUpdate(
//       { _id: req.query?.id },
//       { $set: userData },
//       { new: true }
//     );
//     console.log(data, "data");
//     return res.json({
//       success: true,
//       data: data,
//     });



//   } catch (error) {
//     console.log(error.message);
//   }
// };



const updateEmployee = async (req, res) => {
    console.log(req.query?.id);
    const userData = req.body;
  
    console.log(userData, "userData");
    try {
      const data = await Employee.findById({_id:req.query?.id})
      
      data.Name = req.body.Name
    
      data.save()
      console.log(data, "data");
      return res.json({
        success: true,
        data: data,
      });
  
      
  
    } catch (error) {
      console.log(error.message);
    }
  };
  

module.exports = {
  createEmployee,
  getEmployee,
  updateEmployee,
};

