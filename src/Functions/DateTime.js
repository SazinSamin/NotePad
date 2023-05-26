export default function DateTime() {
  const date = new Date();
  return`Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

