// src/components/ImageDropzone.js
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import './style.css'
const Search = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setLoading(true);
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      setImageName(file.name);
      setLoading(false);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Drop an image here, or click to select an image</p>
      </div>
      {loading && <div className="spinner"></div>}
      {image && !loading && (
        <div style={previewStyle} className="flex h-[50vh] flex-col items-center justify-center">
          
          <div>
            <img
              className="flex items-center justify-center w-[200px]"
              src={image}
              alt={imageName}
              style={imageStyle}
            />
          </div>
          {imageName === "missing.jpg" ? (
            <h1 className="font-bold text-basic text-lg">Image is Found in Shelter ....</h1>
          ) : (
            <h1 className="font-bold text-Error text-lg">Image not found</h1>
          )}
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  width: "50%",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  margin: "auto", 
  marginTop: "20px" 
};

const previewStyle = {
  marginTop: "20px",
  textAlign: "center",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "400px",
  marginTop: "10px",
};

export default Search;

