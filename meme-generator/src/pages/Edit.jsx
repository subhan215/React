import React, { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import { Button } from "react-bootstrap";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import Draggable from "react-draggable";
import '../App.css';

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  
  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: "1000px", margin: '0 auto' }}>
      <ResizableBox 
        width={800}
        height={300} 
        minConstraints={[300, 300]} 
        maxConstraints={[1000, 1000]}
        className="mem mt-5 mb-3" 
        style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', margin: '0 auto', position: 'relative' }}
      >
        <div ref={memeRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Draggable>
              <img src={params.get("url")} alt="" style={{ width: '300px', height: '100%', maxHeight: "300px"  }} />
          </Draggable>
          {Array(count).fill(0).map((_, index) => <Text key={index} />)}
        </div>
      </ResizableBox>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
  );
};

export default EditPage;
