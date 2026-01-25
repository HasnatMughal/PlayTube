import { v2 as cloudinaryService } from "cloudinary";
import fs from "fs"

cloudinaryService.config({
    cloud_name : process.env.CLOUDDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDDINARY_API_KEY,
    api_secret : process.env.CLOUDDINARY_API_SECRET
})

const uploadFile = async (file) => {
    try {
        if(!file) return null
        const response = await cloudinaryService.uploader.upload(file,
            {
                resource_type: "auto"
        })
        console.log( "File uploaded successfuly", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(file)
        return null
    }
}