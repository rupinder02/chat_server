const Joi = require('joi');

( async () => {
    try {
        const schema = Joi.object({
            username: Joi.string().alphanum().min(2).max(10).required(),
            password: Joi.string().pattern(new RegExp('')),
            email: Joi.string().email()
        });
    
        await schema.validateAsync({ username: 'abhi', email: 'ravi@gmai'});
    } catch(err){
        console.log(err);
    }
    
})();