const KB = 1024;
const MB = 1048576;
const GB = 1073741824;
const TB = 1099511627776;

type Unit = 'KB' | 'MB' | 'TB';

export interface IStorage {
  number: number;
  unit: Unit;
}

const memoryArr = [
  { unit: 'KB', value: KB },
  { unit: 'MB', value: MB },
  { unit: 'GB', value: GB },
  { unit: 'TB', value: TB },
];

export function formatStorageNumberToObj(size: number, decimal = 0): IStorage {
  console.log(typeof size, typeof decimal);
  let max = TB;
  let min = KB;

  let max_unit = 'TB' as Unit;
  let min_unit = 'KB' as Unit;

  memoryArr.forEach((item) => {
    if (size >= item.value) {
      min = item.value;
      min_unit = item.unit as Unit;
    }
  });

  for (let i = 0; i < memoryArr.length; i++) {
    if (size <= memoryArr[i].value) {
      max = memoryArr[i].value;
      max_unit = memoryArr[i].unit as Unit;
      break;
    }
  }

  const max_result = Number((size / max).toFixed(decimal));
  const min_result = Number((size / min).toFixed(decimal));

  if (max_result >= 0.1) {
    return {
      number: max_result,
      unit: max_unit,
    };
  }

  return {
    number: min_result,
    unit: min_unit,
  };
}
