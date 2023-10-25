import * as React from "react";
import { IGridImagesProps, ItemImages } from "./IGridImagesProps";
import CardImage from "./CardImage";

import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
import styles from "./GridImages.module.scss";

const GridImages: React.FC<IGridImagesProps> = (props) => {
  const { urlAbsolute, nameList } = props;

  const [list, setList] = React.useState<ItemImages[]>([]);

  React.useEffect(() => {
    sp.setup({
      sp: {
        baseUrl: urlAbsolute,
      },
    });

    sp.web.lists
      .getByTitle(nameList)
      .items.get()
      .then((response: ItemImages[]) => {
        const newArrayImage =
          response !== undefined ? response.sort((a, b) => a.order - b.order) : [];
        setList(newArrayImage);
      })
      .catch((error) => {
        alert("Error al obtener elementos de la lista:");
      });
  }, [nameList]);

  return (
    <div className={styles.containerImages}>
      {list.length !== 0 ? (
        list.map((item, index) => (
          <CardImage
            key={index}
            label={item.label}
            image={item.image}
            sizeWith={item.sizeWith}
            backgroud={item.backgroud}
            order={item.order}
            link={item.link}
            typeLink={item.typeLink}
          />
        ))
      ) : (
        <>No existen resultados</>
      )}
    </div>
  );
};

export default GridImages;
