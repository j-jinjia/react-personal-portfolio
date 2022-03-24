import "./CardProject.scss";
import Button from "../Button/Button";
const CardProject = (props) => {
  const { image, title, description, linkLive, linkGit } = props;
  return (
    <>
      <div className="card-project">
        <img className="card-project__image" src={image} alt={title} />
        <div className="card-project__content">
          <p className="card-project__title">{title}</p>
          <p className="card-project__description">{description}</p>
          <div className="card-project__buttons">
            <Button
              title="View More"
              label="buttons"
              link={linkLive}
              target="_blank"
            />
            <Button
              title="GitHub"
              label="buttons"
              link={linkGit}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
