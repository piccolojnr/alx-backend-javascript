export default function createInt8TypedArray(l, p, v) {
  if (p >= l) {
    throw new Error('Position outside range');
  }

  const arr = new DataView(new ArrayBuffer(l), 0, l);
  arr.setInt8(p, v);
  return arr;
}
