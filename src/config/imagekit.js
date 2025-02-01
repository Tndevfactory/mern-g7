// https://imagekit.io/dashboard/developer/api-keys
//Private key:   private_KHpli3D5I+NkmzTamj4PH3RM9zM=
//Public key:    public_erTQtgGV29R5wWJOI+vbjhEnLH8=

//In order to use the SDK, you need to provide it with a few configuration parameters.
//The configuration parameters can be applied directly to the IKImage component or using
//an IKContext component.
// npm install imagekitio-react

<IKContext
  publicKey="public_erTQtgGV29R5wWJOI+vbjhEnLH8="
  urlEndpoint="https://ik.imagekit.io/tndev"
  transformationPosition="path"
  authenticationEndpoint="http://www.yourserver.com/auth"
>
  // Image component
  <IKImage
    path="/default-image.jpg"
    transformation={[
      {
        height: "300",
        width: "400",
      },
    ]}
  />
  // Image upload
  <IKUpload fileName="my-upload" />
</IKContext>;

// node js
// SDK initialization

// var ImageKit = require("imagekit");
// var imagekit = new ImageKit({
//   publicKey: "public_erTQtgGV29R5wWJOI+vbjhEnLH8=",
//   privateKey: "private_KHpli3D5I+NkmzTamj4PH3RM9zM=",
//   urlEndpoint: "https://ik.imagekit.io/tndev",
// });

import React, { useState } from "react";
import axios from "axios";

const ImageKitUpload = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const publicKey = "your_public_api_key";
  const uploadUrl = "https://upload.imagekit.io/api/v1/files/upload";

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      setErrorMessage("No file selected.");
      return;
    }

    // Validate file type (e.g., images only)
    if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
      setErrorMessage("Invalid file type. Only JPEG and PNG are allowed.");
      setFile(null);
      return;
    }

    // Validate file size (e.g., max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (selectedFile.size > maxSize) {
      setErrorMessage("File size exceeds 5MB.");
      setFile(null);
      return;
    }

    setErrorMessage("");
    setFile(selectedFile);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setErrorMessage("No file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    formData.append("publicKey", publicKey); // Use API key for authentication

    try {
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      });

      console.log("Upload successful:", response.data);
      setUploadedImageUrl(response.data.url);
      setErrorMessage("");
      setUploadProgress(0);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error);
      setErrorMessage("Failed to upload the file.");
    }
  };

  return (
    <div>
      <h2>ImageKit File Upload</h2>

      <input type="file" onChange={handleFileChange} />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {file && (
        <div>
          <p>Selected File: {file.name}</p>
          <p>File Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
        </div>
      )}

      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>

      {uploadProgress > 0 && (
        <div>
          <p>Upload Progress: {uploadProgress}%</p>
        </div>
      )}

      {uploadedImageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={uploadedImageUrl}
            alt="Uploaded File"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageKitUpload;
