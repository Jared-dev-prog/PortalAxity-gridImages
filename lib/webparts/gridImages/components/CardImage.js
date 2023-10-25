import * as React from "react";
import { ROUTES } from "../../../constants/routes";
import styles from "./GridImages.module.scss";
var CardImage = function (props) {
    var _a = React.useState(""), urlImages = _a[0], setUrlImages = _a[1];
    React.useEffect(function () {
        var objectPhoto = JSON.parse(props.image);
        var urlPhoto = "".concat(ROUTES.generic).concat(objectPhoto.serverRelativeUrl);
        setUrlImages(urlPhoto);
    }, []);
    return (React.createElement("div", { className: "".concat(props.sizeWith) },
        React.createElement("div", { className: "".concat(styles.content_item_images) },
            React.createElement("div", { className: styles._item_Images },
                React.createElement("div", { className: styles.only_images },
                    React.createElement("img", { className: "".concat(props.backgroud === "bg_1"
                            ? styles.bg_1
                            : props.backgroud === "bg_2"
                                ? styles.bg_2
                                : props.backgroud === "bg_3"
                                    ? styles.bg_3
                                    : props.backgroud === "bg_4"
                                        ? styles.bg_4
                                        : props.backgroud === "bg_5"
                                            ? styles.bg_5
                                            : styles.default, " ").concat(props.backgroud ? styles.img_back : styles.img), src: urlImages, alt: "" })))),
        React.createElement("div", null, props.label !== "" ? (React.createElement("div", { className: styles._label }, props.label)) : (""))));
};
export default CardImage;
//# sourceMappingURL=CardImage.js.map