/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
    id: string;
}

declare module 'substance';
//
//     class EventEmitter {
//         emit(event: any): boolean;
//         on(event: any, method: any, context: any): void;
//         off(event: any, method: any, context: any): void;
//         _debugEvents(): void;
//         __events__: any;
//     }
//
//     export class Component extends EventEmitter {
//         constructor(parent: any, props?: {}, options?: {});
//         getId(): any;
//         setId(): void;
//         getChildContext(): any;
//         getInitialState(): {};
//         getParent(): any;
//         getRoot(): Component;
//         getElement(): any;
//         getNativeElement(): any;
//         getLabel(name: any, ...args: any[]): any;
//         getLabelProvider(): any;
//         getComponent(componentName: any, ...args: any[]): any;
//         getComponentRegistry(): any;
//         getFlow(): any;
//         render($$: any): any;
//         mount(el: any): Component;
//         shouldRerender(newProps: any, newState: any): boolean;
//         rerender(): void;
//         _rerender(oldProps: any, oldState: any): void;
//         _render(oldProps: any, oldState: any): void;
//         triggerDidMount(): void;
//         didMount(): void;
//         didUpdate(): void;
//         isMounted(): any;
//         triggerDispose(): void;
//         dispose(): void;
//         _setParent(newParent: any): void;
//         send(action: any): boolean;
//         handleActions(actionHandlers: any): Component;
//         handleAction(name: any, handler: any): void;
//         getState(): any;
//         setState(newState: any): void;
//         extendState(newState: any): void;
//         willUpdateState(newState: any): void;
//         getProps(): any;
//         setProps(newProps: any): void;
//         _setProps(newProps: any): void;
//         extendProps(updatedProps: any): void;
//         willReceiveProps(newProps: any): void;
//         getTextContent(): any;
//         textContent: any;
//         getInnerHTML(): any;
//         innerHTML: any;
//         getOuterHTML(): any;
//         outerHTML: any;
//         getAttribute(name: any): any;
//         setAttribute(name: any, val: any): Component;
//         getProperty(name: any): any;
//         setProperty(name: any, val: any): Component;
//         hasClass(name: any): any;
//         addClass(name: any): Component;
//         removeClass(name: any): Component;
//         getStyle(name: any): any;
//         setStyle(name: any, val: any): any;
//         getValue(): any;
//         setValue(val: any): Component;
//         getChildCount(): any;
//         childNodes: any;
//         getChildNodes(): any;
//         getChildren(): any;
//         getChildAt(pos: any): any;
//         find(cssSelector: any): any;
//         findAll(cssSelector: any): any;
//         appendChild(child: any): void;
//         insertAt(pos: any, childEl: any): void;
//         removeAt(pos: any): void;
//         removeChild(child: any): void;
//         replaceChild(oldChild: any, newChild: any): void;
//         empty(): Component;
//         _clear(): void;
//         remove(): void;
//         addEventListener(): void;
//         removeEventListener(): void;
//         insertBefore(): void;
//         click(): void;
//         getComponentPath(): any[];
//         _getContext(): any;
//     }
//     class ToggleTool extends Component {
//         _isTool: boolean;
//         props: any;
//         context: any;
//
//         render($$: any): any;
//         renderButton($$: any): any;
//         getClassNames(): string;
//         getCommandName(): any;
//         getName(): any;
//         getIconName(): any;
//         onClick(e: any): void;
//         _getTooltipText(): any;
//         executeCommand(props: any): void;
//     }
// }

//{
    // abstract class AbstractEditor {
    //     contentHighlights: any;
    //     props: any;
    //     editorSession: any;
    //     tocProvider: any;
    //     doc: any;
    //     getComponent: (s: string) => void;
    //     componentRegistry: any;
    //     toolGroups: any;
    //     labelProvider: any;
    //     iconProvider: any;
    //
    //     // legacy
    //     surfaceManager: any;
    //     commandManager: any;
    //     dragManager: any;
    //     macroManager: any;
    //     converterRegistry: any;
    //     globalEventHandler: any;
    //     editingBehavior: any;
    //     markersManager: any;
    //
    //     resourceManager: any;
    //
    //     domSelection: any;
    // }
    //
    // interface Toolbar {
    // }
    // const Toolbar: Toolbar;
    //
    // interface ScrollPane {
    // }
    //
    // const ScrollPane: ScrollPane;
//}

