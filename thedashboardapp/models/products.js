import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
  {
    
    name: { type: String, required: true, trim: true, minlength: 2, lowercase: true },
   
    description: { type: String, required: true,  lowercase: true},

    type: {type:String, required:true, lowercase:true},
    
    quantity : {type:Number,required: true, trim: true},
   
    price: { type: Number, required: true, trim: true},

    image: {type:String, trim:true}

  },
  { timestamps: true }
);

const Products = mongoose.models.Users || mongoose.model('Users', productsSchema);

export default Products;
