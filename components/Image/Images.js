import './Images.scss';

const Image = ({src, alt}) => {
  return (
      <img src={require(`images/${src}?webp`)} alt={alt}/>
  );
}

export default Image;