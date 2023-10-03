import cloudinary from 'cloudinary-core';

const cloudinaryConfig = {
    cloud_name: 'your_cloud_name',
    api_key: 'your_api_key',
    api_secret: 'your_api_secret',
};

const cl = new cloudinary.Cloudinary(cloudinaryConfig);