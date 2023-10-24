import * as React from "react";
import { IGridImagesProps } from "./IGridImagesProps";
import CardImage from "./CardImage";

import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";

const GridImages: React.FC<IGridImagesProps> = (props) => {
  const { urlAbsolute } = props;

  const [list, setList] = React.useState<any[]>([]);

  React.useEffect(() => {
    sp.setup({
      sp: {
        baseUrl: urlAbsolute,
      },
    });

    sp.web.lists
      .getByTitle("listGrid1")
      .items.get()
      .then((response: any[]) => {
        const newArrayImage =
          response !== undefined ? response.sort((a, b) => a.order - b.order) : [];
        setList(newArrayImage);
      })
      .catch((error) => {
        console.error("Error al obtener elementos de la lista:", error);
      });
  }, []);
  return (
    <div>
      {list.length !== 0 ? (
        list.map((image, index) => <CardImage key={index} label={image.label} />)
      ) : (
        <>No existen resultados</>
      )}
    </div>
  );
};

export default GridImages;
