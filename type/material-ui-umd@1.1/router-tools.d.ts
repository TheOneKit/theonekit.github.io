/// <reference types="react" />
declare var module: any;
declare var require: any;
declare var module: any;
declare namespace router {
}
declare namespace router {
    namespace utils {
        /**
         * Normalize the given path string, returning a regular expression.
         *
         * An empty array can be passed in for the keys, which will hold the
         * placeholder key descriptions. For example, using `/user/:id`, `keys` will
         * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
         */
        const pathToRegexp: (path: any, keys: any, options?: any) => any;
    }
}
declare namespace router {
    namespace components {
        const RouterContext: React.Context<(url: any) => void>;
    }
}
declare namespace router {
    namespace components {
        const Router: React.ForwardRefExoticComponent<{
            children?: any;
            guardFallback?: string;
            initialtUrl?: string;
            saveState?: boolean;
        } & React.RefAttributes<unknown>>;
    }
}
declare namespace router {
    namespace components {
        const Route: ({ component, guard, url, }: {
            component?: any;
            guard?: (url?: string) => boolean;
            url?: string;
        }) => JSX.Element;
        type RouteProps = Parameters<typeof Route>[0];
    }
}
declare namespace router {
    namespace components {
        const Link: ({ children, url, ...otherProps }: {
            [x: string]: any;
            children?: any;
            url?: string;
        }) => JSX.Element;
    }
}
declare namespace router {
    namespace components {
        const useRouter: () => (url: any) => void;
    }
}
declare namespace router {
    const Router: React.ForwardRefExoticComponent<{
        children?: any;
        guardFallback?: string;
        initialtUrl?: string;
        saveState?: boolean;
    } & React.RefAttributes<unknown>>;
    const Route: ({ component, guard, url, }: {
        component?: any;
        guard?: (url?: string) => boolean;
        url?: string;
    }) => JSX.Element;
    const Link: ({ children, url, ...otherProps }: {
        [x: string]: any;
        children?: any;
        url?: string;
    }) => JSX.Element;
    const useRouter: () => (url: any) => void;
}
