import themes from "../themes";

export const chr = (...args) => String.fromCharCode(...args);

export const convertChartData = data => {
    let datasets = [];

    const result = {
        labels: [],
        datasets: []
    };

    Object.entries(data).forEach(([key, value]) => {
        result.labels.push(value.name);
        datasets.push(value.total_number);
    });

    result.datasets.push({ data: datasets, backgroundColor: [themes.primary, themes.secondary, themes.tertiary], hoverOffset: 4 });

    return result;
};
