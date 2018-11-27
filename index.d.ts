import 'csv-js/dist/exporter';

export interface Configuration {
    exportable: any;
    type?: string;
}

declare var csvJS: (params: string | Configuration) => void;

export default csvJS;
