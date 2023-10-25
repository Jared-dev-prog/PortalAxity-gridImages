var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "GridImagesWebPartStrings";
import GridImages from "./components/GridImages";
import { SPComponentLoader } from "@microsoft/sp-loader";
var GridImagesWebPart = /** @class */ (function (_super) {
    __extends(GridImagesWebPart, _super);
    function GridImagesWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = "";
        return _this;
    }
    GridImagesWebPart.prototype.render = function () {
        var element = React.createElement(GridImages, {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
            urlAbsolute: this.context.pageContext.web.absoluteUrl,
            nameList: this.properties.nameList,
        });
        ReactDom.render(element, this.domElement);
    };
    GridImagesWebPart.prototype.onInit = function () {
        var _this = this;
        SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    GridImagesWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) {
            // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext().then(function (context) {
                var environmentMessage = "";
                switch (context.app.host.name) {
                    case "Office": // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost
                            ? strings.AppLocalEnvironmentOffice
                            : strings.AppOfficeEnvironment;
                        break;
                    case "Outlook": // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost
                            ? strings.AppLocalEnvironmentOutlook
                            : strings.AppOutlookEnvironment;
                        break;
                    case "Teams": // running in Teams
                        environmentMessage = _this.context.isServedFromLocalhost
                            ? strings.AppLocalEnvironmentTeams
                            : strings.AppTeamsTabEnvironment;
                        break;
                    default:
                        throw new Error("Unknown host");
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost
            ? strings.AppLocalEnvironmentSharePoint
            : strings.AppSharePointEnvironment);
    };
    GridImagesWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty("--bodyText", semanticColors.bodyText || null);
            this.domElement.style.setProperty("--link", semanticColors.link || null);
            this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered || null);
        }
    };
    GridImagesWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(GridImagesWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridImagesWebPart.prototype, "disableReactivePropertyChanges", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    GridImagesWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Configuración",
                    },
                    groups: [
                        {
                            groupName: "Grid Imagenes",
                            groupFields: [
                                PropertyPaneTextField("nameList", {
                                    label: "Nombre de la lista (Contenidos del sitio):",
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return GridImagesWebPart;
}(BaseClientSideWebPart));
export default GridImagesWebPart;
//# sourceMappingURL=GridImagesWebPart.js.map