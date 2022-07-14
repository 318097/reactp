import React, { useState, useEffect, memo } from "react";

const Parent = () => {
  const [data, setData] = useState({
    // visible: true
  });
  const [data2, setData2] = useState(0);

  const handleUpdateData1 = () => {
    setData({ visible: true }); // triggers the re-render
  };

  const handleUpdateData2 = () => {
    setData2((prev) => prev + 1);
  };

  console.log({ data, data2 });

  return (
    <div>
      <button onClick={handleUpdateData1}>Update Data 1</button>
      <button onClick={handleUpdateData2}>Update Data 2</button>
      <Child data={data} />
      <ChildMemo data={data} />
    </div>
  );
};

const Child = ({ data }) => {
  useEffect(() => {
    console.log(data, "Child effect");
  }, [data]);

  return <p>Child is {String(data?.visible)}</p>;
};

const ChildMemo = memo(({ data }) => {
  useEffect(() => {
    console.log(data, "Child effect (memoized)");
  }, [data]);

  return <p>Child memoized is {String(data?.visible)}</p>;
});

export default Parent;
