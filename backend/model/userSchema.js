

const mongoose=require('mongoose');

const userSchema= mongoose.Schema({

    title:{
        type:String,
        require:true,
        unique:true,
    },

    tasks:{
        type:[String],
        default:[undefined,"There is no Task right now"],
    }
})

module.exports=mongoose.model('User',userSchema);