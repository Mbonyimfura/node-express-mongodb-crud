const mongoose=require('mongoose')
const employeeSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required: 'This field is required.'
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
})

//custom validation for email
employeeSchema.path('email').validate((val)=>{
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return emailRegex.test(val)
},'Invalid email')
mongoose.model('Employee',employeeSchema)