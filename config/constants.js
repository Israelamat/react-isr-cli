//ready in case predefined folders need to be added.
export const FOLDER_MAP = {
    component: 'src/',
    interface: 'src/',
    service: 'src/',
};

export const ALIAS_MAP = {
    'c': 'component',
    'i': 'interface',
    'sf': 'servicef',
    'sa': 'servicea'
};

export const TYPE_CHOICES = [
    { name: 'Component', value: 'component' },
    { name: 'Service', value: 'service' },
    { name: 'Interface', value: 'interface' }
];

export default { FOLDER_MAP, ALIAS_MAP, TYPE_CHOICES };