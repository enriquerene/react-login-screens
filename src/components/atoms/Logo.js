import logo from '../../images/logo.png';

export default function Logo(props) {
  return(
    <img
      className="logo"
      src={ logo }
      width={ props.width ? props.width : 60 }
      height={ props.height ? props.height : 88}
    />
  );
}
