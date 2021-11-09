import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'


const ImageDropZone = ({ setFile }) => {
  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  }, [setFile])
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop, accept: "image/*", maxFiles:1})

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
        <div>
          <h6>Drop the files here ...</h6> 
          <i className="material-icons medium">photo</i>
        </div>
    </div>
  )
}

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4em',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#F6F8FB',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default ImageDropZone;
