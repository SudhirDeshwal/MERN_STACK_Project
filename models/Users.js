const mongoose = require('mongoose');
const crypto = require('crypto')
const uuid = require('uuid');
// User schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
  },
  email: {
      type: String,
      trim: true,
      required: true,
      unique: true
  },
  encryp_password: {
      type: String,
      required: true
  },
  about: {
      type: String,
      trim: true
  },
  randomStr: String,
  role: {
      type: Number,
      default: 0
  },
  history: {
      type: Array,
      default: []
  }
},
{ timestamps: true }
);

//to encrypt the password using uuid
UserSchema.virtual('password')
    .set(function(password) {
        this._password = password;
        this.randomStr = uuid.v4();
        this.encryp_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

    UserSchema.methods = {


        //macth the encryptPassword
        authenticate: function(plainText) {
            return this.encryptPassword(plainText) === this.encryp_password;
        },


          //function to encryptPassword
      encryptPassword: function(password) {

        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.randomStr)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
      }
    
    }








module.exports = mongoose.model("Users", UserSchema);