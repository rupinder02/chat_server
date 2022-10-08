const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema({
    email: String
  });
  // Create a virtual property `domain` that's computed from `email`.
//   userSchema.virtual('domain').get(function() {
//     return this.email.slice(this.email.indexOf('@') + 1);
//   });
// userSchema.virtual('domain').get(() => {
//     return this.email.split('@')[1];
// })

  const User = mongoose.model('User', userSchema);

( async () => {
    await mongoose.connect('mongodb://localhost:27017/chatDb');
    let doc = await User.create({ email: 'test@gmail.com' });
  // `domain` is now a property on User documents.
//   doc.domain; // 'gmail.com
console.log(doc.domain);
})();