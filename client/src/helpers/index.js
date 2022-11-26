import lang from "../lang";
import themes from "../themes";

export const chr = (...args) => String.fromCharCode(...args);

export const convertChartDataPie = data => {
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

export const convertChartDataHistory = data => {

    const tension = 0.2; 

    const datasets = {
        customers: {
            label: lang.pages.dashboard.full_count.customers,
            data: [],
            borderColor: themes.primary,
            backgroundColor: themes.primary,
            tension: tension,
        },
        orders: {
            label: lang.pages.dashboard.full_count.orders,
            data: [],
            borderColor: themes.secondary,
            backgroundColor: themes.secondary,
            tension: tension
        },
        canceled_orders: {
            label: lang.pages.dashboard.full_count.canceled_orders,
            data: [],
            borderColor: themes.tertiary,
            backgroundColor: themes.tertiary,
            tension: tension
        },
        feedbacks: {
            label: lang.pages.dashboard.full_count.feedbacks,
            data: [],
            borderColor: themes.fourth,
            backgroundColor: themes.fourth,
            tension: tension
        }
    };

    const result = {
        labels: [],
    };

    data.forEach(x => {
        result.labels.push(x.month_name);
        datasets.customers.data.push(x.total_customers);
        datasets.orders.data.push(x.total_orders);
        datasets.canceled_orders.data.push(x.total_canceled_orders);
        datasets.feedbacks.data.push(x.total_feedbacks);
    });

    result.datasets = [datasets.customers, datasets.orders, datasets.canceled_orders, datasets.feedbacks];

    return result;
}

export const clearArrayImportant = data => {
    const result = [];

    data.forEach(x => {
        if (x.important) result.push(x);
    });

    return result;
};

export const clearArrayHide = data => {
    const result = [];

    data.forEach(x => {
        if (!x.hide) result.push(x);
    });

    return result;
};


