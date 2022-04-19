$("#loginform").validate({
    rules:{
        email:{
            required:true,
            email:true
        },
        username:{
            required:true
        },
        password:{
            required:true,
            minlength:6
        }
    },
    
})