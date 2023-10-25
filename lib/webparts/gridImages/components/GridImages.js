import * as React from "react";
import CardImage from "./CardImage";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
import styles from "./GridImages.module.scss";
var GridImages = function (props) {
    var urlAbsolute = props.urlAbsolute, nameList = props.nameList;
    var _a = React.useState([]), list = _a[0], setList = _a[1];
    React.useEffect(function () {
        sp.setup({
            sp: {
                baseUrl: urlAbsolute,
            },
        });
        sp.web.lists
            .getByTitle(nameList)
            .items.get()
            .then(function (response) {
            var newArrayImage = response !== undefined ? response.sort(function (a, b) { return a.order - b.order; }) : [];
            setList(newArrayImage);
        })
            .catch(function (error) {
            alert("Error al obtener elementos de la lista:");
        });
    }, [nameList]);
    return (React.createElement("div", { className: styles.containerImages }, list.length !== 0 ? (list.map(function (item, index) { return (React.createElement(CardImage, { key: index, label: item.label, image: item.image, sizeWith: item.sizeWith, backgroud: item.backgroud, order: item.order, link: item.link, typeLink: item.typeLink })); })) : (React.createElement(React.Fragment, null, "No existen resultados"))));
};
export default GridImages;
//# sourceMappingURL=GridImages.js.map