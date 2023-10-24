import * as React from "react";
import CardImage from "./CardImage";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
var GridImages = function (props) {
    var urlAbsolute = props.urlAbsolute;
    var _a = React.useState([]), list = _a[0], setList = _a[1];
    React.useEffect(function () {
        sp.setup({
            sp: {
                baseUrl: urlAbsolute,
            },
        });
        sp.web.lists
            .getByTitle("listGrid1")
            .items.get()
            .then(function (response) {
            var newArrayImage = response !== undefined ? response.sort(function (a, b) { return a.order - b.order; }) : [];
            setList(newArrayImage);
        })
            .catch(function (error) {
            console.error("Error al obtener elementos de la lista:", error);
        });
    }, []);
    return (React.createElement("div", null, list.length !== 0 ? (list.map(function (image, index) { return React.createElement(CardImage, { key: index, label: image.label }); })) : (React.createElement(React.Fragment, null, "No existen resultados"))));
};
export default GridImages;
//# sourceMappingURL=GridImages.js.map