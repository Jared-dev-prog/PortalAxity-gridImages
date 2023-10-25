import * as React from "react";
import CardImage from "./CardImage";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
var GridImages = function (props) {
    var urlAbsolute = props.urlAbsolute, description = props.description;
    var _a = React.useState([]), list = _a[0], setList = _a[1];
    console.log(description);
    React.useEffect(function () {
        function getList() {
            sp.setup({
                sp: {
                    baseUrl: urlAbsolute,
                },
            });
            sp.web.lists
                .getByTitle(description)
                .items.get()
                .then(function (response) {
                var newArrayImage = response !== undefined ? response.sort(function (a, b) { return a.order - b.order; }) : [];
                setList(newArrayImage);
            })
                .catch(function (error) {
                console.error("Error al obtener elementos de la lista:", error);
            });
        }
        getList();
    }, [description]);
    return (React.createElement("div", { className: "background" }, list.length !== 0 ? (list.map(function (item, index) { return (React.createElement(CardImage, { key: index, label: item.label, image: item.image, sizeWith: item.sizeWith, backgroud: item.backgroud, order: item.order, link: item.link, typeLink: item.typeLink })); })) : (React.createElement(React.Fragment, null, "No existen resultados"))));
};
export default GridImages;
//# sourceMappingURL=GridImages.js.map