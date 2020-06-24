import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import gifyParse from 'gify-parse';
import { FileReaderSync } from '../../utils';
import { Store, UPDATE_LIST } from '../../store';
import './index.css';

export default () => {
  const { dispatch } = useContext(Store);
  const onDrop = useCallback(
    async acceptedFiles => {
      const gifList = [];
      acceptedFiles.forEach(async file => {
        const binaryStr = await new FileReaderSync(file).readAsArrayBuffer();
        const src = await new FileReaderSync(file).readAsDataURL();
        const info = gifyParse.getInfo(binaryStr);
        const gifInfo = {
          src,
          width: info.width,
          height: info.height,
          duration: info.duration,
          name: file.name
        };
        gifList.push(gifInfo);

        if (gifList.length === acceptedFiles.length) {
          dispatch({ type: UPDATE_LIST, payload: gifList });
        }
      });
    },
    [dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};
