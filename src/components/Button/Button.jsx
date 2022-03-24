import "./Button.scss";

const Button = (props) => {
  const { title, label, link, target } = props;
  return (
    <a href={link} target={target}>
      <button className={label}>{title}</button>
    </a>
  );
};

export default Button;
