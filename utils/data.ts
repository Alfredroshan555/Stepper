const type1 = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];
const type2 = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8",
  "Step 9",
];
const type3 = ["Step 1", "Step 2", "Step 3", "Step 4"];
const type4 = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8",
  "Step 9",
  "Step 10",
  "Step 11",
  "Step 12",
  "Step 13",
  "Step 14",
  "Step 15",
];

export const getDataByType = (type: number) => {
  switch (type) {
    case 1:
      return type1;
    case 2:
      return type2;
    case 3:
      return type3;
    case 4:
      return type4;
  }
};
