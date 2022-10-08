const { Schema, default: mongoose}  = require('mongoose');
const assert = require('assert');

const userSchema = new Schema({
    phone: {
      type: String,
    //   validate: {
    //     validator: function(v) {
    //       return /\d{3}-\d{3}-\d{4}/.test(v);
    //     },
    //     message: props => `${props.value} is not a valid phone number!`
    //   },
    validate: {
        validator: (v) => {
            return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
    },
      required: [true, 'User phone number required']
    }
  });
  
  const User = new mongoose.model('user', userSchema);
  const user = new User();
  let error;
  
  user.phone = '555-012-2343';
  error = user.validateSync();
  console.log('error: ', error);
//   assert.equal(error.errors['phone'].message,
//     '555.0123 is not a valid phone numbe!');
  
userSchema.pre('save', () => {
    console.log(this.phone);
});

user.save();

// db.orders.aggregate([
//     { $match: { status: "A" } },
//     { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
//     { $sort: { total: -1 } }
//   ])

// statics -> models, methods -> instances

// userSchema.statics.myfunc = () => { // do something }
// userSchema.methods.myfunc = () => { // do something }
