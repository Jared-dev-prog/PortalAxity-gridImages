import * as React from "react";
import { ItemImages } from "./IGridImagesProps";
import { ROUTES } from "../../../constants/routes";
import styles from "./GridImages.module.scss";

const CardImage: React.FC<ItemImages> = (props) => {
  const [urlImages, setUrlImages] = React.useState("");

  React.useEffect(() => {
    const objectPhoto = JSON.parse(props.image);
    const urlPhoto = `${ROUTES.generic}${objectPhoto.serverRelativeUrl}`;
    setUrlImages(urlPhoto);
  }, []);

  return (
    <div className={`${props.sizeWith}`}>
      <div className={`${styles.content_item_images}`}>
        <div className={styles._item_Images}>
          <div className={styles.only_images}>
            <img
              className={`${
                props.backgroud === "bg_1"
                  ? styles.bg_1
                  : props.backgroud === "bg_2"
                  ? styles.bg_2
                  : props.backgroud === "bg_3"
                  ? styles.bg_3
                  : props.backgroud === "bg_4"
                  ? styles.bg_4
                  : props.backgroud === "bg_5"
                  ? styles.bg_5
                  : styles.default
              } ${props.backgroud ? styles.img_back : styles.img}`}
              src={urlImages}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        {props.label !== "" ? (
          <div className={styles._label}>{props.label}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardImage;
