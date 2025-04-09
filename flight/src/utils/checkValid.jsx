//parametre olarak alıdğı değer tanımlıysa geriye döndürsün ama tanımsız ise billinmiyor yazsın

const checkValid = (value) => {
  return !value ? "Bilinmiyor" : value;
};
export default checkValid;
