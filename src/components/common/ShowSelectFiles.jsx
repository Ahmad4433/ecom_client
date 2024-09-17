import React, { useState } from "react";
import "./showSelectFiles.css";
import { Skeleton } from "@mui/material";
import { CiSquareRemove } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
const ShowSelectFiles = ({ files, setFiles, showFeatue }) => {
  const imageFeatureHandler = (index) => {
    const copyFiles = [...files];
    const updatedFiles = files.map((item, i) => ({
      ...item, // Spread each item to clone it
      feature: i === index, // Set `feature: true` only for the selected index
    }));

    const prevFeature = updatedFiles.find((item) => {
      return item.feature === true;
    });

    if (prevFeature) {
      prevFeature.feature = false;
    }
    const findedItem = copyFiles[index];

    findedItem.feature = true;
    setFiles(copyFiles);
  };

  const fileDeleteHandler = (index) => {
    const prevFiles = [...files];
    prevFiles.splice(index, 1);

    setFiles(prevFiles);
  };

  return (
    <div className="show_files_main">
      {files?.map((item, index) => {
        return (
          <div key={index} className="select_file_container">
            <div className="iselected_file_overlay"></div>
            <CiSquareRemove
              style={{ display: item.url === null && "none" }}
              onClick={() => fileDeleteHandler(index)}
              className="select_file_delete"
            />
            {item?.url ? (
              <img className="select_file" src={item.url} />
            ) : (
              <Skeleton variant="rectangular" width={80} height={80} />
            )}
            {showFeatue && (
              <IoIosStarOutline
                style={{
                  backgroundColor: item?.feature && "gold",
                  display: item.url === null && "none",
                }}
                onClick={() => imageFeatureHandler(index)}
                className="feature_star"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ShowSelectFiles;
