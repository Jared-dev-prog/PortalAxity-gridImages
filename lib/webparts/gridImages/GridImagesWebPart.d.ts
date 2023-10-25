import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
export interface IGridImagesWebPartProps {
    description: string;
    nameList: string;
}
export default class GridImagesWebPart extends BaseClientSideWebPart<IGridImagesWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    render(): void;
    protected onInit(): Promise<void>;
    private _getEnvironmentMessage;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected get disableReactivePropertyChanges(): boolean;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GridImagesWebPart.d.ts.map