import React, { useEffect, useRef, useState } from "react";
import "./fileSelect.css";
import ShowSelectFiles from "./ShowSelectFiles";
import { IoMdCloudUpload } from "react-icons/io";
import httpAction from "../../utils/httpAction";
import apiActions from "../../utils/apiActions";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";

const FileSelect = ({
  multiple,
  files,
  title,
  setFiles,
  showFeatue,
  replaceOld,
}) => {
  const { dispatch } = useProvideGeneralHooks();
  const fileRef = useRef();
  const fileClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const fileSelectChange = async (event) => {
    const slicedFiles = Array.from(event.target.files).slice(
      0,
      6 - files.length
    );

    // Add the new files to the preview state as skeletons
    const newPreviews = slicedFiles.map((file, index) => ({
      url: null, // Initial placeholder (skeleton)
      feature: false,
    }));

    // Update preview state with skeletons
    if (replaceOld) {
      setFiles(newPreviews);
    } else {
      setFiles((prev) => [...prev, ...newPreviews]);
    }

    // Function to upload files one by one
    async function uploadFiles(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Upload file and get result
        const result = await dispatch(
          httpAction(apiActions().uploadImages(file))
        );
        
        // Update preview with the actual image URL after upload
        if (result?.status) {
          setFiles((prevPreview) => {
            // Update the correct index in preview state
            const updatedPreview = [...prevPreview];
            updatedPreview[prevPreview.length - files.length + i] = {
              url: result?.files[0],
              feature: false,
            };
            return updatedPreview;
          });
        }
      }
    }

    // Start uploading files
    uploadFiles(slicedFiles);
  };

  return (
    <div className="selected_files_main">
      <div className="file_upload_container" onClick={fileClick}>
        <IoMdCloudUpload className="file_upload_icon" />
        <span>{title}</span>
        <input
          type="file"
          multiple={multiple}
          accept="image/png,image/jpg,image/jpeg"
          style={{ display: "none" }}
          onChange={fileSelectChange}
          ref={fileRef}
      
          
        />
      </div>
      <div className="file_preview_container">
        <ShowSelectFiles
          showFeatue={showFeatue}
          setFiles={setFiles}
          files={files}
        />
      </div>
    </div>
  );
};

export default FileSelect;
