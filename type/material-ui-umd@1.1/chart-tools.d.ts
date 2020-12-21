/// <reference types="react" />
declare namespace chart {
    type func = (...args: any[]) => any;
    export interface IChartConfiguration {
        type: Chart.ChartType;
        data: Chart.ChartData;
        options: Chart.ChartOptions;
        plugins: Chart.PluginServiceRegistrationOptions[];
    }
    export interface IChartProps extends IChartConfiguration {
        getDatasetAtEvent: func;
        getElementAtEvent: func;
        getElementsAtEvent: func;
        height: number;
        legend: any;
        onElementsClick: func;
        redraw: boolean;
        width: number;
        trackBy: func;
    }
    export {};
}
declare namespace chart {
    namespace components {
        const Chart: React.ForwardRefExoticComponent<IChartProps & React.RefAttributes<unknown>>;
    }
}
declare namespace chart {
    namespace components {
        const Scatter: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        const Bubble: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        const Polar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        const Radar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        const HorizontalBar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        const Bar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        const Pie: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        const Doughnut: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    }
}
declare namespace chart {
    const Chart: React.ForwardRefExoticComponent<IChartProps & React.RefAttributes<unknown>>;
    const Scatter: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    const Bubble: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    const Polar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    const Radar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    const HorizontalBar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    const Bar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    const Pie: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    const Doughnut: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
}
declare namespace chart {
    enum ChartType {
        Scatter = "scatter",
        Bubble = "bubble",
        Polar = "polarArea",
        Radar = "radar",
        HorizontalBar = "horizontalBar",
        Bar = "bar",
        Pie = "pie",
        Doughnut = "doughnut"
    }
}
