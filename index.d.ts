import 'object-to-csv/dist/exporter';

export interface Configuration {
    exportable: any;
    type?: string;
}

declare var obj2csv: (params: string | Configuration) => void;

export default obj2csv;
