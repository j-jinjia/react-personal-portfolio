import "./CardProject.scss";
import Button from "../Button/Button";
const CardProject = (props) => {
  const { image, title, description, linkLive, linkGit } = props;
  return (
    <div className="card-project">
      <img className="card-project__image" src={image} alt={title} />
      <div className="card-project__content">
        <p className="card-project__title">{title}</p>
        <br />
        <br />
        <p className="card-project__description">{description}</p>
        <br />
        <br />
        <div className="card-project__buttons"></div>
        <Button
          title="View More"
          label="button__live"
          link={linkLive}
          target="_blank"
        />
        <Button
          title="GitHub"
          label="button__gh"
          link={linkGit}
          target="_blank"
        />
      </div>
    </div>
  );
};

export default CardProject;
