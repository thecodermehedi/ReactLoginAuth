const getStoredData = () => {
  const storedData = localStorage.getItem("DataDetails");
  const Datas = storedData ? JSON.parse(storedData) : [];
  return Datas;
};

const saveData = (id) => {
  const storedDatas = getStoredData();
  const exists = storedDatas.find((DataId) => DataId === id);
  if (!exists) {
    storedDatas.push(id);
    localStorage.setItem("DataDetails", JSON.stringify(storedDatas));
    return false;
  } else {
    return true;
  }
};

export {saveData, getStoredData};
