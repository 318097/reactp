import React, { useState, useEffect, memo } from "react";

const Parent = () => {
  const [data1, setData] = useState({
    visible: true
  });
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState("Hello");

  const handleUpdateData1 = () => {
    setData({ visible: true }); // triggers the re-render
  };

  const handleUpdateData2 = () => {
    setData2((prev) => prev + 1);
  };

  const handleUpdateData3 = () => {
    setData3("Hello");
  };

  const props = {
    data1,
    data2,
    data3
  };

  return (
    <div>
      <div className="fcc">
        <button onClick={handleUpdateData1}>Update Data 1</button>
        <button onClick={handleUpdateData2}>Update Data 2</button>
        <button onClick={handleUpdateData3}>Update Data 3</button>
      </div>
      <div>Data 1: {JSON.stringify(data1, undefined, 2)}</div>

      <div>Data 2: {data2}</div>
      <div>Data 3: {data3}</div>

      <Child {...props} />
      <ChildMemo {...props} />
    </div>
  );
};

const Child = (props) => {
  const { data1, data2 } = props;
  // useEffect(() => {
  //   console.log("Child effect", props);
  // }, [data1]);
  console.log("Child re-render..");
  return null;
};

const ChildMemo = memo((props) => {
  const { data1, data2 } = props;
  // useEffect(() => {
  //   console.log("Child effect (memoized)", props);
  // }, [data1]);
  console.log("Child memoized re-render..");
  return null;
});

export default Parent;
