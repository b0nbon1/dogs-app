const getBreedsName = (url: string) => {
  const splitted = url.split('/');
  return splitted[splitted.length - 2].replace('-', ' ');
};

export default getBreedsName;
