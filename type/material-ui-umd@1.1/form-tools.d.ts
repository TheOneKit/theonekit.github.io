/// <reference types="react" />
declare var module: any;
declare var require: any;
declare var module: any;
declare namespace form {
}
declare namespace form {
    enum FieldType {
        Switch = "switch",
        Line = "line",
        Group = "group",
        Paper = "paper",
        Expansion = "expansion",
        Radio = "radio",
        Checkbox = "checkbox",
        Text = "text",
        Progress = "progress",
        Component = "component",
        Slider = "slider",
        Combo = "combo",
        Items = "items",
        Rating = "rating",
        Typography = "typography"
    }
}
declare namespace form {
    /**
     * Объект поля для прикладного программиста
     */
    interface IField {
        /**
         * Общие поля. Поле name позволяет задать забор
         * поля из целевого объекта, не нужен для group,
         * expansion и line.
         */
        name?: string;
        /**
         * Коллбеки, вызываемый при фокусировкеи потере фокуса.
         * Подразумевается изменение формы со стороны прикладного
         * программиста, а не работа с полем ввода
         * (например, обновление ссылки на изображение)
         */
        focus?: () => void;
        blur?: () => void;
        /**
         * Флаг только на чтение и "круглой окаймовки". У
         * компонента List филды принудительно получают
         * значения false.
         */
        readonly?: boolean;
        outlined?: boolean;
        /**
         * Поле, специфичное для RadioField и позволяющее
         * задать значение при выборе элемента кликом
         */
        radioValue?: string;
        /**
         * Поле type для MatTextField
         */
        inputType?: keyof {
            text: "text";
            color: "color";
            date: "date";
            email: "email";
            month: "month";
            number: "number";
            password: "password";
            search: "search";
            tel: "tel";
            time: "time";
            url: "url";
            week: "week";
        };
        /**
         * Делает TextField многострочным, если
         * inputRows больше единицы
         */
        inputRows?: number;
        /**
         * Иконки для MatTextField
         */
        leadingIcon?: any;
        trailingIcon?: any;
        /**
         * При клике на иконку мы можем запросить данные из модального
         * окна, расположенного в коде прикладного программиста. Коллбек
         * получает на вход текущее значение поля и функцию onChange...
         */
        leadingIconClick?: (value: any, onChange?: (v: any) => void) => void;
        trailingIconClick?: (value: any, onChange?: (v: any) => void) => void;
        /**
         * Максимальное число для высчитывания процента
         * (минимальное число всегда ноль)
         */
        maxPercent?: number;
        /**
         * Показывает процент числом слева
         */
        showPercentLabel?: boolean;
        /**
         * - Коллбеки, позволяющий перекрасить SliderField.
         * Работают только если заданы все вместе
         * - ВНИМАНИЕ! Потенциально возможна просадка производительности,
         * так как осуществляет рекомпиляцию стилей material-ui
         */
        sliderThumbColor?: (v: number) => string;
        sliderTrackColor?: (v: number) => string;
        sliderRailColor?: (v: number) => string;
        /**
         *  - Коллбеки, позволяющие перекрасить ProgressField.
         * Работают только если заданы все вместе
         *  - ВНИМАНИЕ! Потенциально возможна просадка производительности,
         * так как осуществляет рекомпиляцию стилей material-ui
         */
        progressColor?: (v: number) => string;
        progressBarColor?: (v: number) => string;
        /**
         * Поля, специфичные для SliderField
         */
        minSlider?: number;
        maxSlider?: number;
        stepSlider?: number;
        /**
         * Варианты выбора для ComboField и ItemsField
         */
        itemList?: string[];
        /**
         * Позволяет перевести значения у ComboField и ItemsField
         * из поле itemList на человеческий, если
         * используются константы
         */
        tr?: (s: any) => any;
        /**
         * Тип поля для логического ветвления при рендеринге
         */
        type: FieldType;
        /**
         * Наименование класса для корневого элемента поля (опционально)
         */
        className?: string;
        /**
         * Стиль корневого элемента для поля (опционально)
         */
        style?: React.CSSProperties;
        /**
         * Заголовок и описание, если возможен вывод у поля
         */
        title?: string;
        description?: string;
        /**
         * placeholder для TextField, ComboField, ItemsField
         */
        placeholder?: string;
        /**
         * Колонки для One. Не используются в List (кроме фильтров).
         * Если указано поле columns, то остальные приравниваются к
         * его значению
         */
        columns?: string;
        phoneColumns?: string;
        tabletColumns?: string;
        desktopColumns?: string;
        /**
         * Дочерние поля для групп
         */
        fields?: IField[];
        /**
         * Функция, позволяющая организовать валидацию. Если
         * возвращаемое значение не равно null, считается за
         * ошибкую. Коллбек change позволяет осуществить мутацию
         * асинхронно (опционально)
         */
        isInvalid?: (v: any, change?: (v: null | string) => void) => null | string;
        /**
         * Функция, позволяющая скрыть поле, исходя из целевого
         * объекта. Коллбек change позволяет осуществить мутацию
         * асинхронно (опционально)
         */
        isVisible?: (v: any, change?: (v: boolean) => void) => boolean;
        /**
         * Функция, позволяющая отключить поле, исходя из целевого
         * объекта. Коллбек change позволяет осуществить мутацию
         * асинхронно (опционально)
         */
        isDisabled?: (v: any, change?: (v: boolean) => void) => boolean;
        /**
         * Функция, применяемая если значение поля вычисляется динамически.
         * Включает readonly. Для ComponentField может возвращать JSX.
         * Коллбек change позволяет осуществить операцию асинхронно (опционально).
         */
        compute?: (v: any, change?: (v: any) => void) => any;
        /**
         * Значение по-умолчанию для поля
         */
        defaultValue?: string | number | boolean;
        /**
         * Позволяет выключить отступ. Можно использовать по аналогии
         * с исключением последней запятой при склеивании массива
         * руками, если раздражает
         */
        fieldRightMargin?: number;
        fieldBottomMargin?: number;
        /**
         * Шрифт для поля Typography
         */
        typoVariant?: keyof {
            h2: 'h2';
            h3: 'h3';
            h4: 'h4';
            h5: 'h5';
            h6: 'h6';
            subtitle1: 'subtitle1';
            subtitle2: 'subtitle2';
            body1: 'body1';
            body2: 'body2';
        };
    }
}
declare namespace form {
    type exclude = 'defaultValue';
    /**
     * Объект сущность представляет собой поле прикладного
     * программииста, расширенное входным параметром и
     * коллбеком изменения для внутренней организации
     * работы. ВАЖНО - изменение поля влечет изменение
     * всего целевого объекта, следуя паттерну immutable
     */
    export interface IEntity extends Omit<IField, exclude> {
        change?: (object: any) => void;
        ready: () => void;
        object: object;
    }
    export {};
}
declare namespace form {
    interface IOneProps<Field = IField> {
        /**
         * Позволяет загружать данные в компонент
         */
        handler?: any | (Promise<any>);
        /**
         * Вызывается при ошибке в handler
         */
        fallback?: (e: Error) => void;
        /**
         * Вызываются при фокусировки по филду
         * в компоненте и потере фокуса
         */
        focus?: () => void;
        blur?: () => void;
        /**
         * Вызывается, когда все поля успели отрисоваться
         * в первый раз, после появления формы
         */
        ready?: () => void;
        /**
         * Вызывается после изменения и передает измененный
         * объект прикладному программисту
         */
        change?: (object: any, initial?: boolean) => void;
        /**
         * Массив полей, выводимый в компоненте
         */
        fields: Field[];
        /**
         * Префикс для формирования ключей элементов
         */
        prefix?: string;
        /**
         * Плейсхолдер, показываемый во время загрузки данных
         */
        LoadPlaceholder?: null | material.Element;
    }
}
declare namespace form {
    enum SelectionMode {
        Single = "single",
        Multiple = "multiple",
        None = "none"
    }
}
declare namespace form {
    type order = 'desc' | 'asc' | '';
    /**
     * Входные параметры обработчику List
     */
    interface IListHandlerInput {
        /**
         * Ключевое слово для поиску по базе данных
         */
        keyword?: string;
        /**
         * Значения для пагинации, где limit это число
         * записей на странице, offset это отступ от начала, а
         * total это общее количество записей
         */
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Значения для сортировки по полю
         */
        order?: order;
        orderBy?: string;
    }
}
declare namespace form {
    interface IListHandlerResult {
        /**
         * Обработчик List должен вернуть объект с массивом items.
         */
        items: any[];
        /**
         * Возвращает общее число элементов
         */
        total?: number;
    }
}
declare namespace form {
    interface IListProps {
        /**
         * Позволяет загружать данные в компонент
         */
        handler: (params?: IListHandlerInput) => Promise<IListHandlerResult> | IListHandlerResult;
        /**
         * Вызывается при ошибке в handler
         */
        fallback?: (e: Error) => void;
        /**
         * Вызывается после клика по строке. Подразумевается
         * переход на страницу с обработчиком One, получающим
         * параметр id из адресной строки...
         */
        click?: (object: any) => void;
        /**
         * Массив полей, выводимый в компоненте
         */
        fields: IField[];
        /**
         * Класс корневого элемента таблицы
         */
        className?: string;
        /**
         * Возможность выбирать элементы. Доступны опции
         * single (radio-button), multiple (checkbox), none
         */
        selection?: SelectionMode;
        /**
         * Можно сделать записи не редактируемыми и не
         * удаляемыми, чтобы был доступен только выбор
         */
        canSelect?: boolean;
        canDelete?: boolean;
        canEdit?: boolean;
        /**
         * Коллбек, вызываемый после клика по элементу
         */
        select?: (object: any[]) => void;
        /**
         * Коллбек, вызываемый для удаления элемента
         */
        remove?: (object: any) => Promise<void> | void;
        /**
         * Значения по-умолчанию для пагинации. Значение
         * total будет переопределяться исходя из доступности
         * соответствующего поля ответа
         */
        limit?: number;
        offset?: number;
        total?: number;
    }
}
declare namespace form {
    namespace utils {
        const get: (object: any, path: any) => any;
    }
}
declare namespace form {
    namespace utils {
        const set: (object: any, path: any, value: any) => boolean;
    }
}
declare namespace form {
    namespace utils {
        const create: (object: any, path: any) => void;
    }
}
declare namespace form {
    namespace utils {
        const error: (msg: any) => never;
    }
}
declare namespace form {
    namespace utils {
        const isNullOrUndefined: (obj: any) => boolean;
    }
}
declare namespace form {
    namespace utils {
        const deepCompare: (obj1: any, obj2: any) => boolean;
    }
}
declare namespace form {
    namespace utils {
        const deepClone: (src: any) => {};
    }
}
declare namespace form {
    namespace utils {
        const randomId: () => string;
    }
}
declare namespace form {
    namespace utils {
        const flat: (arr: any, fieldName?: string) => any;
        const deepFlat: (arr: any, fieldName?: string) => any;
    }
}
declare namespace form {
    namespace utils {
        const initialValue: (type: FieldType) => false | any[] | "" | 0 | 1 | 3;
    }
}
declare namespace form {
    namespace utils {
        /**
         * Ожидает потерю фокуса, используя
         * document.activeElement
         */
        const waitForBlur: (ref: HTMLElement) => Promise<void>;
    }
}
declare namespace form {
    namespace utils {
        const createIcon: (icon: any) => React.FunctionComponentElement<any> | React.CElement<{}, React.Component<{}, any, any>>;
    }
}
declare namespace form {
    namespace utils {
        const isField: ({ type, name }: {
            type: any;
            name: any;
        }) => boolean;
    }
}
declare namespace form {
    namespace utils {
        const classNames: (...args: any[]) => string;
    }
}
declare namespace form {
    namespace utils {
        const deepMerge: (target: any, ...sources: any[]) => any;
    }
}
declare namespace form {
    namespace utils {
        type Func<T extends any[], R> = (...a: T) => R;
        /**
         * Composes single-argument functions from right to left. The rightmost
         * function can take multiple arguments as it provides the signature for the
         * resulting composite function.
         *
         * @param funcs The functions to compose.
         * @returns A function obtained by composing the argument functions from right
         *   to left. For example, `compose(f, g, h)` is identical to doing
         *   `(...args) => f(g(h(...args)))`.
         */
        export function compose(): <R>(a: R) => R;
        export function compose<F extends Function>(f: F): F;
        export function compose<A, T extends any[], R>(f1: (a: A) => R, f2: Func<T, A>): Func<T, R>;
        export function compose<A, B, T extends any[], R>(f1: (b: B) => R, f2: (a: A) => B, f3: Func<T, A>): Func<T, R>;
        export function compose<A, B, C, T extends any[], R>(f1: (c: C) => R, f2: (b: B) => C, f3: (a: A) => B, f4: Func<T, A>): Func<T, R>;
        export function compose<R>(f1: (a: any) => R, ...funcs: Function[]): (...args: any[]) => R;
        export function compose<R>(...funcs: Function[]): (...args: any[]) => R;
        export {};
    }
}
declare namespace form {
    namespace utils {
        const createKey: () => string;
    }
}
declare namespace form {
    namespace hooks {
        interface IProps {
            children?: React.ReactChildren;
        }
        export function withType<T extends IProps>(component: React.ComponentType<any>): (props: T) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        export {};
    }
}
declare namespace form {
    namespace hooks {
        /**
         * Конструкция позволяет дождаться применения всех эффектов, а затем дополнительно
         * запустить таймер, для операций дорогих по производительности!
         */
        const useDelayed: (calculate: () => any, delay: (v: any) => void, deps: any[]) => any;
    }
}
declare namespace form {
    namespace hooks {
        interface IResolvedHookProps {
            handler: () => Promise<any> | any;
            fallback: (e: Error) => void;
            fields: IField[];
            change: (obj: any, initial?: boolean) => void;
        }
        type useResolvedHook = (props: IResolvedHookProps) => [any, (v: any) => void];
        /**
         * Хук разрешает обработчик на корневом уровне, при чем только
         * один раз. Для дочерних One компонентов осуществляется
         * подписка на изменения
         */
        export const useResolved: useResolvedHook;
        export {};
    }
}
declare namespace form {
    namespace hooks {
        interface Options {
            maxWait?: number;
            leading?: boolean;
            trailing?: boolean;
        }
        interface DebouncedControlFunctions {
            cancel: () => void;
            flush: () => void;
            pending: () => boolean;
        }
        /**
         * Subsequent calls to the debounced function `debounced.callback` return the result of the last func invocation.
         * Note, that if there are no previous invocations it's mean you will get undefined. You should check it in your code properly.
         */
        interface DebouncedState<T extends (...args: any[]) => ReturnType<T>> extends DebouncedControlFunctions {
            callback: (...args: Parameters<T>) => ReturnType<T>;
        }
        function useDebouncedCallback<T extends (...args: any[]) => ReturnType<T>>(func: T, wait?: number, options?: Options): DebouncedState<T>;
    }
}
declare namespace form {
    namespace hooks {
        function useDebounce<T>(value: T, delay: number, options?: {
            maxWait?: number;
            leading?: boolean;
            trailing?: boolean;
            equalityFn?: (left: T, right: T) => boolean;
        }): [T, DebouncedControlFunctions];
    }
}
declare namespace form {
    namespace components {
        const Group: React.ForwardRefExoticComponent<Pick<{
            [x: string]: any;
            className?: string;
            columns?: string;
            phoneColumns?: string;
            tabletColumns?: string;
            desktopColumns?: string;
            children?: any;
            isItem?: boolean;
            style?: any;
            fieldRightMargin?: number;
            fieldBottomMargin?: number;
        }, React.ReactText> & React.RefAttributes<unknown>>;
    }
}
declare namespace form {
    export type PickProp<T extends {}, P extends keyof T> = T[P];
    /**
     * Возможные значения value
     */
    type v = number | string | boolean;
    /**
     * Типизацию компоновки следует вынести отдельно
     */
    export interface IManagedLayout {
        columns?: PickProp<IField, 'columns'>;
        phoneColumns?: PickProp<IField, 'phoneColumns'>;
        tabletColumns?: PickProp<IField, 'tabletColumns'>;
        desktopColumns?: PickProp<IField, 'desktopColumns'>;
        fieldRightMargin?: PickProp<IField, 'fieldRightMargin'>;
        fieldBottomMargin?: PickProp<IField, 'fieldBottomMargin'>;
    }
    /**
     * Компонент высшего порядка makeField
     * перехватывает управление над свойствами
     * поля
     */
    export interface IManagedShallow extends IManagedLayout {
        isDisabled?: PickProp<IField, 'isDisabled'>;
        isVisible?: PickProp<IField, 'isVisible'>;
        isInvalid?: PickProp<IField, 'isInvalid'>;
        compute?: PickProp<IField, 'compute'>;
        defaultValue?: v;
    }
    /**
     * Свойства, не доступные управляемому полю
     */
    type Exclude = {
        object: never;
        type: never;
        focus: never;
        blur: never;
        ready: never;
        change: never;
        name: never;
    } & IManagedShallow;
    /**
     * Свойства сущности, обернутой в компонент высшего порядка
     * Предоставляется удобная абстракция
     */
    export interface IManaged extends Omit<IEntity, keyof Exclude> {
        value: v;
        disabled: boolean;
        invalid: string | null;
        onChange: (v: v) => void;
    }
    export {};
}
declare namespace form {
    namespace components {
        interface IExpansionProps extends IManagedLayout {
            title?: PickProp<IField, 'title'>;
            description?: PickProp<IField, 'description'>;
            className?: PickProp<IField, 'className'>;
        }
        const Expansion: ({ title, description, className, columns, phoneColumns, tabletColumns, desktopColumns, children, ...otherProps }: IExpansionProps & {
            children: any;
        }) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        const Paper: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, children, ...otherProps }: {
            [x: string]: any;
            className?: string;
            columns?: string;
            phoneColumns?: string;
            tabletColumns?: string;
            desktopColumns?: string;
            children?: any;
        }) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        /**
         *  - Оборачивает IEntity в удобную абстракцию IManaged, где сразу
         *    представлены invalid, disabled, visible и можно задваивать вызов onChange
         *  - Управляет фокусировкой, мануально ожидая потерю фокуса, эмулируя onBlur
         */
        function makeField(Component: React.FC<Partial<IManaged>>, skipDebounce?: boolean): ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface ICheckboxFieldProps {
            disabled: PickProp<IManaged, 'disabled'>;
            value: PickProp<IManaged, 'value'>;
            onChange: PickProp<IManaged, 'onChange'>;
            title: PickProp<IManaged, 'title'>;
        }
        const CheckboxField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface ILineFieldProps {
            title: PickProp<IManaged, 'title'>;
        }
        const LineField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface IRadioFieldProps {
            disabled: PickProp<IManaged, 'disabled'>;
            value: PickProp<IManaged, 'value'>;
            onChange: PickProp<IManaged, 'onChange'>;
            title: PickProp<IManaged, 'title'>;
            radioValue: PickProp<IManaged, 'radioValue'>;
        }
        const RadioField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface ISwitchFieldProps {
            disabled: PickProp<IManaged, 'disabled'>;
            value: PickProp<IManaged, 'value'>;
            onChange: PickProp<IManaged, 'onChange'>;
            title: PickProp<IManaged, 'title'>;
        }
        const SwitchField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface ITextFieldProps {
            invalid: PickProp<IManaged, 'invalid'>;
            value: PickProp<IManaged, 'value'>;
            disabled: PickProp<IManaged, 'disabled'>;
            inputType: PickProp<IManaged, 'inputType'>;
            description: PickProp<IManaged, 'description'>;
            outlined: PickProp<IManaged, 'outlined'>;
            title: PickProp<IManaged, 'title'>;
            leadingIcon: PickProp<IManaged, 'leadingIcon'>;
            trailingIcon: PickProp<IManaged, 'trailingIcon'>;
            leadingIconClick: PickProp<IManaged, 'leadingIconClick'>;
            trailingIconClick: PickProp<IManaged, 'trailingIconClick'>;
            inputRows: PickProp<IManaged, 'inputRows'>;
            placeholder: PickProp<IManaged, 'placeholder'>;
            onChange: PickProp<IManaged, 'onChange'>;
        }
        const TextField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface IProgressFieldProps {
            progressBarColor: PickProp<IManaged, 'progressBarColor'>;
            progressColor: PickProp<IManaged, 'progressColor'>;
            maxPercent: PickProp<IManaged, 'maxPercent'>;
            showPercentLabel: PickProp<IManaged, 'showPercentLabel'>;
            value: PickProp<IManaged, 'value'>;
        }
        const ProgressField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface IComponentFieldProps {
            value: PickProp<IManaged, 'value'>;
        }
        const ComponentField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface ISliderFieldProps {
            value: PickProp<IManaged, 'value'>;
            onChange: PickProp<IManaged, 'onChange'>;
            leadingIcon: PickProp<IManaged, 'leadingIcon'>;
            trailingIcon: PickProp<IManaged, 'trailingIcon'>;
            leadingIconClick: PickProp<IManaged, 'leadingIconClick'>;
            trailingIconClick: PickProp<IManaged, 'trailingIconClick'>;
            sliderThumbColor: PickProp<IManaged, 'sliderThumbColor'>;
            sliderTrackColor: PickProp<IManaged, 'sliderTrackColor'>;
            sliderRailColor: PickProp<IManaged, 'sliderRailColor'>;
        }
        const SliderField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface IComboFieldProps {
            value: PickProp<IManaged, 'value'>;
            disabled: PickProp<IManaged, 'disabled'>;
            description: PickProp<IManaged, 'description'>;
            placeholder: PickProp<IManaged, 'placeholder'>;
            outlined: PickProp<IManaged, 'outlined'>;
            itemList: PickProp<IManaged, 'itemList'>;
            title: PickProp<IManaged, 'title'>;
            tr: PickProp<IManaged, 'tr'>;
            onChange: PickProp<IManaged, 'onChange'>;
        }
        const ComboField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface IItemsFieldProps {
            value: PickProp<IManaged, 'value'>;
            disabled: PickProp<IManaged, 'disabled'>;
            description: PickProp<IManaged, 'description'>;
            placeholder: PickProp<IManaged, 'placeholder'>;
            outlined: PickProp<IManaged, 'outlined'>;
            itemList: PickProp<IManaged, 'itemList'>;
            title: PickProp<IManaged, 'title'>;
            tr: PickProp<IManaged, 'tr'>;
            onChange: PickProp<IManaged, 'onChange'>;
        }
        const ItemsField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface IRatingFieldProps {
            value: PickProp<IManaged, 'value'>;
            disabled: PickProp<IManaged, 'disabled'>;
            readonly: PickProp<IManaged, 'readonly'>;
            title: PickProp<IManaged, 'title'>;
            onChange: PickProp<IManaged, 'onChange'>;
        }
        const RatingField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        interface ITypographyFieldProps {
            value: PickProp<IManaged, 'value'>;
            placeholder: PickProp<IManaged, 'placeholder'>;
            typoVariant: PickProp<IManaged, 'typoVariant'>;
        }
        const TypographyField: ({ className, columns, phoneColumns, tabletColumns, desktopColumns, isDisabled, isVisible, isInvalid, change, ready, compute, object, name, focus, blur, readonly, style, fieldRightMargin, fieldBottomMargin, ...otherProps }: IEntity) => JSX.Element;
    }
}
declare namespace form {
    namespace fields {
        const createField: (entity: IEntity, currentPath?: string) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        const One: {
            ({ LoadPlaceholder, ready, ...props }: IOneProps): JSX.Element;
            typed: (props: IOneProps<TypedField>) => React.FunctionComponentElement<IOneProps<TypedField>>;
        };
        /**
         * После написания формы можно включить строгую
         * проверку типов полей
         */
        const OneTyped: (props: IOneProps<TypedField>) => React.FunctionComponentElement<IOneProps<TypedField>>;
    }
}
declare namespace form {
    namespace components {
        const List: ({ className, fields, selection, limit, offset, total, canSelect, canDelete, canEdit, select, click, remove, handler, fallback, ...otherProps }: IListProps) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        const Breadcrumbs: ({ back, save, currentTitle, backwardTitle, saveLabel, saveDisabled, className, ...otherProps }: {
            [x: string]: any;
            back?: () => void;
            save?: () => void;
            currentTitle?: string;
            backwardTitle?: string;
            saveLabel?: string;
            saveDisabled?: boolean;
            className?: string;
        }) => JSX.Element;
    }
}
declare namespace form {
    namespace components {
        namespace internal {
            const Scaffold: ({ showMenu, children, className, title, RightCorner, pages, style, }: {
                showMenu?: boolean;
                children?: any;
                className?: string;
                title?: string;
                RightCorner: any;
                pages?: any[];
                style?: {};
            }) => JSX.Element;
            type ScaffoldProps = Parameters<typeof Scaffold>[0];
        }
        export interface IScaffoldProps extends Omit<internal.ScaffoldProps, 'RightCorner'> {
            /**
             * Регулирует доступность бокового меню
             */
            showMenu?: boolean;
            /**
             * Внутри Scaffold следует размещать приложение
             */
            children?: material.Element;
            /**
             * Наименования классов, которые будет переданы в AppBar
             */
            className?: string;
            /**
             * Стили, которые будут переданы в AppBar
             */
            styles?: React.CSSProperties;
            /**
             * Содержимое бокового меню. Состоит из массива объектов
             * следующей структуры
             */
            pages?: {
                icon: material.Component | string;
                click: CallableFunction;
                title: string;
            }[];
            /**
             * Компонент иконки в правом углу можно переопределить
             */
            RightCorner?: material.Component | null;
            /**
             * Заголовок приложения
             */
            title?: string;
        }
        export const Scaffold: (props: IScaffoldProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        export {};
    }
}
declare namespace form {
    type Exclude = Omit<IManaged, keyof IEntity> & {
        type: never;
        name: never;
        fields: never;
    };
    type TypedFieldFactory<T extends FieldType, F extends {}> = {
        [P in keyof Omit<F, keyof Exclude>]?: F[P];
    } & {
        type: T;
    };
    type TypedFieldFactoryShallow<T extends FieldType, F extends {}> = IManagedShallow & TypedFieldFactory<T, F>;
    type Group = TypedFieldFactory<FieldType.Group, IManagedLayout>;
    type Paper = TypedFieldFactory<FieldType.Paper, IManagedLayout>;
    type Expansion = TypedFieldFactory<FieldType.Expansion, components.IExpansionProps>;
    type Checkbox = TypedFieldFactoryShallow<FieldType.Checkbox, fields.ICheckboxFieldProps>;
    type Combo = TypedFieldFactoryShallow<FieldType.Combo, fields.IComboFieldProps>;
    type Component = TypedFieldFactoryShallow<FieldType.Component, fields.IComponentFieldProps>;
    type Items = TypedFieldFactoryShallow<FieldType.Items, fields.IItemsFieldProps>;
    type Line = TypedFieldFactoryShallow<FieldType.Line, fields.ILineFieldProps>;
    type Progress = TypedFieldFactoryShallow<FieldType.Progress, fields.IProgressFieldProps>;
    type Radio = TypedFieldFactoryShallow<FieldType.Radio, fields.IRadioFieldProps>;
    type Rating = TypedFieldFactoryShallow<FieldType.Rating, fields.IRatingFieldProps>;
    type Slider = TypedFieldFactoryShallow<FieldType.Slider, fields.ISliderFieldProps>;
    type Switch = TypedFieldFactoryShallow<FieldType.Switch, fields.ISwitchFieldProps>;
    type Text = TypedFieldFactoryShallow<FieldType.Text, fields.ITextFieldProps>;
    type Typography = TypedFieldFactoryShallow<FieldType.Typography, fields.ITypographyFieldProps>;
    /**
     * Логическое ветвление компонентов
     * Typescript type-guard
     */
    export type TypedFieldRegistry<T = any> = T extends Expansion ? Expansion : T extends Group ? Group : T extends Paper ? Paper : T extends Checkbox ? Checkbox : T extends Combo ? Combo : T extends Component ? Component : T extends Items ? Items : T extends Line ? Line : T extends Progress ? Progress : T extends Radio ? Radio : T extends Rating ? Rating : T extends Slider ? Slider : T extends Switch ? Switch : T extends Text ? Text : T extends Typography ? Typography : never;
    /**
     * Переопределяем подполя
     */
    export type TypedField = TypedFieldRegistry & {
        name?: string;
        fields?: TypedField[];
    };
    export {};
}
declare namespace form {
    const One: {
        ({ LoadPlaceholder, ready, ...props }: IOneProps<IField>): JSX.Element;
        typed: (props: IOneProps<TypedField>) => React.FunctionComponentElement<IOneProps<TypedField>>;
    };
    const List: ({ className, fields, selection, limit, offset, total, canSelect, canDelete, canEdit, select, click, remove, handler, fallback, ...otherProps }: IListProps) => JSX.Element;
    const OneTyped: (props: IOneProps<TypedField>) => React.FunctionComponentElement<IOneProps<TypedField>>;
    const Scaffold: (props: components.IScaffoldProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    const Breadcrumbs: ({ back, save, currentTitle, backwardTitle, saveLabel, saveDisabled, className, ...otherProps }: {
        [x: string]: any;
        back?: () => void;
        save?: () => void;
        currentTitle?: string;
        backwardTitle?: string;
        saveLabel?: string;
        saveDisabled?: boolean;
        className?: string;
    }) => JSX.Element;
    const compose: typeof utils.compose;
    const createKey: () => string;
}
