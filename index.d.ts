import 'object-exporter/dist/exporter';

export interface Configuration {
    exportable: any;
    type?: string;
}

declare var objectExporter: (params: string | Configuration) => void;

export default objectExporter;
