
import mongoose, {Schema} from "mongoose";

import mongooseAggregatePaginate from 
"mongoose-aggregate-paginate-v2";

const videoSchema = new Schema ( 
    {
          videoFile:{
            type:String,   // cloudinary url
            require : true,
          },
          thumbnail:{
            type:String,   // cloudinary url
            require : true,
          },

           owner:{
            type: Schema.Types.ObjectId,
            ref: "owner"
           },

           title:{
            type:String,   
            require : true,
           },

           description:{
            type:String,   
            require : true,
           },

           duration:{
            type:Number,   // cloudinary 
            default: 0
           },

           duration:{
            type:Boolean,   
            default:true
           },




},
{
    timestamps: true
}

)

videoSchema.plugin(mongooseAggregatePaginate)

export  const Video = mongoose.model("video", videoSchema)